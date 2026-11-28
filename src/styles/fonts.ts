import {
  Assistant,
  Frank_Ruhl_Libre,
  Manrope,
  Noto_Serif_Hebrew,
  Playfair_Display,
  Rubik,
} from "next/font/google";

/*
 * Site fonts, self-hosted by next/font: the files are downloaded at build
 * time and served from our own domain, so visitors never contact Google.
 *
 * Each font only exposes a CSS variable (e.g. --font-playfair). tokens.css
 * turns those into role tokens (--font-heading, --font-body), and components
 * only ever use the role tokens.
 *
 * All four are variable fonts, so one file covers every weight.
 */

// English headings. The only one with an italic: used for emphasis in headlines.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

// English body text.
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Hebrew headings. Hebrew fonts have no italic, so emphasis uses colour instead.
export const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  variable: "--font-frank-ruhl",
  // Only a fallback for Hebrew letters inside English headings: not worth
  // downloading up front.
  preload: false,
});

// Hebrew headings. Latin subset too, so English words inside a Hebrew
// heading match it.
export const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
});

// Hebrew review quotes: a serif voice for the words of others.
export const notoSerifHebrew = Noto_Serif_Hebrew({
  subsets: ["hebrew", "latin"],
  variable: "--font-noto-serif-hebrew",
  // The quotes sit lower on the page, so this loads when they appear rather
  // than competing with the first screen's fonts and photo.
  preload: false,
});

// Hebrew body text.
export const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

// All font variables, ready to put on <html> as one className.
export const fontVariables = [playfair, manrope, frankRuhl, rubik, notoSerifHebrew, assistant]
  .map((font) => font.variable)
  .join(" ");
