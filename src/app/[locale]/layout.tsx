import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";
import { heroImageScript } from "@/components/HeroImage/HeroImage";
import { siteUrl } from "@/content/seo";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { getDictionary } from "@/dictionaries";
import { getDirection, locales } from "@/i18n/config";
import { getLocale } from "@/i18n/get-locale";
import { fontVariables } from "@/styles/fonts";
import "@/styles/tokens.css";
import "@/styles/globals.css";
import styles from "./layout.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: dict.site.name,
    description: dict.site.description,
    // Full addresses (canonical, sitemap) are built on the official domain.
    metadataBase: new URL(siteUrl),
    // By default a page stays out of search results. Finished pages opt in
    // through getSeo (src/content/seo.ts), which also holds the switch that
    // keeps everything out during friends' QA (openToSearch).
    robots: { index: false, follow: true },
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
    <html lang={locale} dir={getDirection(locale)} className={fontVariables}>
      <head>
        {/* Shows each hero photo the moment it has fully loaded (HeroImage). */}
        <script dangerouslySetInnerHTML={{ __html: heroImageScript }} />
        {/* Without JavaScript, show hero photos normally. */}
        <noscript>
          <style>{"[data-hero-img]{opacity:1!important}"}</style>
        </noscript>
      </head>
      <body className={styles.body}>
        <SiteHeader />
        <main className={styles.main}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
