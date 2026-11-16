"use client";

/**
 * Tells <Image> where each size of a photo lives. The sizes are made in
 * advance by scripts/build-images.mjs, so the site serves ready-made files
 * and never resizes photos while a visitor waits.
 */
import manifest from "./image-manifest.json";

// Must match WIDTHS in scripts/build-images.mjs.
const WIDTHS = [32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];

type LoaderProps = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width, quality }: LoaderProps) {
  // Mux video stills: Mux resizes them itself.
  if (src.startsWith("https://image.mux.com/")) {
    const url = new URL(src);
    url.searchParams.set("width", String(width));
    return url.toString();
  }

  const hash = (manifest as Record<string, string>)[src];
  // Other remote images (YouTube stills), or a photo added since the last
  // run of the script: serve the file as it is.
  if (!hash) return src;

  const size = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  const q = (quality ?? 75) >= 85 ? 90 : 75;
  return `/_img/${hash}/${size}-q${q}.webp`;
}
