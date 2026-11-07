"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { VoicesContent } from "@/content/voices";
import styles from "./VoicesCarousel.module.css";

function Arrow() {
  return (
    <svg
      viewBox="0 0 28 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M27 7H2M8 1 2 7l6 6" />
    </svg>
  );
}

// How far a drag must travel to count as a swipe, in pixels.
const SWIPE_PX = 40;

type VoicesCarouselProps = {
  content: VoicesContent;
  href: string; // where the full reviews live
  className?: string;
};

/*
 * What people say, on the homepage: one review's strongest line at a time.
 * The right arrow moves forward, since that's the one people reach for;
 * swiping left does the same.
 */
export function VoicesCarousel({ content, href, className }: VoicesCarouselProps) {
  const count = content.items.length;
  const [current, setCurrent] = useState(0);
  const swipeStart = useRef<number | null>(null);

  const show = (index: number) => setCurrent((index + count) % count);

  const onPointerUp = (clientX: number) => {
    if (swipeStart.current === null) return;
    const moved = clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(moved) > SWIPE_PX) show(current + (moved < 0 ? 1 : -1));
  };

  return (
    <section className={`${styles.voices} ${className ?? ""}`}>
      <h2 className={styles.title}>
        {content.title} <em>{content.emphasis}</em>
      </h2>

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          aria-label={content.next}
          onClick={() => show(current + 1)}
        >
          <Arrow />
        </button>

        {/* Every card sits in the same grid cell, so the tallest sets the
            height and nothing below moves between reviews. */}
        <ul
          className={styles.cards}
          aria-live="polite"
          onPointerDown={(event) => {
            swipeStart.current = event.clientX;
          }}
          onPointerUp={(event) => onPointerUp(event.clientX)}
          onPointerCancel={() => {
            swipeStart.current = null;
          }}
        >
          {content.items.map((voice, index) => (
            <li key={voice.name} className={index === current ? styles.current : styles.resting}>
              <figure
                className={styles.card}
                lang={voice.lang}
                dir={voice.lang ? "ltr" : undefined}
              >
                <p className={styles.headline}>{voice.headline}</p>
                <figcaption>
                  <strong>{voice.name}</strong> · {voice.detail}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          aria-label={content.previous}
          onClick={() => show(current - 1)}
        >
          <Arrow />
        </button>

        <div className={styles.dots}>
          {content.items.map((voice, index) => (
            <button
              key={voice.name}
              type="button"
              className={styles.dot}
              aria-label={voice.name}
              aria-current={index === current ? "true" : undefined}
              onClick={() => show(index)}
            />
          ))}
        </div>
      </div>

      <Link href={href} className={styles.fullLink}>
        {content.readAll} ←
      </Link>
    </section>
  );
}
