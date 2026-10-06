import type { Metadata } from "next";
import { getDictionary } from "@/dictionaries";
import { getDirection, locales } from "@/i18n/config";
import { getLocale } from "@/i18n/get-locale";
import "@/styles/tokens.css";
import "@/styles/globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: dict.site.name,
    description: dict.site.description,
  };
}

// Pre-build one version of every page per locale.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Any other first segment (e.g. /fr) is a 404 instead of a new page.
export const dynamicParams = false;

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body>{children}</body>
    </html>
  );
}
