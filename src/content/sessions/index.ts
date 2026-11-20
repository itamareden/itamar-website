import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { he } from "./he";

/*
 * The Sessions page (/sessions): private, couples and group sessions,
 * in Koh Phangan or online. One file per language. No prices: people
 * write on WhatsApp and talk first. **bold** marks emphasis.
 */
export type SessionsContent = {
  settings: {
    // Itamar's WhatsApp chat link, opening with a short first message.
    // While it's empty, the buttons show but aren't links.
    whatsappUrl: string;
  };
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    // In parts: on wide screens each one starts on a new line.
    lead: string[];
    button: string;
    imageAlt: string;
  };
  // Itamar's own words, right after the photo, in beats.
  // A beat may open with a larger line.
  note: { lead?: string; paragraphs: string[] }[];
  // What can open up: five qualities, each with its own hand drawing.
  gains: {
    kicker: string;
    title: string;
    emphasis: string;
    lead: string;
    items: { image: string; title: string; text: string }[];
  };
  // The breathwork session only. A step may give its length.
  flow: {
    kicker: string;
    title: string;
    emphasis: string;
    steps: { title: string; length?: string; text: string }[];
  };
  formats: {
    kicker: string;
    title: string;
    emphasis: string;
    place: string;
    items: {
      length: string;
      unit: string;
      title: string;
      subtitle?: string;
      text: string;
      format: string;
    }[];
  };
  // An answer may have several paragraphs.
  faq: {
    title: string;
    note: string;
    items: { question: string; answer: string[] }[];
  };
  closing: { title: string; emphasis: string; text: string };
};

const content: Record<Locale, SessionsContent> = { en, he };

export function getSessions(locale: Locale): SessionsContent {
  return content[locale];
}
