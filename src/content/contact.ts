import type { Locale } from "@/i18n/config";

/*
 * The Contact page (/he/contact, /en/contact): a short invitation, a
 * form (name, email, message), and the other ways to reach Itamar.
 */

// The same in both languages.
export const contactSettings = {
  phone: { he: "054-635-3567", en: "+972 54-635-3567" } satisfies Record<Locale, string>,
  // Works once itamareden.love is bought and its email is set up.
  email: "info@itamareden.love",
  // The beach under the pines. (sunset-sea.jpg, from Unsplash, was the earlier try.)
  image: "/images/contact/beach.jpg",
};

export type ContactContent = {
  title: string; // also the page's <title>
  heading: string;
  lead: string[];
  imageAlt: string;
  form: {
    name: string;
    email: string;
    message: string;
    button: string;
    success: string;
    invalid: string;
    notReady: string;
  };
  details: {
    contactTitle: string;
    whatsappTitle: string;
    whatsappButton: string;
    whatsappUrl: string; // opens the chat with a first message already typed
    whereTitle: string;
    where: string[];
    socialTitle: string;
  };
};

const whatsapp = (text: string) => `https://wa.me/972546353567?text=${encodeURIComponent(text)}`;

export const contact: Record<Locale, ContactContent> = {
  he: {
    title: "צרו קשר",
    heading: "כתבו לי",
    lead: [
      "יש לכם שאלה, משהו שתרצו לשתף, או פשוט רצון להכיר ולבדוק אם מתאים לנו לעבוד יחד?",
      "מוזמנים לכתוב לי. אשמח לשמוע מכם.",
    ],
    imageAlt: "",
    form: {
      name: "שם",
      email: "אימייל",
      message: "הודעה",
      button: "שליחה",
      success: "תודה, ההודעה התקבלה. אחזור אליכם בקרוב.",
      invalid: "חסר משהו: צריך שם, אימייל תקין והודעה.",
      notReady: "הטופס עוד לא מחובר, כך שההודעה לא נשלחה. בינתיים אפשר לכתוב לי בוואטסאפ.",
    },
    details: {
      contactTitle: "פרטי קשר",
      whatsappTitle: "הכי מהיר",
      whatsappButton: "לשיחה בוואטסאפ",
      whatsappUrl: whatsapp("היי איתמר, הגעתי מהאתר"),
      whereTitle: "איפה נפגשים",
      where: ["קופנגן, תאילנד", "או בזום, מכל מקום"],
      socialTitle: "במקומות אחרים",
    },
  },
  en: {
    title: "Contact",
    heading: "Write to me",
    lead: [
      "Have a question, something you'd like to share, or simply want to meet and see if we're a good fit to work together?",
      "You're welcome to write to me. I'd love to hear from you.",
    ],
    imageAlt: "",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send",
      success: "Thank you, your message arrived. I'll get back to you soon.",
      invalid: "Something's missing: a name, a valid email and a message.",
      notReady: "This form isn't connected yet, so your message wasn't sent. Meanwhile, you can write to me on WhatsApp.",
    },
    details: {
      contactTitle: "Contact info",
      whatsappTitle: "Quickest",
      whatsappButton: "Chat on WhatsApp",
      whatsappUrl: whatsapp("Hi Itamar, I found you through your website"),
      whereTitle: "Where we meet",
      where: ["Koh Phangan, Thailand", "Or on Zoom, from anywhere"],
      socialTitle: "Elsewhere",
    },
  },
};
