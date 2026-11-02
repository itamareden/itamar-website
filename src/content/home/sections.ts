import type { Locale } from "@/i18n/config";

/*
 * The homepage sections below the hero: a short intro with two buttons,
 * a hello beside a portrait, and the ways to
 * practise together (challenge, course, sessions).
 *
 * Hebrew only for now; a language without content here shows only the
 * hero and the sections that have their own content.
 * Draft copy, to be refined.
 */
export type WayCard = {
  label: string; // a short line above the title, e.g. the format
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition?: string; // CSS object-position, to keep the subject in the crop
};

export type HomeSections = {
  intro: {
    text: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  hello: {
    title: string;
    emphasis: string;
    text: string[];
    link: { label: string; href: string };
    imageAlt: string;
  };
  ways: {
    kicker: string;
    title: string;
    emphasis: string;
    items: WayCard[];
  };
};

const he: HomeSections = {
  // Right under the hero, as in the round 2 draft: what this is, and two ways in.
  intro: {
    text: "מדיטציה, נשימה וחיבור לגוף שמזמינים יותר נוכחות, שמחה וקלילות לחיי היום־יום. במפגשים אישיים, בקורסים ובאתגרים, אני מלווה אנשים לעצור, להקשיב לעצמם, ולחזור לחיות מתוך הלב.",
    primary: { label: "למפגשים אישיים", href: "/he/sessions" },
    secondary: { label: "לאירועים וקורסים", href: "/he/events" },
  },
  hello: {
    title: "היי,",
    emphasis: "אני איתמר",
    text: [
      "אני מנחה מדיטציה ונשימה, ומלווה אנשים לחזור לעצמם: לגוף, ללב, ולשמחה שכבר נמצאת בתוכם.",
      "הייתי הילד הרגיש שחי בתוך הראש. היום אני גר בקופנגן, ויודע מניסיון שהחיים יכולים להיות קלילים, שמחים ומלאים.",
    ],
    link: { label: "להכיר אותי עוד", href: "/he/about" },
    imageAlt: "איתמר בכובע צמר ובקפוצ׳ון סגלגל, מביט למעלה ליד עץ ביער ירוק",
  },
  ways: {
    kicker: "דרכים לתרגל יחד",
    title: "מאיפה",
    emphasis: "תרצו להתחיל?",
    items: [
      {
        label: "חינם · 5 ימים",
        title: "אתגר 5 הימים",
        text: "חמישה ימים של מדיטציה מודרכת, יחד עם קבוצה שתומכת בכם. דרך עדינה להתחיל, או לחזור, לתרגל.",
        cta: "להצטרף לאתגר",
        href: "/he/challenge",
        image: "/images/challenge/hero.jpg",
        imageAlt: "איתמר מודט על סלע ליד נחל ביער",
      },
      {
        label: "קורס לייב בזום",
        title: "מיינדפולנס",
        text: "עשרה מפגשים חיים שבהם נעמיק יחד, צעד אחר צעד, עד שהמודעות הופכת לדרך חיים.",
        cta: "לפרטים על הקורס",
        href: "/he/events/mindfulness",
        image: "/images/events/mindfulness/who.jpg",
        imageAlt: "איתמר יושב על כיסא ומודט בעיניים עצומות",
        imagePosition: "50% 30%",
      },
      {
        label: "אישי · זוגי · קבוצתי",
        title: "מפגשים",
        text: "כמה שעות של נשימה, מדיטציה וחיבור לגוף, בקופנגן או בזום, שנבנות סביבכם.",
        cta: "למפגשים",
        href: "/he/sessions",
        image: "/images/sessions/session.jpg",
        imageAlt: "איתמר מלווה מפגש נשימה",
        imagePosition: "62% 50%",
      },
    ],
  },
};

const content: Partial<Record<Locale, HomeSections>> = { he };

export function getHomeSections(locale: Locale): HomeSections | undefined {
  return content[locale];
}
