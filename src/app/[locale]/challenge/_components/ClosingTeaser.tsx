import Image from "next/image";
import Link from "next/link";
import type { ChallengeContent } from "@/content/challenge";
import styles from "../practice.module.css";

type ClosingTeaserProps = {
  href: string;
  video: ChallengeContent["finale"]["video"]; // its title and a still from it
  kicker: string;
  text: string;
  button: string;
};

/*
 * The end of day 5: a dark card with a still from the closing video and a
 * play mark, leading to the closing page. The whole card is the link.
 */
export function ClosingTeaser({ href, video, kicker, text, button }: ClosingTeaserProps) {
  return (
    <Link href={href} className={styles.teaser}>
      <span className={styles.teaserStill}>
        <Image
          src={`https://image.mux.com/${video.playbackId}/thumbnail.webp${video.thumbnailTime === undefined ? "" : `?time=${video.thumbnailTime}`}`}
          alt=""
          fill
          sizes="(max-width: 46rem) 100vw, 46rem"
        />
        <span className={styles.teaserPlay} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className={styles.teaserBody}>
        <span className={styles.teaserKicker}>{kicker}</span>
        <span className={styles.teaserTitle}>{video.title}</span>
        <span className={styles.teaserText}>{text}</span>
        <span className={styles.teaserButton}>{button}</span>
      </span>
    </Link>
  );
}
