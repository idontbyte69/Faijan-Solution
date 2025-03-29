import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// List of public routes that don't require authentication
const publicRoutes = ['/', '/about', '/services', '/gallery', '/contact', '/blog'];

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
    const baseUrl = process.env.NEXTAUTH_URL || `https://${req.headers.get('host')}`;

    // Allow public routes without any redirects
    if (isPublicRoute) {
      return null;
    }

    // Handle auth pages (login, register, etc.)
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', baseUrl));
      }
      return null;
    }

    // Handle protected routes
    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }
      return NextResponse.redirect(
        new URL(`/auth/login?from=${encodeURIComponent(from)}`, baseUrl)
      );
    }

    // Role-based access control for dashboard
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
      if (!token?.role || (token.role !== 'admin' && token.role !== 'moderator')) {
        return NextResponse.redirect(new URL('/', baseUrl));
      }
    }

    // Admin-only routes
    if (req.nextUrl.pathname.startsWith('/dashboard/admin')) {
      if (token.role !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', baseUrl));
      }
    }

    return null;
  },
  {
    callbacks: {
      authorized: () => true // We'll handle authorization in the middleware function
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}; 