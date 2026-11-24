import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";

/*
 * How each page appears in Google, in the browser tab and in link previews:
 * the title (the blue line in Google) and the description (the grey text
 * under it). Neither shows on the page itself.
 *
 * Guidelines: titles up to ~60 characters, descriptions ~140–160, most
 * important words first. The surname is אדן.
 *
 * Hebrew: final (approved 17 Nov). English: drafts, to be finished in the
 * English pass.
 *
 * Which pages Google may index is decided here too (see the bottom of the
 * file): every other page stays out of search results by default.
 */
export type SeoText = { title: string; description: string };

export type SeoPage =
  | "home"
  | "about"
  | "sessions"
  | "breathingLife"
  | "challenge"
  | "events"
  | "liveCourse"
  | "contact"
  | "meditations"
  | "privacy";

const seo: Record<Locale, Record<SeoPage, SeoText>> = {
  he: {
    home: {
      title: "איתמר אדן | נשימה מעגלית ומדיטציה – מרחב לנוכחות וצמיחה",
      description:
        "מרחב נעים לפגוש את עצמכם קצת יותר מקרוב ולגלות אפשרויות חדשות. נשימה מעגלית, מדיטציה ותנועה: מפגשים אישיים, קורסים ותרגולים בקופנגן ובאונליין.",
    },
    about: {
      title: "הסיפור שלי | איתמר אדן",
      description:
        "על הדרך שעברתי, הדברים שגיליתי על עצמי, האנשים שפגשתי בדרך, ומה שממשיך לסקרן, לרגש ולהניע אותי עד היום.",
    },
    sessions: {
      title: "מפגשי נשימה מעגלית (ריברסינג) | איתמר אדן",
      description:
        "מפגש נשימה מעגלית אישי, זוגי או קבוצתי, בליווי צמוד ועם מוזיקה שמותאמת לכם. מרחב בטוח לשחרר רגשות ומתחים ולפגוש את עצמכם לעומק. אונליין ובקופנגן.",
    },
    breathingLife: {
      title: "קורס נשימה ומדיטציה אונליין | Breathing Life",
      description:
        "קורס אונליין לנשימה מודעת ומדיטציה: כלים פשוטים לרוגע, איזון ונוכחות בחיי היום-יום. באנגלית, בקצב שלכם, מכל מקום.",
    },
    challenge: {
      title: "אתגר מדיטציה חינמי: 5 ימים של תרגול מודרך | איתמר אדן",
      description:
        "חמישה ימים של תרגול יומי קצר ונעים: סרטון, מדיטציה מודרכת וטיפים ליום-יום. מתאים לכל רמה, גם למי שמתחילים.",
    },
    events: {
      title: "סדנאות ואירועים | איתמר אדן",
      description:
        "קורסים, סדנאות ומפגשים קבוצתיים לתרגול מדיטציה, נשימה וחיבור לגוף יחד עם איתמר אדן, אונליין ובקופנגן.",
    },
    liveCourse: {
      title: "קורס מדיטציה לייב אונליין | איתמר אדן",
      description:
        "מפגשי לייב עם מדיטציה מודרכת בכל מפגש. לחקור יחד את היסודות של חיים מודעים, ולהפוך את המודעות לדרך חיים.",
    },
    contact: {
      title: "צרו קשר | איתמר אדן",
      description:
        "אשמח לשמוע מכם: שאלות, תיאום מפגש או כל דבר אחר. כתבו לי כאן, בווטסאפ או במייל, ואחזור אליכם.",
    },
    meditations: {
      title: "מדיטציות מודרכות בחינם | איתמר אדן",
      description:
        "מדיטציות מודרכות בחינם לפי מה שאתם צריכים עכשיו: לשלווה, לאהבה עצמית, לשחרור ולהתקרקעות. תמצאו פינה שקטה ותנו לי ללוות אתכם.",
    },
    privacy: {
      title: "מדיניות פרטיות | איתמר אדן",
      description: "איזה מידע נאסף באתר, למה, מי עוזר לטפל בו, ואיך אפשר לבקש לראות או למחוק אותו.",
    },
  },
  en: {
    home: {
      title: "Itamar Eden | Breathwork, Meditation & Embodiment",
      description:
        "Explore breathwork, meditation and embodiment with Itamar Eden. Sessions in Koh Phangan and online, courses, and free guided meditations.",
    },
    about: {
      title: "My story | Itamar Eden",
      description:
        "The path I've walked, what I've discovered about myself, the people I met along the way, and what keeps me curious, moved and inspired to this day.",
    },
    sessions: {
      title: "Rebirthing breathwork sessions | Itamar Eden",
      description:
        "Private, couples and group breathwork sessions with Itamar Eden: a safe space to let go, release emotions and meet yourself deeply. Koh Phangan & online.",
    },
    breathingLife: {
      title: "Online breathwork and meditation course | Breathing Life",
      description:
        "An online course in conscious breathing and meditation: simple tools for calm, balance and presence in everyday life. At your own pace, from anywhere.",
    },
    challenge: {
      title: "Free meditation challenge: 5 days of guided practice | Itamar Eden",
      description:
        "Five days of short, pleasant daily practice: a video, a guided meditation and tips for your day. For every level, beginners included.",
    },
    events: {
      title: "Workshops and events | Itamar Eden",
      description:
        "Courses, workshops and group gatherings to practise meditation, breath and embodiment together with Itamar Eden, online and in Koh Phangan.",
    },
    liveCourse: {
      title: "Live online meditation course | Itamar Eden",
      description:
        "Live sessions with a guided meditation in each one. Explore the foundations of a conscious life together, and turn awareness into a way of living.",
    },
    contact: {
      title: "Contact | Itamar Eden",
      description:
        "Would love to hear from you: questions, booking a session or anything else. Write to me here, on WhatsApp or by email, and I'll get back to you.",
    },
    meditations: {
      title: "Free guided meditations | Itamar Eden",
      description:
        "Free guided meditations for what you need right now: calm, self-love, letting go and grounding. Find a quiet spot and let me guide you.",
    },
    privacy: {
      title: "Privacy policy | Itamar Eden",
      description: "What information the site collects, why, who helps handle it, and how to ask to see or delete it.",
    },
  },
};

// The site's one official address. Every page names its address here as
// canonical, so copies (e.g. the vercel.app address) point back to it.
export const siteUrl = "https://www.itamareden.love";

// false during friends' QA: no page may be indexed yet. Set to true to let
// Google and AI search in; the pages listed in `indexed` then go live.
export const openToSearch = true;

// Each page's address after the language (/he, /en).
const paths: Record<SeoPage, string> = {
  home: "",
  about: "/about",
  sessions: "/sessions",
  breathingLife: "/courses/breathing-life",
  challenge: "/challenge",
  events: "/events",
  liveCourse: "/events/mindfulness",
  contact: "/contact",
  meditations: "/meditations",
  privacy: "/privacy",
};

// Finished pages Google may index, per language. Not listed, so kept out:
// the live course (until its name, structure and address are decided) and
// English pages not yet translated. Pages that never use getSeo
// (challenge days, welcome and closing words) are always out.
const indexed: Record<Locale, SeoPage[]> = {
  he: ["home", "about", "sessions", "breathingLife", "challenge", "contact", "meditations"],
  en: ["home", "about", "sessions", "breathingLife", "contact", "meditations"],
};

export function getSeo(page: SeoPage, locale: Locale): Metadata {
  const index = openToSearch && indexed[locale].includes(page);
  // hreflang: a page indexed in every language names all its versions, so
  // Google shows each searcher theirs. x-default is the address without a
  // language ("/", "/about"), which picks one per visitor (proxy.ts), as
  // Google recommends for sites that redirect by language.
  const inAll = locales.every((l) => indexed[l].includes(page));
  const languages = inAll
    ? { ...Object.fromEntries(locales.map((l) => [l, `/${l}${paths[page]}`])), "x-default": paths[page] || "/" }
    : undefined;
  return {
    ...seo[locale][page],
    alternates: { canonical: `/${locale}${paths[page]}`, languages },
    robots: { index, follow: true },
  };
}

// For sitemap.xml: the full address of every page Google may index.
export function indexedUrls(): string[] {
  return locales.flatMap((locale) => indexed[locale].map((page) => `${siteUrl}/${locale}${paths[page]}`));
}
