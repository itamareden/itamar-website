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
    events: "סדנאות ואירועים",
    courses: "קורסים",
    practices: "תרגולים",
    challenge: "אתגר 5 ימים",
    contact: "צרו קשר",
  },
  notFound: {
    title: "הדף לא נמצא",
    text: "הדף שחיפשת לא קיים או שהועבר למקום אחר.",
    home: "חזרה לדף הבית",
  },
};
