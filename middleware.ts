import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminCookie = request.cookies.get('isAdmin');

  // If the user is trying to access an admin route and is not authenticated,
  // redirect them to the login page.
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!isAdminCookie || isAdminCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If the user is authenticated and tries to visit the login page,
  // redirect them to the admin dashboard.
  if (request.nextUrl.pathname.startsWith('/admin/login')) {
    if (isAdminCookie && isAdminCookie.value === 'true') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
};
