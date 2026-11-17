import type { Locale } from "@/i18n/config";

/*
 * The homepage sections below the hero: what opens up for them (no
 * buttons, just a reason to keep reading), a hello beside a portrait, and the ways to
 * practise together (challenge, course, sessions).
 *
 * A language without content here shows only the hero and the sections
 * that have their own content. Each language picks its own ways cards.
 * Draft copy, to be refined.
 */
export type WayCard = {
  label: string; // a short line above the title, e.g. the format
  title: string;
  text: string; // \n starts a new line
  cta: string;
  href: string; // a page, or #free-meditations further down the homepage
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
      "האמת? אם הייתם אומרים לי לפני כמה שנים שאעמוד מול אנשים, אנחה קבוצות ואשתף כל כך הרבה מעצמי, היה לי קשה להאמין.",
      "במשך שנים הרגשתי שיש בי הרבה יותר ממה שאני מעז להביא לידי ביטוי. רציתי להיפתח, להתנסות, להיות חופשי יותר להביא את עצמי לעולם. אבל הרגישות והפחדים שלי לא פעם השאירו אותי מאחורי הקלעים. בעבודה, בחברה, כמעט בכל מקום. וככה, לא מעט חלקים ממני נשארו בפנים, מחכים שאמצא את האומץ לתת להם מקום.",
    ],
    link: { label: "להכיר אותי עוד ←", href: "/he/about" },
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
        text: "חמישה ימים, חמישה מפגשים קטנים עם עצמכם. הזדמנות להתחיל לתרגל, או לחזור למדיטציה, ולגלות כמה טוב זה מרגיש להקדיש לעצמכם קצת זמן בכל יום.",
        cta: "להצטרף לאתגר",
        href: "/he/challenge",
        image: "/images/challenge/hero.jpg",
        imageAlt: "איתמר מודט על סלע ליד נחל ביער",
      },
      {
        label: "קורס לייב בזום",
        title: "מיינדפולנס",
        text: "עשרה מפגשים חיים, עשרה מסעות קטנים פנימה. דרך תרגול והתנסות נגלה עוד רבדים בתוכנו, ונפתח אפשרויות חדשות לפגוש את עצמנו ואת החיים.",
        cta: "לפרטים על הקורס",
        href: "/he/events/mindfulness",
        image: "/images/events/mindfulness/who.jpg",
        imageAlt: "איתמר יושב על כיסא ומודט בעיניים עצומות",
        imagePosition: "50% 30%",
      },
      {
        label: "אישי · זוגי · קבוצתי",
        title: "מפגשים",
        text: "כמה שעות שבהן אפשר להתרווח, לנשום ולפגוש את עצמכם קצת אחרת. כל מפגש נבנה מתוך ההקשבה אליכם ולמה שחי בכם באותו יום.",
        cta: "למפגשים",
        href: "/he/sessions",
        image: "/images/sessions/session.jpg",
        imageAlt: "איתמר מלווה מפגש נשימה",
        imagePosition: "62% 50%",
      },
    ],
  },
};

// English: sessions, the recorded course and the free meditations
// (the challenge and the live course are Hebrew only for now).
const en: HomeSections = {
  invite: {
    opening: "Tell me something...",
    imagine: [
      "Do you know those moments when you let yourself imagine what your life could look like? If you listened more to your heart, made room for curiosity, dared to be a little more yourself?",
    ],
    question: "And do you believe it's truly possible for you?",
    body: [
      "Because sometimes it feels like we know exactly what we want, yet something holds us back. The fear of what others will think, habits that have become part of who we are, that voice in our head that always finds a reason why not now, why not us.",
      "**I believe there is so much more in all of us than we're used to expressing.** And we don't need to know in advance where the path will lead. We can start small: listen a little more inward, feel the body, try new things, and discover what happens when we give ourselves a little more freedom.",
    ],
  },
  hello: {
    title: "Hi,",
    emphasis: "I'm Itamar",
    text: [
      "I guide meditation, breathwork and embodiment. I help people feel at ease being themselves, connect with their bodies, and open up to life.",
      "The truth? If you'd told me a few years ago that I'd be standing in front of people, leading groups and sharing so much of myself, I probably wouldn't have believed you.",
      "For years I felt there was so much more in me than I dared to express. I wanted to open up, to explore, to feel freer to bring myself into the world. But my sensitivity and my fears often kept me behind the scenes. At work, with friends, almost everywhere. And so many parts of me stayed inside, waiting for me to find the courage to give them room.",
    ],
    link: { label: "Get to know me →", href: "/en/about" },
    imageAlt: "Itamar in a wool hat and a purple hoodie, looking up beside a tree in a green forest",
  },
  ways: {
    kicker: "Ways to practise together",
    title: "Where would you",
    emphasis: "like to begin?",
    items: [
      {
        label: "Private · Couples · Group",
        title: "Sessions",
        text: "Come as you are, with whatever's on your mind or in your heart. A few hours to breathe deeply, soften, and meet yourself in a new way. Each session is shaped by deep listening to what's alive in you that day.",
        cta: "Explore sessions",
        href: "/en/sessions",
        image: "/images/sessions/session.jpg",
        imageAlt: "Itamar guiding a breathwork session",
        imagePosition: "62% 50%",
      },
      {
        label: "Online course · At your own pace",
        title: "Breathing Life",
        text: "Simple breathing techniques and guided practices for more calm, balance and presence in everyday life. Recorded lessons you can take from anywhere.",
        cta: "About the course",
        href: "/en/courses/breathing-life",
        image: "/images/courses/breathing-life-hero.jpg",
        imageAlt: "Itamar in the Breathing Life course",
      },
      {
        label: "Free · Guided meditations",
        title: "Free meditations",
        text: "Take a moment for yourself. These free guided meditations are an invitation to turn inward and let go.",
        cta: "Listen now",
        href: "#free-meditations",
        image: "/images/home/meditations/sunrise-meadow.jpg",
        imageAlt: "A meadow at sunrise",
      },
    ],
  },
};

const content: Partial<Record<Locale, HomeSections>> = { en, he };

export function getHomeSections(locale: Locale): HomeSections | undefined {
  return content[locale];
}
