import type { Locale } from "@/i18n/config";
import { getLocale } from "@/i18n/get-locale";
import { en, type Dictionary } from "./en";
import { he } from "./he";

const dictionaries: Record<Locale, Dictionary> = { en, he };

// Interface text for the current page's language.
export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}

export type { Dictionary };
