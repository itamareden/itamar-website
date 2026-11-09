import type { Locale } from "@/i18n/config";

/*
 * The homepage sections below the hero: what opens up for them (no
 * buttons, just a reason to keep reading), a hello beside a portrait, and the ways to
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
  invite: {
    opening: string; // a short opener, in the accent
    imagine: string[]; // what they imagine, in the heading font, one line each
    question: string;
    body: string[]; // the rest of the text, quieter, one paragraph each; **bold** parts allowed
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
  // Right under the hero: an invitation to imagine, text only, no call to action.
  invite: {
    opening: "תגידו רגע...",
    imagine: [
      "מכירים את הרגעים האלה שאתם מרשים לעצמכם לדמיין איך החיים שלכם היו יכולים להיראות? אם הייתם מקשיבים יותר ללב, נותנים מקום לסקרנות, מעזים להיות קצת יותר אתם?",
    ],
    question: "ואתם מאמינים שזה באמת אפשרי עבורכם?",
    body: [
      "כי לפעמים נדמה שאנחנו יודעים בדיוק מה היינו רוצים, אבל משהו עוצר אותנו. הפחד ממה שיחשבו, ההרגלים שכבר הפכו לחלק מאיתנו, הקול הזה בראש שתמיד מוצא סיבה למה לא עכשיו, למה לא אנחנו.",
      "**אני מאמין שיש בכולנו הרבה יותר ממה שאנחנו רגילים להביא לידי ביטוי.** ושלא חייבים לדעת מראש לאן הדרך תוביל. אפשר להתחיל בקטן, להקשיב קצת יותר פנימה, להרגיש את הגוף, להתנסות בדברים חדשים, ולגלות מה קורה כשאנחנו נותנים לעצמנו קצת יותר חופש.",
    ],
  },
  hello: {
    title: "היי,",
    emphasis: "אני איתמר",
    text: [
      "אני מנחה מדיטציה, נשימה ותנועה, ומלווה אנשים בדרך חזרה לעצמם: לגוף, ללב ולשמחה שכבר נמצאת בתוכם.",
      "הייתי הילד הרגיש שחי הרבה בתוך הראש, ולא תמיד העז להביא את עצמו לידי ביטוי. במשך שנים הרגשתי שיש בי הרבה יותר ממה שאני מאפשר לעצמי לחיות.",
      "המסע שלי התחיל מתוך רצון להשתחרר מהפחדים, אבל בדרך גיליתי משהו הרבה יותר מעניין: כמה כיף זה להכיר את עצמי מחדש, להתנסות, להיפתח לאנשים ולתת לחיים להפתיע אותי.",
      "ואני עדיין מגלה, כל הזמן.",
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
