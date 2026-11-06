"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Emphasis } from "@/components/Emphasis/Emphasis";
import type { VoicesContent } from "@/content/voices";
import styles from "./VoicesSlider.module.css";

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

// How long the track must rest before a move counts as finished.
const SETTLE_MS = 140;

// Scrolling right to left differs between browsers, so measure the gap
// between a card and the track's edge instead of reading the position.
const offset = (slide: Element, track: Element) =>
  slide.getBoundingClientRect().right - track.getBoundingClientRect().right;

// Moves at once, with snapping off so it can't pull the track elsewhere.
const place = (track: HTMLElement, index: number) => {
  track.style.scrollSnapType = "none";
  track.scrollBy({ left: offset(track.children[index], track), behavior: "instant" });
  track.style.removeProperty("scroll-snap-type");
};

/*
 * What people say, on the Sessions page: an endless carousel of cards, each
 * opening with the start of the story. The right arrow slides the cards to the
 * left and the left arrow to the right, one card at a time, round and round.
 *
 * The track holds three copies of the reviews and rests in the middle one.
 * When a move ends in a neighbouring copy, it jumps back to the same card in
 * the middle, which looks identical, so there is always a card on both sides.
 */
export function VoicesSlider({ content }: { content: VoicesContent }) {
  const count = content.items.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const target = useRef(count); // the card the track is at, or moving to
  const settle = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [current, setCurrent] = useState(count);
  const [open, setOpen] = useState<number | null>(null);

  const nearest = (track: HTMLElement) => {
    const gaps = Array.from(track.children, (slide) => Math.abs(offset(slide, track)));
    return gaps.indexOf(Math.min(...gaps));
  };

  const jump = (track: HTMLElement, index: number) => {
    place(track, index);
    target.current = index;
    setCurrent(index);
  };

  const move = (step: number) => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.min(Math.max(target.current + step, 0), track.children.length - 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.current = index;
    setOpen(null);
    track.scrollBy({
      left: offset(track.children[index], track),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = nearest(track);
    if (index !== current) {
      setCurrent(index);
      setOpen(null);
    }
    clearTimeout(settle.current);
    settle.current = setTimeout(() => {
      const rest = nearest(track);
      if (rest < count) jump(track, rest + count);
      else if (rest >= count * 2) jump(track, rest - count);
      else target.current = rest;
    }, SETTLE_MS);
  };

  // Start on the middle copy, before anything is painted.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (track) place(track, count);
  }, [count]);

  // One height for all closed cards, so a long headline doesn't make one
  // card taller than the rest.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      track.style.removeProperty("--card-height");
      const cards = track.querySelectorAll<HTMLElement>(`.${styles.card}:not(.${styles.open})`);
      const tallest = Math.max(...Array.from(cards, (card) => card.offsetHeight));
      track.style.setProperty("--card-height", `${tallest}px`);
    };
    measure();
    document.fonts.ready.then(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => {
      observer.disconnect();
      clearTimeout(settle.current);
    };
  }, []);

  const slides = [0, 1, 2].flatMap((copy) =>
    content.items.map((voice, index) => ({ voice, copy, position: copy * count + index })),
  );

  return (
    <section className={styles.band} data-full-bleed>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {content.title} <em>{content.emphasis}</em>
        </h2>

        <ul className={styles.track} ref={trackRef} onScroll={onScroll} tabIndex={0}>
          {slides.map(({ voice, copy, position }) => {
            const isOpen = open === position;
            return (
              // The outer copies only carry the loop, so screen readers skip them.
              <li key={position} className={styles.slide} aria-hidden={copy !== 1}>
                <figure
                  className={`${styles.card} ${isOpen ? styles.open : ""}`}
                  lang={voice.lang}
                  dir={voice.lang ? "ltr" : undefined}
                >
                  <p className={styles.headline}>{voice.headline}</p>
                  <blockquote className={styles.story}>
                    {voice.text.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>
                        <Emphasis text={paragraph} />
                      </p>
                    ))}
                  </blockquote>
                  {/* In the site's language, also on a card in another one. */}
                  <button
                    type="button"
                    className={styles.more}
                    lang="he"
                    dir="rtl"
                    tabIndex={copy === 1 ? undefined : -1}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : position)}
                  >
                    {isOpen ? content.less : content.more}
                  </button>
                  <figcaption>
                    <strong>{voice.name}</strong> · {voice.detail}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

        <div className={styles.controls}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.previous}`}
            aria-label={content.previous}
            onClick={() => move(-1)}
          >
            <Arrow />
          </button>
          <div className={styles.dots} aria-hidden="true">
            {content.items.map((voice, index) => (
              <span
                key={voice.name}
                className={index === current % count ? styles.dotOn : styles.dot}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.arrow}
            aria-label={content.next}
            onClick={() => move(1)}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
