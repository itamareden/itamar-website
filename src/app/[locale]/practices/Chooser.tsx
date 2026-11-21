"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PracticesContent } from "@/content/practices";
import styles from "./page.module.css";

// The four needs as choices; the chosen meditation large below them, and the
// other three as small cards that choose theirs when tapped.
export function Chooser({ content }: { content: PracticesContent }) {
  const [selected, setSelected] = useState(0);
  // Which row's description is open: none at first, like a list of answers.
  const [open, setOpen] = useState<number | null>(null);
  const [atEnd, setAtEnd] = useState(true);
  const needsRef = useRef<HTMLDivElement>(null);

  // Phones: mark the row of needs once it's scrolled to its end (or fits
  // whole), so the fade that hints at more goes away.
  useEffect(() => {
    const row = needsRef.current;
    if (!row) return;
    const update = () => {
      const left = Math.abs(row.scrollLeft); // RTL scrolls in negative numbers
      const end = left + row.clientWidth >= row.scrollWidth - 4;
      row.toggleAttribute("data-end", end);
      setAtEnd(end);
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      row.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const practices = content.practices;
  const current = practices[selected];

  function choose(index: number, scroll = false) {
    setSelected(index);
    if (scroll) {
      document.getElementById("chosen")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <>
      {/* The question, on a soft band across the page. */}
      <div className={styles.top}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.intro}>{content.intro}</p>
        </header>
      </div>

      {/* The needs as a list on the start side, the chosen meditation beside it. */}
      <div className={styles.pick}>
        <div className={styles.needsWrap}>
        <div ref={needsRef} className={styles.needs} role="group" aria-label={content.title}>
          {practices.map((p, i) => (
            <div key={p.need} className={styles.needRow}>
              <button
                type="button"
                className={styles.need}
                aria-pressed={i === selected}
                aria-expanded={i === open}
                aria-controls="chosen"
                onClick={(e) => {
                  choose(i);
                  setOpen(open === i ? null : i);
                  // Phones: bring a half-hidden choice fully into the row.
                  e.currentTarget.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
                }}
              >
                <span className={styles.needName}>{p.need}</span>
                {/* Only the length here: the need answers the question above. */}
                <span className={styles.needTitle}>{p.length}</span>
              </button>
              {/* The chosen one opens: its longer description. */}
              {i === open && <p className={styles.needMore}>{p.description}</p>}
            </div>
          ))}
        </div>
        {/* Phones: an arrow at the faded end, while there are more needs to see. */}
        {!atEnd && (
          <button
            type="button"
            className={styles.needsMore}
            aria-label={content.moreLabel}
            onClick={() => {
              const row = needsRef.current;
              if (!row) return;
              const dir = getComputedStyle(row).direction === "rtl" ? -1 : 1;
              row.scrollBy({ left: dir * row.clientWidth * 0.7, behavior: "smooth" });
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        )}
        </div>

      {/* The key restarts the soft entrance each time the choice changes. */}
      <article id="chosen" key={selected} className={styles.chosen} aria-live="polite">
        <div className={styles.chosenMedia}>
          <Image
            src={current.image}
            alt=""
            fill
            sizes="(max-width: 44rem) 100vw, 40rem"
            className={styles.image}
            style={{ objectPosition: current.imagePosition }}
            loading="eager"
          />
        </div>
        {current.label && <p className={styles.label}>{current.label}</p>}
        <div className={styles.chosenBody}>
          <h2 className={styles.chosenTitle}>{current.title}</h2>
          <p className={styles.summary}>{current.summary}</p>
          {current.placeholder ? (
            <span className={styles.soon}>{content.soon}</span>
          ) : (
            <a href={current.url} target="_blank" rel="noopener noreferrer" className={styles.listen}>
              {content.listen}
            </a>
          )}
        </div>
      </article>
      {/* Phones: the longer description under the photo instead. */}
      <p className={styles.chosenMore}>{current.description}</p>
      </div>

      <section className={styles.others} aria-labelledby="others-title">
        <h2 id="others-title" className={styles.othersTitle}>
          {content.othersTitle}
        </h2>
        <ul className={styles.otherList}>
          {practices.map((p, i) =>
            i === selected ? null : (
              <li key={p.need}>
                <button type="button" className={styles.other} onClick={() => choose(i, true)}>
                  <span className={styles.otherMedia}>
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 44rem) 100vw, 21rem"
                      className={styles.image}
                      style={{ objectPosition: p.imagePosition }}
                    />
                  </span>
                  <span className={styles.otherText}>
                    <span className={styles.otherNeed}>{p.need}</span>
                    <span className={styles.otherTitle}>{p.title}</span>
                  </span>
                </button>
              </li>
            ),
          )}
        </ul>
      </section>
    </>
  );
}
