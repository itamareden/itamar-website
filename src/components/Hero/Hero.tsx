import Image from "next/image";
import styles from "./Hero.module.css";

type HeroProps = {
  image: string; // path under /public, e.g. "/images/home/hero.jpg"
  imageAlt: string;
  title: string;
  titleEmphasis: string; // second line of the headline, set apart in colour (and italic in English)
  lines?: string[]; // optional smaller lines under the headline
};

/*
 * Full-screen opening photo with the headline on it.
 *
 * data-full-bleed lets it span the whole page width (see layout.module.css),
 * and data-hero tells the header to sit transparently on top of it
 * (see SiteHeader.module.css).
 */
export function Hero({ image, imageAlt, title, titleEmphasis, lines }: HeroProps) {
  return (
    <section className={styles.hero} data-full-bleed data-hero>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className={styles.image}
      />

      <div className={styles.text}>
        <h1 className={styles.title}>
          {title} <em>{titleEmphasis}</em>
        </h1>
        {lines && lines.length > 0 && (
          <p className={styles.lines}>
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
