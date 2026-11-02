import type { Locale } from "@/i18n/config";

/*
 * Photo credits, shown in the footer of every page.
 *
 * Photos by @sawitchka (used with her OK, 2 Nov 2026, in return for an
 * Instagram credit). Seven in total; in the site so far:
 * - public/images/about/hello.jpg (on the sofa)
 * - public/images/about/joy.jpg (black and white, lying down)
 * - public/images/challenge/guide.jpg (by the tree, in the forest)
 * - public/images/events/mindfulness/quote.jpg (in the forest, looking up)
 * plus the black-and-white portrait looking up (round 2 draft, not in use).
 */
export const photoCredit = {
  handle: "@sawitchka",
  url: "https://www.instagram.com/sawitchka/",
  label: { he: "צילומים", en: "Photos" } satisfies Record<Locale, string>,
};
