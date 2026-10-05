import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, type Locale } from "@/i18n/config";

/*
 * Runs before every page request.
 * - URL already has a locale (/he/about): remember it in a cookie, carry on.
 * - URL has no locale (/ or /about): redirect to the visitor's language.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    const response = NextResponse.next();
    if (request.cookies.get(localeCookie)?.value !== firstSegment) {
      response.cookies.set(localeCookie, firstSegment, {
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// Order of preference: the language they used last time, then the
// browser's language settings, then the default.
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && isLocale(saved)) return saved;

  return fromAcceptLanguage(request.headers.get("accept-language")) ?? defaultLocale;
}

// Parses a header like "he-IL,he;q=0.9,en;q=0.8" and returns the
// highest-ranked language we publish in.
function fromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        language: tag.split("-")[0].toLowerCase(),
        weight: q ? Number(q.trim().slice(2)) : 1,
      };
    })
    .sort((a, b) => b.weight - a.weight);

  for (const { language } of ranked) {
    if (isLocale(language)) return language;
  }
  return undefined;
}

export const config = {
  // Skip Next.js internals, API routes, and files with an extension
  // (favicon.ico, images) so they're served as-is.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
