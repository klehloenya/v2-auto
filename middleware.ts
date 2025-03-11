// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

// Paths that don't require authentication
const publicPaths = ["/register", "/auth/login", "/api/v1/register", "/api/v1/login"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if the path is public
  const isPublicPath = publicPaths.some(publicPath => 
    path === publicPath || path.startsWith("/api/v1/public/")
  );
  
  if (isPublicPath) {
    return NextResponse.next();
  }
  
  // Get the token from the cookies
  const token = request.cookies.get("auth_token")?.value;
  
  // If no token, redirect to login
  if (!token) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }
  
  try {
    // Verify token
    verify(token, process.env.JWT_SECRET || "fallback_secret");
    return NextResponse.next();
  } catch (error) {
    // Invalid token, redirect to login
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     * - public files
     */
    "/((?!_next/static|_next/image|favicon.ico|images|public).*)",
  ],
};
