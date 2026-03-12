// =============================================================================
// Auth Service — Authentication & user profile endpoints
// =============================================================================
// Endpoints:
//   POST /check-phone-exists    — Check if phone is registered
//   POST /login                 — Login with phone + password
//   GET  /refresh-token         — Refresh auth token
//   POST /google-login          — Login via Google OAuth
//   POST /check-user-exists-by-google-login — Check if Google user exists
//   POST /google-new-user       — Complete profile for new Google user
//   GET  /profile               — Get authenticated user profile
//   POST /logout                — Logout and invalidate token
// =============================================================================

import { apiClient, setStoredToken, clearStoredToken } from "@/lib/api-client";
import type {
  ApiResponse,
  LoginRequest,
  LoginResponse,
  CheckPhoneRequest,
  CheckPhoneResponse,
  GoogleLoginRequest,
  CheckGoogleUserRequest,
  GoogleNewUserRequest,
  UserProfile,
  RefreshTokenResponse,
} from "@/types/api";

export const authService = {
  /** Check if a phone number is already registered */
  async checkPhoneExists(data: CheckPhoneRequest) {
    return apiClient.post<ApiResponse<CheckPhoneResponse>>("/check-phone-exists", data);
  },

  /** Login with phone and password. Stores the token automatically. */
  async login(data: LoginRequest) {
    const response = await apiClient.post<ApiResponse<LoginResponse>>("/login", data);
    if (response.data?.token) {
      setStoredToken(response.data.token);
    }
    return response;
  },

  /** Refresh the current auth token */
  async refreshToken() {
    const response = await apiClient.get<ApiResponse<RefreshTokenResponse>>("/refresh-token");
    if (response.data?.token) {
      setStoredToken(response.data.token);
    }
    return response;
  },

  /** Login via Google OAuth */
  async googleLogin(data: GoogleLoginRequest) {
    const response = await apiClient.post<ApiResponse<LoginResponse>>("/google-login", data);
    if (response.data?.token) {
      setStoredToken(response.data.token);
    }
    return response;
  },

  /** Check if a Google user already exists */
  async checkGoogleUserExists(data: CheckGoogleUserRequest) {
    return apiClient.post<ApiResponse<CheckPhoneResponse>>(
      "/check-user-exists-by-google-login",
      data
    );
  },

  /** Complete profile setup for a new Google-authenticated user */
  async googleNewUser(data: GoogleNewUserRequest) {
    const response = await apiClient.post<ApiResponse<LoginResponse>>("/google-new-user", data);
    if (response.data?.token) {
      setStoredToken(response.data.token);
    }
    return response;
  },

  /** Get the authenticated user's profile */
  async getProfile() {
    return apiClient.get<ApiResponse<UserProfile>>("/profile");
  },

  /** Logout and clear the stored token */
  async logout() {
    const response = await apiClient.post<ApiResponse<null>>("/logout");
    clearStoredToken();
    return response;
  },
};
