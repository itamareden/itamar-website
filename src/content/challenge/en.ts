import type { ChallengeContent } from ".";

// Draft copy, to be refined.
export const en: ChallengeContent = {
  settings: {
    mode: "group",
    startDate: null,
    whatsappUrl: "",
  },
  hero: {
    eyebrow: "Free 5-day challenge",
    heading: { title: "Five days", emphasis: "back to yourself." },
    text: "Each day, a short video (4–7 min) and a guided meditation (6–14 min). About fifteen minutes, wherever you are.",
    imageAlt: "Itamar meditating on a rock beside a forest stream",
  },
  group: {
    starts: "The group challenge starts",
    startsSoon: "The next group challenge starts soon",
    meta: "Free · in a WhatsApp group · I send each day's link in the morning",
    button: "Join the WhatsApp group",
    steps: [
      { title: "Join the group", text: "Tap the button and join the WhatsApp group. That's all the sign-up there is." },
      { title: "Get the day's link", text: "Each morning I post a link to that day's practice in the group." },
      { title: "Practise", text: "Watch the short video, then sit with the guided meditation, whenever suits your day." },
    ],
  },
  email: {
    title: "Start whenever you're ready",
    meta: "Free · the welcome arrives right away, Day 1 the next morning",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    consent: "Send me the challenge emails and occasional updates from Itamar. You can unsubscribe at any time.",
    button: "Start the free challenge",
    success: "Check your inbox: the welcome email is on its way.",
    notReady: "Email sign-up isn't open yet. Please try again soon.",
    steps: [
      { title: "Sign up", text: "Leave your email. The welcome, with two short videos, arrives right away." },
      { title: "Get the day's link", text: "Each morning for five days, a link to that day's practice arrives in your inbox." },
      { title: "Practise", text: "Watch the short video, then sit with the guided meditation, whenever suits your day." },
    ],
  },
  how: { kicker: "How it works", heading: { title: "Simple,", emphasis: "one day at a time" } },
  journey: {
    kicker: "The journey",
    heading: { title: "Each day is", emphasis: "a surprise" },
    text: "You start with a welcome: why we're here and how to meditate. Each day after that is revealed only on the morning it arrives.",
    welcome: { title: "Welcome", text: "Intro + how to meditate" },
    day: "Day",
    hidden: "Revealed on the day",
  },
  guide: {
    kicker: "Who's guiding",
    heading: { title: "Itamar", emphasis: "Eden" },
    text: "A few sentences about you, your practice, and why you created this challenge go here. Two or three is enough; the full story lives on the About page.",
    imageAlt: "Itamar in the forest, looking up",
  },
  faq: {
    title: "Questions",
    items: [
      { question: "Do I need any experience?", answer: "No. The welcome page explains how to meditate before Day 1." },
      { question: "Is it really free?", answer: "Yes, completely." },
      { question: "What language is it in?", answer: "This round is in Hebrew. An English version is coming." },
      { question: "What if I miss a day?", answer: "Each link keeps working, so you can catch up whenever you like." },
    ],
  },
  closing: {
    heading: { title: "Ready to", emphasis: "begin?" },
    text: "Five days, about fifteen minutes each.",
  },
};
