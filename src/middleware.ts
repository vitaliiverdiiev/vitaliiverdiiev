import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = ['/ua', '/en']; // List of supported locales

  // Check if the pathname starts with a locale
  const locale = locales.find(loc => pathname.startsWith(loc));
  if (locale && pathname === locale) {
    return NextResponse.rewrite(new URL(`${locale}/home`, request.url));
  }
  
  return NextResponse.next();
}
