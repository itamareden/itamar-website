import type { Metadata } from "next";
import { getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { Heading } from "../_components/Heading";
import { VideoPlayer } from "../_components/VideoPlayer";
import styles from "../practice.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const c = getChallenge(await getLocale());
  const dict = await getDictionary();
  return {
    title: `${c.practice.kicker} · ${dict.site.name}`,
    description: c.welcome.text,
    // Shared by link only: keep it out of search results.
    robots: { index: false, follow: false },
  };
}

// The page shared before day 1: about the challenge + how to meditate.
export default async function WelcomePage() {
  const c = getChallenge(await getLocale());

  return (
    <article className={styles.page}>
      <header className={styles.top}>
        <p className={styles.kicker}>{c.practice.kicker}</p>
        <h1 className={styles.title}>
          <Heading heading={c.welcome.heading} />
        </h1>
        <p className={styles.text}>{c.welcome.text}</p>
      </header>

      {c.welcome.videos.map((video) => (
        <section key={video.title} className={styles.block}>
          <h2 className={styles.blockTitle}>{video.title}</h2>
          <VideoPlayer playbackId={video.playbackId} title={video.title} labels={c.practice.player} />
        </section>
      ))}

      <p className={styles.next}>{c.welcome.nextNote}</p>
    </article>
  );
}
