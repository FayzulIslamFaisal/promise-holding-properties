// =============================================================================
// API Client — Centralized HTTP client for all backend requests
// =============================================================================

import type { ApiErrorResponse } from "@/types/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getAuthHeader(token?: string): Record<string, string> {
  if (token) return { Authorization: `Bearer ${token}` };
  
  // Only try localStorage if in browser and no token provided
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) return { Authorization: `Bearer ${storedToken}` };
  }
  
  return {};
}

// ---------------------------------------------------------------------------
// Custom error class
// ---------------------------------------------------------------------------
export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(status: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

// ---------------------------------------------------------------------------
// Core request function
// ---------------------------------------------------------------------------
export type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  /** Pass a token explicitly (useful for server-side requests) */
  token?: string;
  /** Custom base URL */
  baseUrl?: string;
};

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { body, token, headers: customHeaders, baseUrl, ...rest } = options;

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...getAuthHeader(token),
    ...(customHeaders as Record<string, string>),
  };

  // Set content-type for JSON bodies
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  // Determine base URL
  // On server, relative URLs don't work, so we MUST have an absolute URL
  const base = baseUrl || API_BASE_URL;
  const isServer = typeof window === "undefined";
  
  let fullUrl = `${base}${endpoint}`;
  
  // If we are on development and client-side, we might want to use the proxy
  if (!isServer && process.env.NODE_ENV === "development" && !baseUrl) {
    fullUrl = `/api/proxy${endpoint}`;
  }

  try {
    const response = await fetch(fullUrl, {
      ...rest,
      headers,
      body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      let errorData: ApiErrorResponse | null = null;
      try {
        errorData = await response.json();
      } catch { /* ignore */ }

      throw new ApiError(
        response.status,
        errorData?.message ?? `Request failed with status ${response.status}`,
        errorData?.errors
      );
    }

    if (response.status === 204) return undefined as T;
    return response.json();
  } catch (err: unknown) {
    if (err instanceof ApiError) throw err;
    
    const errMessage = err instanceof Error ? err.message : String(err);
    if (errMessage === "Failed to fetch" || errMessage.includes("Network Error")) {
      throw new ApiError(503, "Network Error: Unable to reach the API server.");
    }
    throw new ApiError(500, errMessage || "An unexpected request error occurred.");
  }
}

// ---------------------------------------------------------------------------
// Public API client
// ---------------------------------------------------------------------------
export const apiClient = {
  get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "GET" });
  },

  post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "POST", body });
  },

  put<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "PUT", body });
  },

  patch<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "PATCH", body });
  },

  delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return request<T>(endpoint, { ...options, method: "DELETE" });
  },
};

// Internal-ish helpers for legacy support during transition
export function setStoredToken(token: string): void {
  if (typeof window !== "undefined") localStorage.setItem("auth_token", token);
}

export function clearStoredToken(): void {
  if (typeof window !== "undefined") localStorage.removeItem("auth_token");
}
