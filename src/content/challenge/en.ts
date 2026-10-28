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
    text: "For anyone who wants to start a practice, or come back to one. A short, gentle daily practice that brings you back to this moment, and to yourself.",
    imageAlt: "Itamar meditating on a rock beside a forest stream",
    facts: [
      { value: "5", label: "days" },
      { value: "15", label: "minutes a day, roughly" },
      { value: "Free", label: "no cost at all" },
      { value: "No experience", label: "beginners welcome" },
      { value: "Anywhere", label: "on your phone or computer" },
    ],
  },
  group: {
    starts: "The group challenge starts",
    startsSoon: "The next group challenge starts soon",
    nextKicker: "The next group",
    startsHeading: (date) => ({ title: "We start on", emphasis: date }),
    countdown: (days) =>
      days === 0 ? "We start today!" : days === 1 ? "We start tomorrow!" : `${days} days to go`,
    soonHeading: { title: "The next group", emphasis: "opens soon" },
    meta: "Free · in a WhatsApp group · I send each day's link in the morning",
    button: "Join the WhatsApp group",
    steps: [
      { title: "Join the group", text: "Tap the button and join the WhatsApp group, which supports you all the way through." },
      { title: "Get ready", text: "Before day 1, two short videos: getting to know each other, and tips for sitting comfortably in meditation." },
      { title: "Get the day's link", text: "Each morning I post a link to that day's practice in the group." },
      { title: "Practise", text: "A short video, a guided meditation, and small tips to carry into the rest of your day." },
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
      { title: "Sign up", text: "Leave your email, and the welcome email arrives right away." },
      { title: "Get ready", text: "Before day 1, two short videos: getting to know each other, and tips for sitting comfortably in meditation." },
      { title: "Get the day's link", text: "Each morning for five days, a link to that day's practice arrives in your inbox." },
      { title: "Practise", text: "A short video, a guided meditation, and small tips to carry into the rest of your day." },
    ],
  },
  isThisYou: {
    heading: { title: "Sound", emphasis: "familiar?" },
    items: [
      "Your days are full, and there's hardly a moment that's just yours",
      "Your thoughts keep racing, even when you try to rest",
      "You used to meditate, but the practice got lost in the daily routine",
      "You'd like to start a practice, but don't know where to begin",
    ],
    text: "If you found yourself in one of these lines, **these five days were made for you.**",
  },
  note: {
    opening: "Look, friends, just between us: in the end, meditation is a matter of momentum.",
    text: [
      "Most of you have probably heard quite a bit about meditation, and maybe even tried to practise a few times. But something still didn't click. It hasn't become part of your life yet.",
      "And that's quite natural. The beginning is the hard part.",
      "You need to create some positive movement, start practising every day, and cross a certain threshold, after which practice starts to feel more natural. And yes, **even fun!**",
      "That's really why I'm running this challenge. To help you start creating that movement, so that meditation doesn't stay something you know you should do, but **becomes something you really want to do.**",
    ],
    closing:
      "A daily meditation practice may be the greatest gift you can give yourself. And I say this from experience: **it's really worth it!**",
  },
  takeaways: {
    kicker: "What you'll take with you",
    heading: { title: "Tools", emphasis: "for everyday life" },
    text: "Simple practices you can come back to anywhere, long after the five days are over.",
    items: [
      { label: "Breath", text: "Using your breath to bring more calm into everyday life" },
      { label: "Body", text: "Listening to your body and noticing what you feel and need" },
      { label: "Thoughts", text: "Making a little space from your thoughts, so not every thought runs you" },
      { label: "Movement", text: "Shaking off tension and stuckness with movement and sound, even in a minute" },
      { label: "Letting go", text: "Letting go of the struggle with what is, and meeting life with more ease" },
    ],
  },
  how: { kicker: "How it works", heading: { title: "Simple,", emphasis: "one day at a time" } },
  guide: {
    kicker: "Who's guiding",
    heading: { title: "Nice to", emphasis: "meet you" },
    text: [
      "You know that voice in your head that keeps replaying every word you said around other people? Mine hardly ever went quiet. For years it came with me everywhere, especially to the moments when I had to speak in front of others, or simply be myself.",
      "Hi, I'm Itamar. In 2018, after an anxiety attack that shook me, I sat down to meditate and decided to do it every day. I wasn't looking for enlightenment. I just wanted to feel safe inside myself again.",
      "Since then, hardly a day has gone by without practice. Slowly, something opened: the anxiety softened, the voice in my head grew quieter, and in its place I found an ease and a joy I didn't know were there. There are moments in practice when something simply lets go, the heart opens, and a small smile sneaks in for no reason at all. Those moments are why I come back every day, and it feels like coming home.",
      "That change took me far, and today **I guide breathwork sessions and accompany people and groups on the journey inward.**",
      "I created this challenge to give you what I wish someone had given me back then: a simple, gentle way to begin, with no pressure and no \"doing it right\". I'd love to guide you.",
    ],
    imageAlt: "Itamar in the forest, looking up",
  },
  misconceptions: {
    kicker: "Let's clear things up",
    heading: { title: "Common misconceptions", emphasis: "that might hold you back" },
    items: [
      { myth: "You need to stop thinking", truth: "Thoughts are part of the practice. Noticing that you're thinking is already meditation." },
      { myth: "If I didn't feel anything, I failed", truth: "Nothing is supposed to happen. It's enough to be curious about what's there." },
      { myth: "You have to sit in a certain posture", truth: "Comfort comes first. A cushion, a chair, or even moving." },
      { myth: "I'm not the meditating type", truth: "Even if you're restless, there are many ways to practise, and one of them is through movement." },
      { myth: "Meditation is for relaxing", truth: "Calm may come, but meditation is mostly a journey inward, getting to know yourself deeply. Let yourself not know, and be surprised." },
    ],
  },
  faq: {
    title: "Common questions",
    items: [
      { question: "What language is it in?", answer: "This round is in Hebrew. An English version is coming." },
      { question: "What if I miss a day?", answer: "Each link keeps working, so you can catch up whenever you like." },
      { question: "When should I practise?", answer: "Whenever suits you. The link arrives in the morning and stays open." },
      { question: "Do I need any equipment?", answer: "A quiet corner, and a cushion and headphones if you like. That's it." },
      { question: "Is it for people who already meditate?", answer: "Yes. If your practice got lost in the daily routine, these five days are a good push to come back." },
      { question: "Do I need to be active in the group?", answer: "No. You can simply get the links and practise quietly.", groupOnly: true },
      { question: "What if difficult emotions come up?", answer: "That's natural and can happen. You can open your eyes, breathe, and come back when it feels right. And you can always write to me." },
      { question: "Is it suitable if I'm dealing with anxiety or a crisis?", answer: "Meditation can support you, but it isn't a replacement for therapy. If you're going through a hard time, it's worth talking to a professional too." },
    ],
  },
  closing: {
    heading: { title: "Ready to", emphasis: "begin?" },
    text: "Five days, about fifteen minutes each.",
  },
  practice: {
    kicker: "5-Day Challenge",
    day: "Day",
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
    text: [
      "Before we begin: two short videos. The first is about the challenge, the second shows you how to meditate.",
    ],
    videos: [
      { title: "Introduction", playbackId: STAND_IN_VIDEO },
      { title: "How to meditate", playbackId: STAND_IN_VIDEO },
    ],
    prepare: {
      heading: "How to prepare for the journey",
      items: [
        {
          title: "Find your corner",
          text: [
            "Look for a quiet, pleasant place where you can take a few minutes for yourself. If you can, practise in the same place throughout the challenge. Over time it can become a familiar spot that invites you to pause and reconnect with yourself.",
          ],
        },
        {
          title: "Make yourself comfortable",
          text: [
            "You can sit on a cushion, a mat or a chair. Find a position that feels comfortable and that you can stay in for a few minutes without effort. No special posture is needed, just a place where you can feel at ease.",
          ],
        },
        {
          title: "Take a moment to set an intention",
          text: [
            "Before setting out, you might pause and ask yourself: what would I like to meet or discover on this journey? Perhaps there's something you'd like to bring into your life, or simply a wish to give yourself a little more time.",
            "**An intention has power.** It can remind us why we chose to set out, and help us return to it even on busy days. If you like, light a candle or some incense, sit with your intention for a few moments, and even write it down.",
          ],
        },
      ],
    },
    nextNote: "Your first day's practice will be sent to you in the morning.",
  },
  days: {
    "day-1-breath": {
      title: "Breath",
      text: ["A few words about today's practice go here."],
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
      text: ["A few words about today's practice go here."],
      video: { title: "Day 2: Body sensations", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Body sensations", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
    "day-3-observing-thoughts": {
      title: "Observing thoughts",
      text: ["A few words about today's practice go here."],
      video: { title: "Day 3: Observing thoughts", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Observing thoughts", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
    "day-4-movement-meditation": {
      title: "Movement meditation",
      text: ["A few words about today's practice go here."],
      video: { title: "Day 4: Movement meditation", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Movement meditation", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
    "day-5-letting-go": {
      title: "Letting go",
      text: ["A few words about today's practice go here."],
      video: { title: "Day 5: Letting go", playbackId: STAND_IN_VIDEO },
      meditation: { title: "Meditation: Letting go", src: STAND_IN_AUDIO },
      forTheDay: ["Something small to try during the day goes here.", "And another.", "And another."],
    },
  },
  finale: {
    teaser: {
      kicker: "The final chapter",
      text: "A short video from me about what we went through together, and where you can go from here.",
      button: "A few closing words",
    },
    progressLabel: "End of the journey",
    heading: { title: "Closing", emphasis: "thoughts" },
    text: ["Well done! You've completed five days of practice.", "A few last words from me, and where you can go from here."],
    video: { title: "Closing thoughts", playbackId: STAND_IN_VIDEO },
    share: {
      heading: "Would you like to share your experience?",
      invite: "Your thoughts matter to me, and I'd love to hear how the journey was for you.",
      toggle: "Write to me",
      text: "Three short questions. Answer only what you feel like.",
      dayQuestion: "Which day spoke to you most?",
      takeAway: "What are you taking with you from the challenge?",
      improve: "What would you change or improve in the challenge?",
      contact: "Name and email (optional, if you'd like me to reply)",
      button: "Send",
      close: "Not now",
      success: "Thank you so much for sharing!",
      successText: "I read every message, and if you left your details, I'll get back to you.",
      notReady: "This form isn't connected yet, so your message wasn't sent. It will work soon.",
    },
    continue: {
      heading: { title: "The journey", emphasis: "continues" },
      name: "Itamar Eden",
      role: "Meditation, breath and movement",
      imageAlt: "Itamar Eden",
      note: [
        "It was an honour to walk with you through these five days. Truly.",
        "If you'd like to keep going and go deeper, I'd love to meet you, one to one or in group sessions, online or in person.",
      ],
      primary: "Book a short intro call",
      secondary: "Events and workshops",
    },
    socialHeading: "Stay in touch",
  },
};
