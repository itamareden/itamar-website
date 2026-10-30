import Image from "next/image";
import type { MeditationsContent } from "@/content/home/meditations";
import styles from "./FreeMeditations.module.css";

// A card per meditation, each opening it on Insight Timer in a new tab.
export function FreeMeditations({ content }: { content: MeditationsContent }) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.intro}>{content.intro}</p>
      </header>

      <ul className={styles.cards}>
        {content.meditations.map((m) => (
          <li key={m.url} className={styles.card}>
            <div className={styles.media}>
              <Image
                src={m.image}
                alt="" // decorative: the title says what the meditation is
                fill
                sizes="(max-width: 52rem) 100vw, 36rem"
                className={styles.image}
                style={{ objectPosition: m.imagePosition }}
              />
            </div>
            <div className={styles.body}>
              <p className={styles.label}>{m.label}</p>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <p className={styles.summary}>{m.summary}</p>
              <a href={m.url} target="_blank" rel="noopener noreferrer" className={styles.listen}>
                {content.listen}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
