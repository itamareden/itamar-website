import Link from "next/link";
import { getDictionary } from "@/dictionaries";
import { getLocale } from "@/i18n/get-locale";

/*
 * The 404 page, in the visitor's language.
 *
 * Known limitation: because the root layout lives in app/[locale]/, Next
 * can't server-render this page. It responds with status 404, an empty
 * HTML shell and the page data, and the browser builds the page once
 * JavaScript loads (a brief blank moment; blank without JavaScript).
 * We accepted this to keep a single way of deciding the language.
 * The alternative is app/global-not-found.tsx (experimental), which renders
 * outside this layout. See docs/architecture.md.
 */
export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <h1>{dict.notFound.title}</h1>
      <p>{dict.notFound.text}</p>
      <p>
        <Link href={`/${locale}`}>{dict.notFound.home}</Link>
      </p>
    </>
  );
}
