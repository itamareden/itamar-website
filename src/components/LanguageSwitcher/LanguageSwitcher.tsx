"use client";

import { usePathname } from "next/navigation";
import { localeNames, locales } from "@/i18n/config";
import styles from "./LanguageSwitcher.module.css";

/*
 * Links to the current page in the other language(s):
 * /he/about → /en/about.
 *
 * A client component because it needs the current URL, which only
 * usePathname() provides.
 *
 * Uses a plain <a>, not <Link>, on purpose:
 * - <Link> prefetches visible links, and every request to /en/... sets
 *   the language cookie in the proxy. Merely viewing a Hebrew page would
 *   then switch the saved language to English.
 * - A language change is a good moment for a full page load: lang, dir
 *   and fonts on <html> all change together.
 */
// className lets the parent adjust the layout (e.g. inside the mobile menu).
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname(); // e.g. "/he/about"
  const [, current, ...rest] = pathname.split("/"); // ["", "he", "about"]

  return (
    <div className={className ? `${styles.switcher} ${className}` : styles.switcher}>
      {locales
        .filter((locale) => locale !== current)
        .map((locale) => (
          <a
            key={locale}
            href={`/${[locale, ...rest].join("/")}`}
            hrefLang={locale}
            lang={locale}
            className={styles.link}
          >
            {localeNames[locale]}
          </a>
        ))}
    </div>
  );
}
