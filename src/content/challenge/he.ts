import type { ChallengeContent } from ".";
import { STAND_IN_AUDIO, STAND_IN_VIDEO } from "./stand-in-media";

// Draft copy, to be refined.
export const he: ChallengeContent = {
  settings: {
    mode: "group",
    startDate: null,
    whatsappUrl: "",
  },
  hero: {
    eyebrow: "אתגר 5 ימים חינמי",
    heading: { title: "חמישה ימים", emphasis: "לחזור לעצמך." },
    text: "בכל יום סרטון קצר (4–7 דק׳) ומדיטציה מודרכת (6–14 דק׳). בערך רבע שעה, מכל מקום.",
    imageAlt: "איתמר מודט על סלע ליד נחל ביער",
  },
  group: {
    starts: "אתגר הקבוצה מתחיל",
    startsSoon: "אתגר הקבוצה הבא מתחיל בקרוב",
    meta: "חינם · בקבוצת ווטסאפ · בכל בוקר אשלח את הקישור של היום",
    button: "הצטרפות לקבוצת הווטסאפ",
    steps: [
      { title: "מצטרפים לקבוצה", text: "לוחצים על הכפתור ומצטרפים לקבוצת הווטסאפ. זו כל ההרשמה." },
      { title: "מקבלים את הקישור", text: "בכל בוקר אשלח בקבוצה קישור לתרגול של אותו יום." },
      { title: "מתרגלים", text: "צופים בסרטון הקצר ואז נכנסים למדיטציה המודרכת, מתי שנוח לכם ביום." },
    ],
  },
  email: {
    title: "מתחילים מתי שמתאים לכם",
    meta: "חינם · מייל הפתיחה מגיע מיד, יום 1 בבוקר שאחרי",
    emailLabel: "כתובת המייל",
    emailPlaceholder: "name@example.com",
    consent: "אני רוצה לקבל את מיילי האתגר ועדכונים מדי פעם מאיתמר. אפשר להסיר את ההרשמה בכל עת.",
    button: "להתחיל את האתגר החינמי",
    success: "בדקו את תיבת המייל: מייל הפתיחה בדרך.",
    notReady: "ההרשמה במייל עוד לא פתוחה. נסו שוב בקרוב.",
    steps: [
      { title: "נרשמים", text: "משאירים כתובת מייל. מייל הפתיחה, עם שני סרטונים קצרים, מגיע מיד." },
      { title: "מקבלים את הקישור", text: "בכל בוקר, במשך חמישה ימים, מגיע למייל קישור לתרגול של אותו יום." },
      { title: "מתרגלים", text: "צופים בסרטון הקצר ואז נכנסים למדיטציה המודרכת, מתי שנוח לכם ביום." },
    ],
  },
  how: { kicker: "איך זה עובד", heading: { title: "פשוט,", emphasis: "יום אחר יום" } },
  journey: {
    kicker: "המסע",
    heading: { title: "כל יום הוא", emphasis: "הפתעה" },
    text: "מתחילים בפתיחה: למה אנחנו כאן ואיך מודטים. כל יום אחריה נחשף רק בבוקר שבו הוא מגיע.",
    welcome: { title: "פתיחה", text: "היכרות + איך מודטים" },
    day: "יום",
    hidden: "נחשף ביום עצמו",
  },
  guide: {
    kicker: "מי מלווה",
    heading: { title: "איתמר", emphasis: "אדן" },
    text: "כאן יבואו כמה משפטים עליך, על התרגול שלך ולמה יצרת את האתגר. שניים-שלושה משפטים מספיקים; הסיפור המלא נמצא בעמוד אודות.",
    imageAlt: "איתמר ביער, מביט למעלה",
  },
  faq: {
    title: "שאלות",
    items: [
      { question: "צריך ניסיון קודם?", answer: "לא. עמוד הפתיחה מסביר איך מודטים לפני יום 1." },
      { question: "זה באמת חינם?", answer: "כן, לגמרי." },
      { question: "באיזו שפה?", answer: "בעברית." },
      { question: "מה אם פספסתי יום?", answer: "כל קישור ממשיך לעבוד, אפשר להשלים מתי שרוצים." },
    ],
  },
  closing: {
    heading: { title: "מוכנים", emphasis: "להתחיל?" },
    text: "חמישה ימים, בערך רבע שעה בכל יום.",
  },
  practice: {
    kicker: "אתגר 5 ימים",
    dayOfTotal: (day, total) => `יום ${day} מתוך ${total}`,
    progressLabel: "ההתקדמות באתגר",
    dayDone: "הושלם",
    dayNotDone: "עוד לא הושלם",
    dayComplete: "היום הושלם. יפה מאוד.",
    meditationHeading: "המדיטציה של היום",
    nextNote: "התרגול של מחר יישלח אליכם בבוקר.",
    player: {
      play: "הפעלה",
      pause: "השהיה",
      back: "10 שניות אחורה",
      forward: "10 שניות קדימה",
      seek: "מיקום במדיטציה",
    },
  },
  welcome: {
    heading: { title: "ברוכים", emphasis: "הבאים." },
    text: "לפני שמתחילים: שני סרטונים קצרים. הראשון מספר על האתגר, והשני מלמד איך מודטים.",
    videos: [
      { title: "פתיחה", playbackId: STAND_IN_VIDEO },
      { title: "איך מודטים", playbackId: STAND_IN_VIDEO },
    ],
    nextNote: "התרגול של היום הראשון יישלח אליכם בבוקר.",
  },
  days: {
    "day-1-breath": {
      title: "נשימה",
      text: "כמה מילים על התרגול של היום יבואו כאן.",
      video: { title: "יום 1: נשימה", playbackId: STAND_IN_VIDEO },
      meditation: { title: "מדיטציה: נשימה", src: STAND_IN_AUDIO },
    },
    "day-2-body-sensations": {
      title: "תחושות גוף",
      text: "כמה מילים על התרגול של היום יבואו כאן.",
      video: { title: "יום 2: תחושות גוף", playbackId: STAND_IN_VIDEO },
      meditation: { title: "מדיטציה: תחושות גוף", src: STAND_IN_AUDIO },
    },
    "day-3-observing-thoughts": {
      title: "התבוננות במחשבות",
      text: "כמה מילים על התרגול של היום יבואו כאן.",
      video: { title: "יום 3: התבוננות במחשבות", playbackId: STAND_IN_VIDEO },
      meditation: { title: "מדיטציה: התבוננות במחשבות", src: STAND_IN_AUDIO },
    },
    "day-4-movement-meditation": {
      title: "מדיטציה בתנועה",
      text: "כמה מילים על התרגול של היום יבואו כאן.",
      video: { title: "יום 4: מדיטציה בתנועה", playbackId: STAND_IN_VIDEO },
      meditation: { title: "מדיטציה בתנועה", src: STAND_IN_AUDIO },
    },
    "day-5-letting-go": {
      title: "לשחרר",
      text: "כמה מילים על התרגול של היום יבואו כאן.",
      video: { title: "יום 5: לשחרר", playbackId: STAND_IN_VIDEO },
      meditation: { title: "מדיטציה: לשחרר", src: STAND_IN_AUDIO },
    },
  },
  finale: {
    heading: { title: "מילים", emphasis: "לסיום" },
    text: "סיימתם חמישה ימים של תרגול. כמה מחשבות אחרונות, ומה אפשר לעשות מכאן.",
    video: { title: "מילים לסיום", playbackId: STAND_IN_VIDEO },
    nextHeading: "להמשיך מכאן",
  },
};
