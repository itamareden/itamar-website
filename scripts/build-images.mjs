/**
 * Makes every photo's sizes in advance, so the live site serves ready-made
 * files instead of resizing photos on demand (which made photos appear a
 * second or two after the text).
 *
 * For each photo in public/images it writes WebP copies at the widths
 * <Image> asks for, in the two qualities the site uses (75 and 90), to
 *   public/_img/<hash>/<width>-q<quality>.webp
 * and lists every photo's hash in src/lib/image-manifest.json, which the
 * image loader (src/lib/image-loader.ts) reads.
 *
 * The hash comes from the photo's content, so replacing a photo gives it a
 * new address and browsers can keep each file forever (see netlify.toml).
 * Unchanged photos are skipped, so later runs are quick.
 *
 * Runs before `next dev` and `next build` (predev / prebuild in package.json).
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// The same widths Next.js uses for srcset (imageSizes + deviceSizes).
export const WIDTHS = [32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840];
const QUALITIES = [75, 90];

// Photos so full of fine detail (leaves, roots) that their usual sizes come
// out heavy: their everyday files (the q75 ones) are made at this lower
// quality instead. The difference is very hard to see in such textures.
const LIGHTER = {
  "/images/practices/grounded-roots.jpg": 55,
};

const root = process.cwd();
const srcDir = path.join(root, "public", "images");
const outDir = path.join(root, "public", "_img");
const manifestPath = path.join(root, "src", "lib", "image-manifest.json");
// Shown while a photo loads (see HeroImage). Kept apart from the manifest,
// which the browser downloads; this one is only read when pages are built.
const placeholdersPath = path.join(root, "src", "lib", "image-placeholders.json");

// A tiny version of the photo, blurred by HeroImage while the photo loads.
async function makePlaceholder(input) {
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: 10 })
    .webp({ quality: 60 })
    .toBuffer({ resolveWithObject: true });
  return {
    src: `data:image/webp;base64,${data.toString("base64")}`,
    width: info.width,
    height: info.height,
  };
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
  );
}

async function makeSizes(input, dir, everyday = 75) {
  const { width: originalWidth } = await sharp(input).metadata();
  // Widths wider than the photo get its full width (never enlarged).
  const made = new Map();
  for (const quality of QUALITIES) {
    for (const width of WIDTHS) {
      const actual = Math.min(width, originalWidth);
      const key = `${actual}-${quality}`;
      if (!made.has(key)) {
        made.set(
          key,
          sharp(input)
            .rotate()
            .resize({ width: actual })
            .webp({ quality: quality === 75 ? everyday : quality })
            .toBuffer(),
        );
      }
      fs.writeFileSync(path.join(dir, `${width}-q${quality}.webp`), await made.get(key));
    }
  }
}

const started = Date.now();
const manifest = {};
const placeholders = {};
let made = 0;

for (const file of walk(srcDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const input = fs.readFileSync(file);
  const publicPath = "/" + path.relative(path.join(root, "public"), file).split(path.sep).join("/");
  const everyday = LIGHTER[publicPath] ?? 75;
  // A lighter setting is part of the hash, so changing it remakes the sizes.
  const hash = createHash("sha1")
    .update(input)
    .update(everyday === 75 ? "" : `q${everyday}`)
    .digest("hex")
    .slice(0, 10);
  manifest[publicPath] = hash;
  placeholders[publicPath] = await makePlaceholder(input);

  const dir = path.join(outDir, hash);
  const expected = WIDTHS.length * QUALITIES.length;
  if (fs.existsSync(dir) && fs.readdirSync(dir).length === expected) continue;

  fs.mkdirSync(dir, { recursive: true });
  await makeSizes(input, dir, everyday);
  made++;
}

// Remove sizes of photos that were replaced or deleted.
const current = new Set(Object.values(manifest));
if (fs.existsSync(outDir)) {
  for (const old of fs.readdirSync(outDir)) {
    if (!current.has(old)) fs.rmSync(path.join(outDir, old), { recursive: true });
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
fs.writeFileSync(placeholdersPath, JSON.stringify(placeholders, null, 2) + "\n");
console.log(
  `Images: ${Object.keys(manifest).length} photos, ${made} (re)made, ${((Date.now() - started) / 1000).toFixed(1)}s`,
);
