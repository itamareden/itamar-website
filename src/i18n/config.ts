/*
 * The languages the site is published in. Everything locale-related
 * (routing, the redirect from "/", text direction) reads from here.
 */

export const locales = ["en", "he"] as const;

export type Locale = (typeof locales)[number];

// Used when the browser asks for a language we don't publish in.
export const defaultLocale: Locale = "en";

// Remembers the visitor's language so "/" sends them back to it.
export const localeCookie = "locale";

// Each language's name in that language, as shown in the language
// switcher (a Hebrew reader looks for "עברית", not "Hebrew").
export const localeNames: Record<Locale, string> = {
  en: "English",
  he: "עברית",
};

const direction: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  he: "rtl",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale) {
  return direction[locale];
}
