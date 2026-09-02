import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getPreferredLocale(acceptLanguage: string | null): "fr" | "en" | "es" {
  if (!acceptLanguage) return "fr";

  // Parse HTTP Accept-Language: e.g. "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7"
  const candidates = acceptLanguage
    .split(",")
    .map((item) => {
      const [langTag, qParam] = item.trim().split(";");
      const q = qParam && qParam.startsWith("q=") ? parseFloat(qParam.slice(2)) : 1.0;
      const primaryCode = langTag.trim().toLowerCase().split("-")[0]; // "fr-fr" -> "fr"
      return { code: primaryCode, q: isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of candidates) {
    if (item.code === "fr") return "fr";
    if (item.code === "es") return "es";
    if (item.code === "en") return "en";
  }

  return "fr";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root redirect to language path like YAZIO
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language");
    const targetLang = getPreferredLocale(acceptLanguage);

    const url = request.nextUrl.clone();
    url.pathname = `/${targetLang}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
