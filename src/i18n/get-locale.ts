import { notFound } from "next/navigation";
import { locale } from "next/root-params";
import { isLocale, type Locale } from "./config";

/*
 * The current page's locale, read from the URL (/he/... → "he").
 * Works in any server component, so the locale doesn't have to be
 * passed down through props.
 */
export async function getLocale(): Promise<Locale> {
  const value = await locale();
  if (!isLocale(value)) notFound();
  return value;
}
