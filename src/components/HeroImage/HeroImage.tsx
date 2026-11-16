import Image, { type ImageProps } from "next/image";
import placeholders from "@/lib/image-placeholders.json";

type Placeholder = { src: string; width: number; height: number };

/*
 * The opening photo of a page, shown as blur → sharp photo, never in strips:
 * - A blurred preview made from the photo itself (scripts/build-images.mjs)
 *   fills the hero at once.
 * - The photo stays hidden until it has fully arrived, then fades in over
 *   the preview. A photo already saved in the browser shows at once, with
 *   no fade. The small script that does this is in the root layout
 *   (heroImageScript), so it never waits for the page's main code.
 */
export function HeroImage({ alt, src, className, ...props }: ImageProps & { src: string }) {
  const placeholder = (placeholders as Record<string, Placeholder>)[src];

  return (
    <>
      {placeholder && (
        // A plain <img> with the photo's own class, so it is cropped and
        // positioned exactly like the photo on top of it.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={blurSvg(placeholder)}
          alt=""
          aria-hidden
          className={className}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      )}
      <Image {...props} src={src} alt={alt} className={className} data-hero-img suppressHydrationWarning />
    </>
  );
}

// The tiny photo, enlarged and blurred inside an SVG. The filter keeps the
// edges solid instead of fading them out (the same trick Next.js uses).
function blurSvg({ src, width, height }: Placeholder) {
  const w = width * 40;
  const h = height * 40;
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>` +
    `<filter id='b' color-interpolation-filters='sRGB'>` +
    `<feGaussianBlur stdDeviation='20'/>` +
    `<feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/>` +
    `<feFlood x='0' y='0' width='100%' height='100%'/>` +
    `<feComposite operator='out' in='s'/>` +
    `<feComposite in2='SourceGraphic'/>` +
    `<feGaussianBlur stdDeviation='20'/>` +
    `</filter>` +
    `<image width='100%' height='100%' preserveAspectRatio='none' style='filter:url(#b)' href='${src}'/>` +
    `</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/*
 * Runs at the very top of every page, before any photo starts loading.
 * When a hero photo (data-hero-img) has fully loaded, it marks it shown:
 * "instant" if it arrived within ~120ms of appearing (saved in the
 * browser), otherwise "fade". The CSS for both is in globals.css.
 */
export const heroImageScript = `(function(){
var seen=new WeakMap();
function stamp(n){if(n.nodeType!==1)return;
var imgs=n.matches&&n.matches('[data-hero-img]')?[n]:n.querySelectorAll?n.querySelectorAll('[data-hero-img]'):[];
for(var i=0;i<imgs.length;i++){var img=imgs[i];if(seen.has(img))continue;seen.set(img,performance.now());
if(img.complete&&img.naturalWidth)show(img);}}
function show(img){if(img.hasAttribute('data-shown'))return;
var t=seen.has(img)?seen.get(img):0;
img.setAttribute('data-shown',performance.now()-t<120?'instant':'fade');}
new MutationObserver(function(list){for(var i=0;i<list.length;i++){var a=list[i].addedNodes;for(var j=0;j<a.length;j++)stamp(a[j]);}})
.observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('load',function(e){var t=e.target;if(t&&t.hasAttribute&&t.hasAttribute('data-hero-img'))show(t);},true);
})();`;
