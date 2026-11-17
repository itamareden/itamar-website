/*
 * Structured data for search engines and AI tools (see
 * src/content/structured-data.ts). "<" is escaped so the text can never
 * close the script tag early.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
