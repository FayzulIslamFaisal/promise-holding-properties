// =============================================================================
// Next.js Middleware — Route protection for authenticated pages
// =============================================================================
// Protects all routes under /(customer)/* — redirects to /login if no token.
// =============================================================================

import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PATHS = ["/dashboard"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  if (!isProtected) {
    return NextResponse.next();
  }

  // Check for auth token in cookies or Authorization header
  const cookieName = process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME ?? "php_token";
  const token = request.cookies.get(cookieName)?.value;

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
