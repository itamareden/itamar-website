"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { markDayComplete } from "../_lib/progress";
import { clearPosition, getPlayed, getPosition, savePlayed, savePosition } from "../_lib/resume";
import styles from "../practice.module.css";
import { SkipIcon } from "./SkipIcon";

type AudioPlayerProps = {
  src: string;
  title: string;
  artist: string; // shown on the phone's lock screen
  day?: number; // listening properly marks this day as complete (see below)
  labels: { play: string; pause: string; back: string; forward: string; seek: string };
};

const SKIP_SECONDS = 10;

/*
 * A day counts as complete when, while playing, the meditation reaches its
 * last 30 seconds (closing silence or music doesn't have to be sat through)
 * AND at least half of it was actually played, so sampling the start and
 * dragging to the end doesn't count.
 */
const COMPLETE_BEFORE_END_SECONDS = 30;
const MIN_PLAYED_SHARE = 0.5;

// Between two timeupdate events normal playback moves ~0.25 s (more at
// higher speed). A bigger jump means a seek, which isn't listening.
const MAX_NATURAL_STEP_SECONDS = 2;

// 754 → "12:34"
function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/*
 * Our own controls around the browser's <audio> element, which plays the
 * mp3 directly (it starts at once and loads the rest while playing).
 * The <audio> tag itself has no `controls` attribute, so the browser's
 * default player stays hidden.
 */
export function AudioPlayer({ src, title, artist, day, labels }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const positionKey = `audio:${src}`;

  // Seconds actually played (kept across visits), and the position at the
  // previous timeupdate, to measure each small step of playback.
  // Refs, not state: they change constantly and never need a re-render.
  const playedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  /*
   * The file is attached here, after React is listening, not as a src
   * attribute in the HTML. Otherwise the browser can read the length before
   * the page becomes interactive, the loadedmetadata event is missed, and the
   * seek bar never learns how long the meditation is.
   */
  useEffect(() => {
    if (audioRef.current) audioRef.current.src = src;
  }, [src]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {}); // rejected if the browser blocks playback; nothing to do
    } else {
      audio.pause();
    }
  }

  function skip(seconds: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration || 0);
  }

  // Lock-screen / notification controls on phones, so a meditation can be
  // paused or skipped without unlocking (the screen is often off by then).
  function setUpLockScreen() {
    if (!("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({ title, artist });
    navigator.mediaSession.setActionHandler("seekbackward", () => skip(-SKIP_SECONDS));
    navigator.mediaSession.setActionHandler("seekforward", () => skip(SKIP_SECONDS));
  }

  return (
    <div className={styles.audio}>
      <audio
        ref={audioRef}
        preload="metadata" /* only the length up front, not the whole file */
        onPlay={() => {
          setPlaying(true);
          setUpLockScreen();
        }}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const { currentTime, duration, paused } = e.currentTarget;
          setTime(currentTime);
          savePosition(positionKey, currentTime);

          // Jumping to a saved position or dragging the slider also fires
          // timeupdate: only natural steps while playing count as listening.
          if (paused) return;
          const step = currentTime - (lastTimeRef.current ?? currentTime);
          lastTimeRef.current = currentTime;
          if (step > 0 && step < MAX_NATURAL_STEP_SECONDS) {
            playedRef.current += step;
            savePlayed(positionKey, playedRef.current);
          }

          const nearEnd = currentTime >= duration - COMPLETE_BEFORE_END_SECONDS;
          const listenedEnough = playedRef.current >= duration * MIN_PLAYED_SHARE;
          if (day && duration && nearEnd && listenedEnough) {
            markDayComplete(day); // does nothing if it's already marked
          }
        }}
        onSeeking={() => {
          lastTimeRef.current = null; // the next step starts from the new position
        }}
        onLoadedMetadata={(e) => {
          const audio = e.currentTarget;
          setDuration(audio.duration);
          playedRef.current = getPlayed(positionKey);
          // Continue where they stopped last time (unless it was the very start or end).
          const saved = getPosition(positionKey);
          if (saved > 5 && saved < audio.duration - 5) {
            audio.currentTime = saved;
            setTime(saved);
          }
        }}
        onEnded={() => {
          setPlaying(false);
          clearPosition(positionKey);
        }}
      />

      <p className={styles.audioTitle}>{title}</p>

      {/*
        Media controls stay left-to-right in Hebrew too, like every video
        and audio player: time runs left to right, "back" is on the left.
      */}
      <div className={styles.audioControls} dir="ltr">
        <button type="button" className={styles.skip} onClick={() => skip(-SKIP_SECONDS)} aria-label={labels.back}>
          <SkipIcon direction="back" />
        </button>

        <button
          type="button"
          className={styles.playButton}
          onClick={togglePlay}
          aria-label={playing ? labels.pause : labels.play}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {playing ? <path d="M8 5h3v14H8zM13 5h3v14h-3z" /> : <path d="M8 5.5v13l10.5-6.5z" />}
          </svg>
        </button>

        <button type="button" className={styles.skip} onClick={() => skip(SKIP_SECONDS)} aria-label={labels.forward}>
          <SkipIcon direction="forward" />
        </button>
      </div>

      <div className={styles.timeline} dir="ltr">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={1}
          value={time}
          onChange={(e) => {
            const audio = audioRef.current;
            if (audio) audio.currentTime = Number(e.target.value);
          }}
          aria-label={labels.seek}
          aria-valuetext={`${formatTime(time)} / ${formatTime(duration)}`}
          className={styles.seek}
          style={{ "--played": `${duration ? (time / duration) * 100 : 0}%` } as CSSProperties}
        />
        <div className={styles.times}>
          <span>{formatTime(time)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
