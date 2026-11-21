import type { Locale } from "@/i18n/config";
import { getMeditations } from "@/content/home/meditations";

/*
 * The Meditations page (/he/meditations; the code still calls it practices): free guided meditations on Insight
 * Timer, chosen by what the visitor needs right now. Hebrew and English.
 *
 * Descriptions: Itamar's own Insight Timer texts (English) and their Hebrew
 * translations; \n starts a new line.
 */
export type Practice = {
  need: string; // the choice at the top: what the visitor gains
  label?: string; // e.g. the language it's in
  title: string;
  summary: string; // one line, on the photo
  description: string; // a few sentences, under the title in the list (and under the photo on phones)
  length: string; // e.g. "7 דקות"
  url: string; // the meditation on Insight Timer
  image: string; // path under /public
  imagePosition?: string; // CSS object-position
  placeholder?: boolean; // shown with a "coming soon" note instead of a link
};

export type PracticesContent = {
  title: string; // the question that opens the page
  intro: string;
  listen: string; // the link to a meditation
  soon: string; // in place of the link on a placeholder
  othersTitle: string;
  moreLabel: string; // the arrow that scrolls the needs on phones
  closing: { title: string; text: string; cta: string; href: string }; // href: a path after /he or /en
  practices: Practice[];
};

const home = getMeditations("he")!;
const homeEn = getMeditations("en")!;

const he: PracticesContent = {
  title: "מה אתם צריכים עכשיו?",
  intro: "תבחרו את מה שמדבר אליכם, תמצאו לכם פינה שקטה, ותנו לי ללוות אתכם.",
  listen: home.listen,
  soon: "בקרוב",
  othersTitle: "ועוד מדיטציות",
  moreLabel: "עוד מדיטציות",
  closing: {
    title: "רוצים לתרגל יחד?",
    text: "חמישה ימים של תרגול מודרך, בחינם, עם קבוצה שמלווה אתכם.",
    cta: "לאתגר 5 הימים",
    href: "/challenge",
  },
  practices: [
    {
      need: "להתחיל את היום בשלווה",
      ...home.meditations[0],
      length: "7 דקות",
      description:
        "דרך יפה לפתוח את היום בנוכחות.\nלעצור לרגע, להאט ולחזור לגוף, כדי להתחיל את הבוקר ממקום מחובר, עם יותר פתיחות, בהירות וקלילות.",
    },
    {
      need: "לאהוב את עצמי",
      ...home.meditations[1],
      length: "7 דקות",
      description:
        "אהבה עצמית היא אחד היסודות החשובים ביותר לחיים של שמחה, חופש ושלמות. למדיטציה הזו אנחנו מגיעים כמו שאנחנו, חשופים ורכים…\nומאפשרים ללב להיפתח בקצב שלו.",
    },
    {
      need: "לשחרר",
      label: "באנגלית",
      title: "מסע הנהר",
      summary: "מסע מודרך אל אמון ושחרור.",
      length: "15 דקות",
      description:
        "הזמנה לשחרר, ולתת לחיים להוביל אתכם. דרך הדימוי של נהר נרגיש איך זה להרפות מהמאמץ, לוותר על השליטה ולסמוך על החוכמה הטבעית של החיים.",
      url: "https://insighttimer.com/itamar_eden/guided-meditations/the-river-journey-15-minute-meditation",
      image: "/images/practices/river-green.jpg", // Photo by Shanmu Wang on Unsplash, https://unsplash.com/photos/tUjLz0gBUKY
      imagePosition: "35% 70%", // the river's bend, on the start side
    },
    {
      need: "להרגיש את הגוף",
      label: "באנגלית",
      title: "להימס לאט",
      summary: "מדיטציה בתנועה: לתת לגוף להוביל אתכם.",
      length: "17 דקות",
      description:
        "תנועה איטית ומודעת, בהשראת הטנטרה והאמנות העתיקה של הטנדאווה.\nמקשיבים לגוף ולדחפים שעולים ממנו, נותנים למתחים להשתחרר ומעמיקים את הנוכחות. תרגול נהדר להרפיה, להתקרקעות ולחיבור לגוף.",
      url: "https://insighttimer.com/itamar_eden/video-guided-meditations/becoming-liquid-body-awareness-through-movement",
      image: "/images/practices/becoming-liquid.jpg",
      imagePosition: "50% 35%",
    },
    {
      need: "להתקרקע",
      label: "באנגלית",
      title: "רוגע וקרקע",
      summary: "להעמיק את השורשים ולהרגיש את האדמה מזינה אתכם.",
      length: "9 דקות",
      description:
        "תרגול עדין של התקרקעות, להרגיש רגועים, מאוזנים ונתמכים.\nבעזרת הנשימה ודימויים מהאדמה, חוזרים אל הגוף ואל תחושת יציבות טבעית.",
      url: "https://insighttimer.com/itamar_eden/video-guided-meditations/feel-calm-and-grounded",
      image: "/images/practices/grounded-roots.jpg", // Photo by Omar Ramadan on Unsplash; upright, so the wide crop shows the roots
      imagePosition: "50% 78%",
    },
    {
      need: "אינטימיות",
      label: "לזוגות · באנגלית",
      title: "אינטימיות",
      summary: "מדיטציה לזוגות: לראות באמת, ולהיראות.",
      length: "15 דקות",
      description:
        "מדיטציה מודרכת לזוגות, להעמקת האינטימיות דרך נוכחות מהלב ומבט עמוק בעיניים. כשמביטים מעבר לתפקידים ולסיפורים של הזוגיות, אפשר לגלות זה את זה מחדש, ואולי אפילו לפגוש את האלוהי שבכל אחד מכם. הזמנה לראות באמת, ולהיראות.",
      url: "https://insighttimer.com/itamar_eden/guided-meditations/couple-s-soul-gazing-a-guided-eye-gazing-meditation",
      image: "/images/practices/soul-gazing.jpg", // Photo by quilia on Unsplash, https://unsplash.com/photos/n2VvngfbXtU
    },
  ],
};

// English: the challenge isn't in English yet, so the closing invites to the
// private sessions instead.
const en: PracticesContent = {
  title: "What do you need right now?",
  intro: "Choose what speaks to you, find a quiet spot, and let me guide you.",
  listen: "Listen",
  soon: "Coming soon",
  othersTitle: "More meditations",
  moreLabel: "More meditations",
  closing: {
    title: "Want to go deeper together?",
    text: "Private sessions, in person or online, shaped around what you bring that day.",
    cta: "About private sessions",
    href: "/sessions",
  },
  practices: [
    {
      need: "Start the day calm",
      ...homeEn.meditations[0],
      length: "7 min",
      description:
        "A beautiful way to welcome the day with presence.\nThis meditation invites you to slow down, come into the body, and begin your day from a place of alignment — allowing a more open, clear, and uplifting start to your day.",
    },
    {
      need: "Love myself",
      ...homeEn.meditations[1],
      length: "7 min",
      description:
        "Loving ourselves is one of the most important foundations for living a life of joy, freedom, and feeling whole. In this meditation, we come bare and tender\u2026\nallowing our heart to open in its own way, at its own pace.",
    },
    {
      need: "Let go",
      title: "The River Journey",
      summary: "A guided journey into trust and letting go.",
      length: "15 min",
      description:
        "This guided meditation is an invitation to let go and allow life to move through you. Using the image of a river, you’ll explore what it feels like to soften effort, release control, and trust the natural intelligence of life.",
      url: he.practices[2].url,
      image: he.practices[2].image,
      imagePosition: he.practices[2].imagePosition,
    },
    {
      need: "Move my body",
      title: "Slowly Melting",
      summary: "Movement as meditation: let the body lead you.",
      length: "17 min",
      description:
        "A slow movement exploration inspired by Tantra and the ancient art of Tandava.\nThrough slow & mindful movement and body awareness, we learn to listen to the body's impulses, let go, release tension, and cultivate a deeper sense of presence. Ideal for relaxation, grounding, and embodied self-awareness.",
      url: he.practices[3].url,
      image: he.practices[3].image,
      imagePosition: he.practices[3].imagePosition,
    },
    {
      need: "Feel grounded",
      title: "Feel Calm and Grounded",
      summary: "Deepen your roots, and feel nourished by the earth.",
      length: "9 min",
      description:
        "A gentle grounding practice to help you feel calm, centered, and supported.\nUsing breath and earth-based imagery, this meditation guides you back into your body and into a natural sense of stability.",
      url: he.practices[4].url,
      image: he.practices[4].image,
      imagePosition: he.practices[4].imagePosition,
    },
    {
      need: "Connect as a couple",
      label: "For couples",
      title: "Couple's Soul Gazing",
      summary: "A meditation for couples: to truly see, and to be seen.",
      length: "15 min",
      description:
        "A guided meditation for couples to deepen intimacy through heart-centered presence and eye gazing. As you gently look beyond the roles and stories that shape your relationship, you may discover new layers of one another, and perhaps even catch a glimpse of the divine that lives within each of you. An invitation to truly see, and to be seen.",
      url: he.practices[5].url,
      image: he.practices[5].image,
    },
  ],
};

const content: Partial<Record<Locale, PracticesContent>> = { en, he };

export function getPractices(locale: Locale): PracticesContent | undefined {
  return content[locale];
}
