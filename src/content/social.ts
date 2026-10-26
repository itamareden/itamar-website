/*
 * Itamar's social profiles, shown as icons (on the challenge's closing
 * page for now; the footer can use the same list later).
 */
export type SocialNetwork = "instagram" | "facebook" | "youtube" | "insightTimer";

export const socialLinks: { network: SocialNetwork; name: string; url: string }[] = [
  { network: "instagram", name: "Instagram", url: "https://www.instagram.com/itamareden10/" },
  { network: "facebook", name: "Facebook", url: "https://www.facebook.com/profile.php?id=61590942264344" },
  { network: "youtube", name: "YouTube", url: "https://www.youtube.com/@itamar_eden" },
  { network: "insightTimer", name: "Insight Timer", url: "https://insighttimer.com/itamar_eden" },
];
