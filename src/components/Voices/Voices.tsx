import type { VoicesContent } from "@/content/voices";
import styles from "./Voices.module.css";

type VoicesProps = {
  content: VoicesContent;
  // Only each quote's headline and name, as short pull quotes (the homepage),
  // leaving out any review in another language.
  short?: boolean;
  className?: string;
};

// What people say: a pinned white card per quote, its strongest line on top.
export function Voices({ content, short = false, className }: VoicesProps) {
  const items = short ? content.items.filter((voice) => !voice.lang) : content.items;

  return (
    <section className={`${styles.voices} ${className ?? ""}`}>
      <h2 className={`${styles.sectionTitle} ${styles.voicesTitle}`}>
        {content.title} <em>{content.emphasis}</em>
      </h2>
      <ul className={`${styles.quotes} ${short ? styles.short : ""}`}>
        {items.map((voice) => (
          <li key={voice.name}>
            <figure className={styles.quote}>
              <p className={styles.quoteHeadline}>{voice.headline}</p>
              {!short && <blockquote>{voice.text}</blockquote>}
              <figcaption>
                <strong>{voice.name}</strong> · {voice.detail}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
