import { notFound } from "next/navigation";

/*
 * Catches every URL under /en or /he that no other route matches
 * (e.g. /he/nope) and hands it to not-found.tsx, so the 404 page is
 * localized and shown inside the site's header and footer.
 * Without it, Next shows its own English-only 404.
 */
export default function CatchAll() {
  notFound();
}
