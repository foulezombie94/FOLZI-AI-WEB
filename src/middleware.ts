import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root redirect to language path like YAZIO
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language") || "";
    const lower = acceptLanguage.toLowerCase();
    let targetLang = "fr";

    if (lower.startsWith("en") || lower.includes("en-") || lower.includes(",en")) {
      targetLang = "en";
    } else if (lower.startsWith("es") || lower.includes("es-") || lower.includes(",es")) {
      targetLang = "es";
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${targetLang}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
