// =============================================================================
// Auth Service — Authentication & user profile endpoints
// =============================================================================

import { apiClient } from "@/lib/api-client";
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

/**
 * Auth Service handles the actual API calls for authentication.
 * Storage of tokens is handled by the caller (e.g., NextAuth on server, or manual on client).
 */
export const authService = {
  /** Check if a phone number is already registered */
  async checkPhoneExists(data: CheckPhoneRequest) {
    return apiClient.post<ApiResponse<CheckPhoneResponse>>("/check-phone-exists", data);
  },

  /** Login with phone and password */
  async login(data: LoginRequest) {
    return apiClient.post<ApiResponse<LoginResponse>>("/login", data);
  },

  /** Refresh the current auth token */
  async refreshToken(token?: string) {
    return apiClient.get<ApiResponse<RefreshTokenResponse>>("/refresh-token", { token });
  },

  /** Login via Google OAuth */
  async googleLogin(data: GoogleLoginRequest) {
    return apiClient.post<ApiResponse<LoginResponse>>("/google-login", data);
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
    return apiClient.post<ApiResponse<LoginResponse>>("/google-new-user", data);
  },

  /** Get the authenticated user's profile */
  async getProfile(token?: string) {
    return apiClient.get<ApiResponse<UserProfile>>("/profile", { token });
  },

  /** Logout and invalidate token */
  async logout(token?: string) {
    return apiClient.post<ApiResponse<null>>("/logout", {}, { token });
  },
};
