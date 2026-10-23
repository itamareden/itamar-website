"use client";

import { useSyncExternalStore } from "react";

/*
 * Which challenge days were completed (meditation listened to the end),
 * remembered in this browser's localStorage. There are no accounts, so
 * this is per device: nothing about anyone leaves their phone.
 */

const KEY = "challenge-completed-days";
const CHANGE = "challenge-progress-change"; // tells this tab's components to re-read

// Used only when localStorage is blocked: then progress lasts until the page reloads.
let fallback = "[]";

function read(): string {
  try {
    return localStorage.getItem(KEY) ?? "[]";
  } catch {
    return fallback; // storage can be blocked (private mode, strict settings)
  }
}

export function markDayComplete(day: number) {
  const days: number[] = JSON.parse(read());
  if (days.includes(day)) return;

  const next = JSON.stringify([...days, day]);
  fallback = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {
    // Blocked: the fallback keeps it for this visit.
  }
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE, onChange);
  window.addEventListener("storage", onChange); // changes made in other tabs
  return () => {
    window.removeEventListener(CHANGE, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/*
 * useSyncExternalStore reads a value that lives outside React (here,
 * localStorage) and re-renders when it changes. The server has no
 * localStorage, so the server render (and the first render in the browser)
 * uses "[]": that keeps the HTML identical on both sides, then the real
 * value appears.
 */
export function useCompletedDays(): number[] {
  const raw = useSyncExternalStore(subscribe, read, () => "[]");
  return JSON.parse(raw);
}
