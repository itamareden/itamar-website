import type { Dictionary } from "./en";

/*
 * Interface text in Hebrew. Must have exactly the same keys as en.ts;
 * a missing or extra key is a TypeScript error.
 */

export const he: Dictionary = {
  site: {
    name: "איתמר אדן",
    tagline: "מדיטציה, נשימה, תנועה וחיבור לגוף.",
    description: "מדיטציה, נשימה, תנועה וחיבור לגוף עם איתמר אדן.",
  },
  nav: {
    home: "בית",
    about: "אודות",
    sessions: "מפגשים אישיים",
    // Empty: no Events link in the nav and footer while there are no events.
    events: "",
    courses: "קורסים",
    practices: "מדיטציות",
    challenge: "אתגר 5 ימים",
    contact: "צרו קשר",
  },
  menu: {
    open: "פתיחת תפריט",
    close: "סגירת תפריט",
  },
  home: {
    heroTitle: "לחזור",
    heroTitleEmphasis: "לחיים.",
    heroLines: [
      "ללמוד להקשיב לקול הפנימי ולהוביל את עצמך.",
      "לשחרר ולבטוח, כדרך חיים.",
    ],
    heroCta: "להתחיל את האתגר החינמי",
    heroImageAlt:
      "איתמר יושב בישיבה מזרחית על סלע בנחל ביער, ידיים מחבקות את הגוף, עיניים עצומות",
  },
  footer: {
    listTitle: "מכתב קטן, פעם בחודש",
    listText: "מדיטציה חדשה, מחשבה מהדרך, והראשונים לשמוע על אירועים וקורסים.",
    firstName: "שם פרטי",
    email: "אימייל",
    join: "להצטרף",
    joined: "איזה כיף שהצטרפתם! דברים טובים בדרך.",
    joinFailed: "משהו השתבש וההרשמה לא נשלחה. בדקו את כתובת המייל ונסו שוב בעוד רגע.",
    linksLabel: "דרכים לתרגל יחד",
    challenge: "אתגר 5 ימים חינמי",
    freeMeditations: "מדיטציות בחינם",
    privacy: "מדיניות פרטיות",
  },
  notFound: {
    title: "הדף לא נמצא",
    text: "הדף שחיפשת לא קיים או שהועבר למקום אחר.",
    home: "חזרה לדף הבית",
  },
};
