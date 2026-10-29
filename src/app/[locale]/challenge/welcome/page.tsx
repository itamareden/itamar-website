import type { Metadata } from "next";
import { getChallenge } from "@/content/challenge";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { Flourish } from "../_components/Flourish";
import { Heading } from "../_components/Heading";
import { NextNote } from "../_components/NextNote";
import { RingList } from "../_components/RingList";
import { VideoPlayer } from "../_components/VideoPlayer";
import styles from "../practice.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const c = getChallenge(await getLocale());
  const dict = await getDictionary();
  return {
    title: `${c.practice.kicker} · ${dict.site.name}`,
    description: c.welcome.text.join(" "),
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
        <div className={styles.intro}>
          {c.welcome.text.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis text={paragraph} />
            </p>
          ))}
        </div>
        <Flourish />
      </header>

      {c.welcome.videos.map((video) => (
        <section key={video.title} className={styles.block}>
          <h2 className={styles.blockTitle}>{video.title}</h2>
          <VideoPlayer {...video} labels={c.practice.player} />
        </section>
      ))}

      {/* The ornament gives the list its room, so no extra listBlock margin. */}
      <Flourish />

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{c.welcome.prepare.heading}</h2>
        <RingList items={c.welcome.prepare.items} />
      </section>

      <NextNote heading={c.practice.untilTomorrow} text={c.welcome.nextNote} />
    </article>
  );
}
