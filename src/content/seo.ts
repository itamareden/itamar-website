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
  | "contact";

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
        "לשאלות, לתיאום מפגש נשימה מעגלית או לכל דבר אחר: כתבו לי כאן, בווטסאפ או במייל, ואחזור אליכם.",
    },
  },
  en: {
    home: {
      title: "Itamar Eden | Breathwork and meditation – a space for presence and growth",
      description:
        "A warm space to meet yourself a little more closely and discover new possibilities. Rebirthing breathwork, meditation and movement: private sessions, courses and practices in Koh Phangan and online.",
    },
    about: {
      title: "My story | Itamar Eden",
      description:
        "The path I've walked, what I've discovered about myself, the people I met along the way, and what keeps me curious, moved and inspired to this day.",
    },
    sessions: {
      title: "Rebirthing breathwork sessions | Itamar Eden",
      description:
        "A private, couples or group rebirthing breathwork session, with close guidance and music tuned to you. A safe space to release emotion and tension and meet yourself deeply. Online and in Koh Phangan.",
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
        "For questions, to book a breathwork session or anything else: write to me here, on WhatsApp or by email, and I'll get back to you.",
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
};

// Finished pages Google may index, per language. Not listed, so kept out:
// the live course (until its name, structure and address are decided) and
// every English page (until the English pass). Pages that never use getSeo
// (challenge days, welcome and closing words, Practices) are always out.
const indexed: Record<Locale, SeoPage[]> = {
  he: ["home", "about", "sessions", "breathingLife", "challenge", "contact"],
  en: [],
};

export function getSeo(page: SeoPage, locale: Locale): Metadata {
  const index = openToSearch && indexed[locale].includes(page);
  return {
    ...seo[locale][page],
    alternates: { canonical: `/${locale}${paths[page]}` },
    robots: { index, follow: true },
  };
}

// For sitemap.xml: the full address of every page Google may index.
export function indexedUrls(): string[] {
  return locales.flatMap((locale) => indexed[locale].map((page) => `${siteUrl}/${locale}${paths[page]}`));
}
