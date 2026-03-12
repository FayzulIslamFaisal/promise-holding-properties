"use client";

// =============================================================================
// Auth Context — Global authentication state for client components
// =============================================================================
// Usage:
//   Wrap your layout with <AuthProvider>
//   Access auth state with useAuth() hook
// =============================================================================

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { authService } from "@/services/auth.service";
import { clearStoredToken } from "@/lib/api-client";
import type { UserProfile, LoginRequest, GoogleLoginRequest } from "@/types/api";

interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextValue extends AuthState {
  login: (data: LoginRequest) => Promise<void>;
  googleLogin: (data: GoogleLoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  const refreshUser = useCallback(async () => {
    try {
      const response = await authService.getProfile();
      setState({
        user: response.data,
        isLoading: false,
        isAuthenticated: true,
      });
    } catch {
      clearStoredToken();
      setState({ user: null, isLoading: false, isAuthenticated: false });
    }
  }, []);

  const login = useCallback(
    async (data: LoginRequest) => {
      await authService.login(data);
      await refreshUser();
    },
    [refreshUser]
  );

  const googleLogin = useCallback(
    async (data: GoogleLoginRequest) => {
      await authService.googleLogin(data);
      await refreshUser();
    },
    [refreshUser]
  );

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      clearStoredToken();
      setState({ user: null, isLoading: false, isAuthenticated: false });
    }
  }, []);

  // Hydrate auth state on mount
  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;

    if (token) {
      refreshUser();
    } else {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, [refreshUser]);

  return (
    <AuthContext.Provider
      value={{ ...state, login, googleLogin, logout, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return context;
}
