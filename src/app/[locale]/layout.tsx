import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDirection, isLocale, locales } from "@/i18n/config";
import "@/styles/tokens.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Itamar Eden",
  description: "Meditation, breath, movement and embodiment with Itamar Eden.",
};

// Pre-build one version of every page per locale.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Any other first segment (e.g. /fr) is a 404 instead of a new page.
export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body>{children}</body>
    </html>
  );
}
