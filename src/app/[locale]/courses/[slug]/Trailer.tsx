"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

/*
 * The course trailer. Until it's pressed, it shows our own cover: the
 * video's still, a top bar like YouTube's (round portrait, title, name)
 * and YouTube's play button in berry. Nothing loads from YouTube until
 * then. Pressing it swaps in the player, already playing
 * (youtube-nocookie: no cookies until then).
 */
export function Trailer({
  id,
  label,
  title,
  channel,
}: {
  id: string;
  label: string; // for screen readers
  title: string; // the video's title on the top bar
  channel: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={styles.trailer}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className={styles.trailer} onClick={() => setPlaying(true)} aria-label={label}>
      <Image
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        fill
        sizes="(max-width: 44rem) 100vw, 40rem"
        className={styles.trailerStill}
      />
      <span className={styles.trailerBar} lang="en" dir="ltr" aria-hidden="true">
        <Image
          src="/images/challenge/portrait.jpg"
          alt=""
          width={80}
          height={80}
          className={styles.trailerAvatar}
        />
        <span className={styles.trailerTitles}>
          <span className={styles.trailerTitle}>{title}</span>
          <span className={styles.trailerChannel}>{channel}</span>
        </span>
      </span>
      {/* YouTube's rounded play button, in berry. */}
      <svg className={styles.play} viewBox="0 0 68 48" aria-hidden="true">
        <path
          className={styles.playShape}
          d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1C.1 13 0 24 0 24s.1 11 1.5 16.3c.8 2.9 2.5 5.4 5.4 6.2C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.5c2.9-.8 4.6-3.3 5.4-6.2C67.9 35 68 24 68 24s-.1-11-1.5-16.3z"
        />
        <path d="M45 24 27 14v20z" fill="#fff" />
      </svg>
    </button>
  );
}
