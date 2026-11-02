import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isMaintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true" ||
    process.env.MAINTENANCE_MODE === "true";

  const { pathname, searchParams } = request.nextUrl;

  // 1. Admin/Developer bypass: allow testing site by visiting ?bypass=admin
  if (searchParams.get("bypass") === "admin") {
    const url = request.nextUrl.clone();
    url.searchParams.delete("bypass");
    const response = NextResponse.redirect(url);
    response.cookies.set("maintenance_bypass", "granted", {
      path: "/",
      maxAge: 60 * 60 * 12, // 12 hours
      httpOnly: true,
      sameSite: "lax",
    });
    return response;
  }

  // 2. Clear bypass cookie if requested: ?bypass=clear
  if (searchParams.get("bypass") === "clear") {
    const url = request.nextUrl.clone();
    url.searchParams.delete("bypass");
    const response = NextResponse.redirect(url);
    response.cookies.delete("maintenance_bypass");
    return response;
  }

  const hasBypass =
    request.cookies.get("maintenance_bypass")?.value === "granted";

  // 3. Maintenance mode is active and user does not have bypass cookie
  if (isMaintenanceMode && !hasBypass) {
    if (pathname !== "/maintenance") {
      const url = request.nextUrl.clone();
      url.pathname = "/maintenance";
      return NextResponse.redirect(url);
    }
  }

  // 4. Maintenance mode is turned OFF, but user navigates to /maintenance directly
  if (!isMaintenanceMode && pathname === "/maintenance") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all requests except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, icons, and static assets with common file extensions
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?|txt|xml)$).*)",
  ],
};

