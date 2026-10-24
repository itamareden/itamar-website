import type { ChallengeContent } from ".";
import { STAND_IN_AUDIO, STAND_IN_VIDEO } from "./stand-in-media";

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
  practice: {
    kicker: "5-Day Challenge",
    dayOfTotal: (day, total) => `Day ${day} of ${total}`,
    progressLabel: "Challenge progress",
    dayDone: "completed",
    dayNotDone: "not completed yet",
    dayComplete: "Day complete. Well done.",
    meditationHeading: "Today's meditation",
    forTheDayHeading: "Taking the experience with you for the day",
    untilTomorrow: "Until tomorrow",
    nextNote: "Tomorrow's practice will be sent to you in the morning.",
    player: {
      play: "Play",
      pause: "Pause",
      back: "Back 10 seconds",
      forward: "Forward 10 seconds",
      seek: "Position in the meditation",
    },
  },
  welcome: {
    heading: { title: "Welcome,", emphasis: "let's begin." },
    text: "Before we begin: two short videos. The first is about the challenge, the second shows you how to meditate.",
    videos: [
      { title: "Introduction", playbackId: STAND_IN_VIDEO },
      { title: "How to meditate", playbackId: STAND_IN_VIDEO },
    ],
    prepare: {
      heading: "How to prepare for the journey",
      items: [
        "Choose a regular time of day to practise, for example right after you wake up.",
        "Find a quiet corner where no one will disturb you for fifteen minutes.",
        "Have headphones ready, and a cushion or a comfortable chair to sit on.",
      ],
    },
    nextNote: "Your first day's practice will be sent to you in the morning.",
  },
  days: {
    "day-1-breath": {
      title: "Breath",
      text: "A few words about today's practice go here.",
      video: { title: "Day 1: Breath", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Breath", src: STAND_IN_AUDIO },
      forTheDay: [
        "Pause once or twice during the day and take three slow breaths.",
        "Notice your breath in moments of transition: before a conversation, while waiting, in a queue.",
        "Before sleep, recall one moment today when you felt your breath.",
      ],
    },
    "day-2-body-sensations": {
      title: "Body sensations",
      text: "A few words about today's practice go here.",
      video: { title: "Day 2: Body sensations", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Body sensations", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
    "day-3-observing-thoughts": {
      title: "Observing thoughts",
      text: "A few words about today's practice go here.",
      video: { title: "Day 3: Observing thoughts", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Observing thoughts", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
    "day-4-movement-meditation": {
      title: "Movement meditation",
      text: "A few words about today's practice go here.",
      video: { title: "Day 4: Movement meditation", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Movement meditation", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
    "day-5-letting-go": {
      title: "Letting go",
      text: "A few words about today's practice go here.",
      video: { title: "Day 5: Letting go", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Letting go", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
  },
  finale: {
    heading: { title: "Closing", emphasis: "thoughts" },
    text: "You've completed five days of practice. A few last thoughts, and where you can go from here.",
    video: { title: "Closing thoughts", playbackId: STAND_IN_VIDEO },
    nextHeading: "Where to go from here",
  },
};
