"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  items: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
};

/*
 * The nav on small screens: a button that unfolds a panel under the header.
 *
 * A client component because open/closed is state that lives in the
 * browser. The header (a server component) prepares the links and labels
 * and passes them in as props, so this component needs no dictionary.
 *
 * Closes on: the close button, a tap outside (the dimmed backdrop),
 * Escape, or choosing a link.
 */
export function MobileMenu({ items, openLabel, closeLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId(); // unique id linking the button to the panel it controls

  // While open: Escape closes the menu, and the page behind doesn't scroll.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus(); // return focus to the button that opened it
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";

    // Cleanup runs when the menu closes (or the component unmounts).
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={styles.menu}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.button}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div id={panelId} className={styles.panel}>
            <nav>
              <ul className={styles.list}>
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={styles.link} onClick={() => setOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher className={styles.switcher} />
          </div>
        </>
      )}
    </div>
  );
}
