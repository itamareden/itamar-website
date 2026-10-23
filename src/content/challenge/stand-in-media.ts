/*
 * Stand-in media until the real files are uploaded: a public demo video
 * from Mux's documentation and a 45-second tone (public/media, not in git).
 * Replace each use with the real Mux playback ID / audio address.
 *
 * Kept in its own file (importing nothing) so he.ts and en.ts can use it
 * without importing index.ts, which imports them: that circle would make
 * these constants undefined while the files load.
 */
export const STAND_IN_VIDEO = "EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs";
export const STAND_IN_AUDIO = "/media/standin-meditation.mp3";
