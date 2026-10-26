"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";
import { useRef, type ComponentRef } from "react";
import { clearPosition, getPosition, savePosition } from "../_lib/resume";
import styles from "../practice.module.css";
import { SkipIcon } from "./SkipIcon";

type VideoPlayerProps = {
  playbackId: string;
  title: string;
  thumbnailTime?: number; // the second whose frame is the cover picture
  labels: { back: string; forward: string };
};

const SKIP_SECONDS = 10;

/*
 * A video streamed by Mux: quality adapts to the viewer's connection, and
 * the player has speed and fullscreen, but no download button.
 *
 * The lazy version only loads the player's code when the video scrolls
 * near the screen, so a page with two videos still opens quickly.
 */
export function VideoPlayer({ playbackId, title, thumbnailTime, labels }: VideoPlayerProps) {
  // The player element itself, to read and set its position.
  const playerRef = useRef<ComponentRef<typeof MuxPlayer>>(null);
  const positionKey = `video:${playbackId}`;

  function skip(seconds: number) {
    const player = playerRef.current;
    if (player) player.currentTime = Math.max(player.currentTime + seconds, 0);
  }

  return (
    <div className={styles.videoBlock}>
      <div className={styles.video}>
        <MuxPlayer
          ref={playerRef}
          playbackId={playbackId}
          thumbnailTime={thumbnailTime}
          streamType="on-demand"
          title={title}
          metadata={{ video_title: title }}
          accentColor="#a54173" /* --color-accent; the player can't read CSS variables */
          forwardSeekOffset={SKIP_SECONDS}
          backwardSeekOffset={SKIP_SECONDS}
          disableCookies /* anonymous viewing statistics, without cookies */
          style={{ aspectRatio: "16 / 9", inlineSize: "100%" }}
          // Continue where they stopped last time (unless it was the very start or end).
          onLoadedMetadata={() => {
            const player = playerRef.current;
            const saved = getPosition(positionKey);
            if (player && saved > 5 && saved < player.duration - 5) player.currentTime = saved;
          }}
          onTimeUpdate={() => {
            if (playerRef.current) savePosition(positionKey, playerRef.current.currentTime);
          }}
          onEnded={() => clearPosition(positionKey)}
        />
      </div>

      {/*
        Mux's own ±10 s buttons only appear when the player is at least
        470px wide, so phones never get them. These show below the video on
        narrow screens instead (hidden on wider ones, see practice.module.css).
      */}
      <div className={styles.videoSkips} dir="ltr">
        <button type="button" className={styles.skip} onClick={() => skip(-SKIP_SECONDS)} aria-label={labels.back}>
          <SkipIcon direction="back" />
        </button>
        <button type="button" className={styles.skip} onClick={() => skip(SKIP_SECONDS)} aria-label={labels.forward}>
          <SkipIcon direction="forward" />
        </button>
      </div>
    </div>
  );
}
