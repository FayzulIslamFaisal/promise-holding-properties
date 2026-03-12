// =============================================================================
// API Client — Centralized HTTP client for all backend requests
// =============================================================================
// Usage:
//   import { apiClient } from "@/lib/api-client";
//   const data = await apiClient.get<HeaderBanner[]>("/header-banners");
// =============================================================================

import type { ApiResponse, ApiErrorResponse } from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

// ---------------------------------------------------------------------------
// Token helpers (client-side only)
// ---------------------------------------------------------------------------
function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("auth_token");
}

export function setStoredToken(token: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("auth_token", token);
}

export function clearStoredToken(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("auth_token");
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
type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  /** Pass a token explicitly (useful for server-side requests) */
  token?: string;
};

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { body, token, headers: customHeaders, ...rest } = options;

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(customHeaders as Record<string, string>),
  };

  // Attach auth token
  const authToken = token ?? getStoredToken();
  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  // Set content-type for JSON bodies
  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    headers,
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  });

  // Handle non-OK responses
  if (!response.ok) {
    let errorData: ApiErrorResponse | null = null;
    try {
      errorData = await response.json();
    } catch {
      // response body may not be JSON
    }

    throw new ApiError(
      response.status,
      errorData?.message ?? `Request failed with status ${response.status}`,
      errorData?.errors
    );
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
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
