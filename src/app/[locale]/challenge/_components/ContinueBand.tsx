import Image from "next/image";
import Link from "next/link";
import type { ChallengeContent } from "@/content/challenge";
import styles from "../practice.module.css";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import { Heading } from "./Heading";

type ContinueBandProps = {
  text: ChallengeContent["finale"]["continue"];
  primaryHref: string; // a first conversation (sessions)
  secondaryHref: string; // the free meditations
};

/*
 * The closing page's invitation to keep going: a deep umber band with a
 * berry glow, a short note from Itamar, and two buttons.
 */
export function ContinueBand({ text, primaryHref, secondaryHref }: ContinueBandProps) {
  return (
    <section className={styles.band}>
      <h2 className={styles.bandTitle}>
        <Heading heading={text.heading} />
      </h2>

      <div className={styles.note}>
        <div className={styles.noteHead}>
          <Image
            src="/images/challenge/portrait.jpg"
            alt={text.imageAlt}
            width={88}
            height={88}
            className={styles.noteAvatar}
          />
          <p className={styles.noteName}>{text.name}</p>
        </div>
        <div className={styles.noteText}>
          {text.note.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis text={paragraph} />
            </p>
          ))}
        </div>
      </div>

      <div className={styles.bandButtons}>
        <Link href={primaryHref} className={styles.bandPrimary}>
          {text.primary}
        </Link>
        <Link href={secondaryHref} className={styles.bandSecondary}>
          {text.secondary}
        </Link>
      </div>
    </section>
  );
}
