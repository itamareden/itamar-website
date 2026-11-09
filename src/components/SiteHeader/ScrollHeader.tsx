"use client";

import { useEffect, useRef, useState } from "react";

/*
 * The <header> element, which slides away while you scroll down and comes
 * back, pinned to the top, once you've scrolled up a little way. At the top of the page
 * it's the normal header. A client component only to follow the scroll.
 *
 * data-scroll is "shown" or "hidden" away from the top, and absent at the
 * top; SiteHeader.module.css styles each state.
 */
type ScrollState = "top" | "shown" | "hidden";

// How far down (px) before the header starts hiding, how many px of
// movement count at all (ignores tiny jitters), and how far up (px) you
// scroll in one go before the header comes back (about two wheel steps).
const TOP_ZONE = 120;
const MIN_DELTA = 6;
const SHOW_AFTER_UP = 200;

export function ScrollHeader({ className, children }: { className: string; children: React.ReactNode }) {
  const [state, setState] = useState<ScrollState>("top");
  // Set for one frame when leaving the top, so the header disappears
  // without first sliding across the screen.
  const [instant, setInstant] = useState(false);
  const lastY = useRef(0);
  const upDistance = useRef(0); // px scrolled up since the last downward scroll
  const stateRef = useRef<ScrollState>("top");

  useEffect(() => {
    function apply(next: ScrollState) {
      if (next === stateRef.current) return;
      if (stateRef.current === "top" && next === "hidden") {
        setInstant(true);
        requestAnimationFrame(() => requestAnimationFrame(() => setInstant(false)));
      }
      stateRef.current = next;
      setState(next);
    }

    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < TOP_ZONE) {
        apply("top");
        lastY.current = y;
        return;
      }
      if (Math.abs(delta) < MIN_DELTA) return;

      if (delta > 0) {
        upDistance.current = 0;
        apply("hidden");
      } else {
        upDistance.current -= delta;
        if (upDistance.current >= SHOW_AFTER_UP) apply("shown");
      }
      lastY.current = y;
    }

    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={className}
      data-scroll={state === "top" ? undefined : state}
      data-instant={instant ? "" : undefined}
    >
      {children}
    </header>
  );
}
