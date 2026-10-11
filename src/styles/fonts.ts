import { Assistant, Frank_Ruhl_Libre, Manrope, Playfair_Display } from "next/font/google";

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
});

// Hebrew body text.
export const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

// All font variables, ready to put on <html> as one className.
export const fontVariables = [playfair, manrope, frankRuhl, assistant]
  .map((font) => font.variable)
  .join(" ");
