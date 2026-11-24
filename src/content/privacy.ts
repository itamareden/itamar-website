import type { Locale } from "@/i18n/config";

/*
 * The privacy page (/he/privacy, /en/privacy): what the site collects,
 * why, who helps handle it, and how to ask for it to be deleted.
 *
 * Keep it true: when a form, a service or analytics is added or changed,
 * update this text and the date.
 */
export type PrivacyContent = {
  title: string;
  updated: string;
  intro: string[];
  sections: { heading: string; text: string[] }[];
};

export const privacy: Record<Locale, PrivacyContent> = {
  he: {
    title: "מדיניות פרטיות",
    updated: "עודכן לאחרונה: 24 בנובמבר 2026",
    intro: [
      "האתר הזה שייך לאיתמר אדן. כאן מוסבר בפשטות איזה מידע נאסף כשאתם משתמשים באתר, למה, ומה אפשר לעשות איתו.",
      "לכל שאלה או בקשה: itamar@itamareden.love",
    ],
    sections: [
      {
        heading: "מה נאסף, ומתי",
        text: [
          "טופס יצירת קשר: השם, כתובת המייל וההודעה שכתבתם, כדי שאוכל לקרוא ולחזור אליכם.",
          "הרשמה לאתגר או לרשימת התפוצה: כתובת המייל (ושם פרטי, אם מילאתם), כדי לשלוח לכם את המיילים שביקשתם.",
          "טופס \"איך היה המסע?\" בסוף האתגר: מה שבחרתם לכתוב, כדי ללמוד ולשפר את האתגר.",
          "מעבר לכך, האתר לא מבקש מכם פרטים אישיים.",
        ],
      },
      {
        heading: "איך המידע משמש",
        text: [
          "רק למטרה שבשבילה מסרתם אותו: לענות לכם, ולשלוח את מיילי האתגר ועדכונים מדי פעם, אם נרשמתם אליהם.",
          "המידע לא נמכר, לא מושכר ולא מועבר לאף אחד לצורכי פרסום.",
        ],
      },
      {
        heading: "מי עוזר לי לטפל במידע",
        text: [
          "Sender (sender.net): שירות המיילים ששולח את ההודעות מטופס יצירת הקשר ואת מיילי האתגר, ושומר את רשימת הנרשמים.",
          "Vercel: החברה שמארחת את האתר. כמו כל שרת, היא רושמת מידע טכני כמו כתובת IP, לצורך הפעלה ואבטחה.",
          "Mux ו-YouTube: מציגים את הסרטונים באתר. הסרטונים מוטמעים בהגדרות שמצמצמות מעקב.",
        ],
      },
      {
        heading: "עוגיות (Cookies) ומידע בדפדפן",
        text: [
          "האתר שומר עוגייה אחת: השפה שבחרתם, כדי להציג לכם את האתר בשפה הנכונה בפעם הבאה.",
          "באתגר, הימים שהשלמתם נשמרים רק בדפדפן שלכם, במכשיר שלכם. המידע הזה לא נשלח אליי.",
          "האתר לא משתמש כרגע בכלי פרסום או במעקב סטטיסטי. אם זה ישתנה, הדף הזה יתעדכן.",
        ],
      },
      {
        heading: "הזכויות שלכם",
        text: [
          "בכל מייל שתקבלו יש קישור להסרה מהרשימה, ואפשר להשתמש בו בכל עת.",
          "אפשר גם לכתוב לי ולבקש לראות, לתקן או למחוק את המידע שלכם, ואטפל בזה בהקדם.",
        ],
      },
      {
        heading: "כמה זמן המידע נשמר",
        text: [
          "כתובות ברשימת התפוצה נשמרות עד שתסירו את עצמכם. הודעות מטופס יצירת הקשר נשמרות כל עוד הן נחוצות כדי לענות לכם.",
        ],
      },
      {
        heading: "קישורים לאתרים אחרים",
        text: [
          "באתר יש קישורים לוואטסאפ, אינסטגרם, פייסבוק ואתרים נוספים. כשאתם עוברים אליהם, חלה מדיניות הפרטיות שלהם.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    updated: "Last updated: 24 November 2026",
    intro: [
      "This website belongs to Itamar Eden. This page explains, simply, what information is collected when you use the site, why, and what you can do about it.",
      "For any question or request: itamar@itamareden.love",
    ],
    sections: [
      {
        heading: "What is collected, and when",
        text: [
          "The contact form: your name, email address and message, so I can read it and get back to you.",
          "Signing up for the challenge or the mailing list: your email address (and first name, if you give it), to send you the emails you asked for.",
          "The \"How was the journey?\" form at the end of the challenge: whatever you choose to write, to learn from it and improve the challenge.",
          "Beyond that, the site doesn't ask for personal details.",
        ],
      },
      {
        heading: "How it is used",
        text: [
          "Only for the purpose you gave it for: to reply to you, and to send the challenge emails and occasional updates, if you signed up for them.",
          "Your information is never sold, rented or passed on to anyone for advertising.",
        ],
      },
      {
        heading: "Who helps me handle it",
        text: [
          "Sender (sender.net): the email service that delivers contact-form messages and the challenge emails, and keeps the list of subscribers.",
          "Vercel: the company that hosts the site. Like any server, it logs technical information such as IP addresses, to run the site and keep it secure.",
          "Mux and YouTube: they show the site's videos, embedded with settings that limit tracking.",
        ],
      },
      {
        heading: "Cookies and data in your browser",
        text: [
          "The site sets one cookie: the language you chose, so the site opens in that language next time.",
          "In the challenge, the days you completed are saved only in your own browser, on your device. That information is never sent to me.",
          "The site doesn't currently use advertising or analytics tools. If that changes, this page will be updated.",
        ],
      },
      {
        heading: "Your rights",
        text: [
          "Every email you receive has an unsubscribe link, which you can use at any time.",
          "You can also write to me to see, correct or delete your information, and I'll take care of it promptly.",
        ],
      },
      {
        heading: "How long it is kept",
        text: [
          "Mailing-list addresses are kept until you unsubscribe. Contact-form messages are kept as long as they are needed to reply to you.",
        ],
      },
      {
        heading: "Links to other sites",
        text: [
          "The site links to WhatsApp, Instagram, Facebook and other sites. When you go there, their own privacy policies apply.",
        ],
      },
    ],
  },
};
