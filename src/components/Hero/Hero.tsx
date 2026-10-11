import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type HeroProps = {
  image: string; // path under /public, e.g. "/images/home/hero.jpg"
  imageAlt: string;
  title: string;
  titleEmphasis: string; // second line of the headline, set apart in colour (and italic in English)
  lines?: string[]; // optional smaller lines under the headline
  cta?: { href: string; label: string }; // optional button under the text
};

/*
 * Opening photo filling the first screen, with the headline, lines and
 * an optional button on it.
 *
 * data-full-bleed lets it span the whole page width (see layout.module.css),
 * and data-hero tells the header to sit transparently on top of it
 * (see SiteHeader.module.css).
 */
export function Hero({ image, imageAlt, title, titleEmphasis, lines, cta }: HeroProps) {
  return (
    <section className={styles.hero} data-full-bleed data-hero>
      <div className={styles.media}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          // On upright screens the 16:9 photo is as tall as the screen, so ~1.78x its height wide.
          sizes="(max-aspect-ratio: 1/1) 178vh, 100vw"
          loading="eager"
          fetchPriority="high"
          className={styles.image}
        />
      </div>

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
        {cta && (
          <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
