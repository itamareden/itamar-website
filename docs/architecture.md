# Architecture & Decisions

The single place for what we've decided about this website and why.
Update it whenever a decision is made or changed.

_Last updated: 2026-10-06_

---

## 1. What we're building

A bilingual (Hebrew + English) website for Itamar Eden's work in meditation, breath, movement and embodiment. It introduces Itamar and the work, presents offerings (private sessions, courses, workshops/events, practices, the 5-Day Challenge), and lets people get in touch or register.

Later it will sell courses and let paying students log in and watch them.

## 2. Tech stack

| What | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) + React + TypeScript | Required by the brief; handles routing, building and server code in one place |
| Rendering | Every public page is pre-built (static) | Content changes when files change, not per visitor → fast, cheap, robust |
| Content | Markdown/MDX files in the repo | No CMS needed yet; versioned with the code; easy to see how content becomes pages |
| Content validation | Zod schema per content type | A missing or misspelled field stops the build instead of publishing a broken page |
| Styling | CSS Modules + design tokens (CSS custom properties) | No extra dependencies; plain CSS; all visual decisions in one file; suits custom, expressive design |
| Hosting | Vercel (suggested, not final) | Made for Next.js, free tier, preview URLs |

Dependencies are kept minimal. A new one is added only when there's a concrete need.

## 3. Languages (Hebrew + English)

- Every page lives under a language prefix: `/he/...` and `/en/...`.
- URL path segments are in English in both languages (`/he/courses/...`) so shared links stay readable.
- Visiting `/` redirects based on browser language, remembered in a cookie. **Fallback: English.**
- There is always a language switcher. If the current page has no version in the other language, the switcher goes to that language's section page (e.g. `/he/events`).
- Header, nav and footer direction follows the URL (`he` → RTL, `en` → LTR).
- All CSS uses **logical properties** (`padding-inline`, `margin-inline-start`, `text-align: start`) so layouts flip automatically for RTL.
- Interface text (nav labels, buttons, form labels) lives in two typed dictionaries, `en` and `he`. A missing translation is a TypeScript error.
- English words inside Hebrew text work automatically (the browser's bidirectional text algorithm). For rare edge cases, a small `<En>…</En>` component marks a phrase as English.
- Each language may need its own font. The Hebrew font must also include good Latin letters.

## 4. Content model

### Where content lives

The folder structure mirrors the URL:

```
content/
  he/
    about.mdx                       → /he/about
    sessions.mdx                    → /he/sessions
    events/breath-retreat.mdx       → /he/events/breath-retreat
    courses/first-zoom-course.mdx   → /he/courses/first-zoom-course
  en/
    about.mdx                       → /en/about
    events/breath-retreat.mdx       → /en/events/breath-retreat
```

### Content files

Each `.mdx` file has:
- **Frontmatter**: structured fields between `---` lines at the top (title, date, etc.).
- **Body**: free text in Markdown, which can include React components when a page needs something special.

### Visibility rule: the folder decides

- An item appears on a language's site **only if a file for it exists in that language's folder**. No show/hide flags.
- Any item can appear on either site, or both.
- A translation of an item uses the **same file name** in the other language's folder. That's how the language switcher connects them.
- This applies to **all** content types.

### Language fields (optional; both default to the folder's language)

| Field | Meaning | Effect |
|---|---|---|
| `contentLanguage` | Language the text is written in | Page body gets the right `lang`/`dir` (e.g. an English write-up on the Hebrew site displays LTR inside the RTL site) |
| `eventLanguage` | Language the offering is taught in | Shows an "in English" / "בעברית" label when it differs from the site language |

### Single pages vs. collections

| Single pages (one per language, unique layout) | Collections (many items, own schema + list + detail template) |
|---|---|
| Home, About, Sessions, Contact | Events, Courses, Practices, Challenge days |

Content types do **not** share one template. Each collection has its own schema and page layout, and they share small building blocks (Hero, Section, Button, Card, MediaEmbed).

### Per-type notes

- **Sessions:** private one-on-one sessions. One page covering all session types. Booking is through an inquiry/contact flow.
- **Events:** workshops and events are the same type (`events`, route `/events`). No `kind` field for now; it's easy to add if labels like "Retreat" are wanted.
  - A `summary` field holds the short text shown on the event's card in the list.
  - **An event gets its own detail page only if its file has a body.** A small event (e.g. a free drop-in sit) can be frontmatter only: its card shows everything and isn't a link.
  - The CTA is optional: no `cta` means no button.
- **Courses:** public page (description, syllabus, price) lives in `content/`. Each course has a stable `id` separate from its URL slug, so future purchases stay linked if the URL changes. **Paid lesson content never goes in `content/`**, because anything there becomes a public page.
- **Practices:** video only (embedded, e.g. YouTube), through a single `<MediaEmbed>` component so the video host can change in one place.
- **Articles:** possible future collection. Not built now.

## 5. Calls to action (registration)

Each offering's frontmatter says what its button does. A single `<OfferingCTA>` component renders it.

```yaml
cta:
  type: inquiry            # → contact form, pre-filled with what they're asking about
# or
cta:
  type: external           # → external registration/payment system
  url: https://...
```

Later: `type: purchase` with a product id. Adding payments means adding one new type, not rewriting pages.

## 6. 5-Day Challenge

Two separate flows; we don't build a universal registration system.

- **Group challenge:** promoted on Instagram, delivered via WhatsApp. The website only shows info and links.
- **Self-guided challenge (built on the site, both languages):**
  1. Landing page with an email form, with a clear marketing-consent line (required in Israel/EU).
  2. On submit, the email and language go to a mailing-list provider through one `subscribe()` function.
  3. The visitor goes to day 1.
  4. The provider sends one email per day for 5 days, each linking to that day's page.
  5. Day pages are **unlisted but not locked**: anyone with the link can open any day.

## 7. Future systems (not built in v1)

| System | Plan |
|---|---|
| Mailing list / newsletter | Provider chosen when the self-guided challenge is built; the newsletter (months away) reuses it |
| Contact form email sending | A sending service (e.g. Resend), chosen when the contact form is built |
| Payments | Provider TBD; plugs in as a new CTA type |
| Accounts / auth | Only for paid courses. Use an auth provider rather than storing passwords ourselves |
| Database | Only for **user data** (accounts, purchases, course progress). Website content stays in files |
| Course video delivery | TBD; needs protected hosting (not public YouTube) |
| Paid course area | Its own zone, `/[locale]/learn/...`, dynamic and behind login. The public site stays static |

## 8. Project structure (planned)

```
content/          Markdown/MDX content, by language
docs/             this file
public/           images and static files
src/
  app/[locale]/   routes
  components/     shared UI building blocks
  dictionaries/   interface text: en.ts, he.ts
  lib/content/    content loaders + schemas (the only code that reads content files)
  styles/         tokens.css, globals.css
```

`lib/content/` is the seam for a future CMS: pages call `getEvents("he")`, never read files directly. Swapping to a CMS only changes this folder.

## 9. Routes

| Route | Type |
|---|---|
| `/[locale]` | Home |
| `/[locale]/about` | Single page |
| `/[locale]/sessions` | Single page |
| `/[locale]/events`, `/[locale]/events/[slug]` | Collection |
| `/[locale]/courses`, `/[locale]/courses/[slug]` | Collection |
| `/[locale]/practices`, `/[locale]/practices/[slug]` | Collection |
| `/[locale]/challenge` (+ day pages) | Special flow |
| `/[locale]/contact` | Single page |

## 10. Still open

- Challenge day pages: separate routes vs. one growing page (decide when building it).
- **Past events going stale:** pages are built ahead of time, so an event that has ended stays listed as upcoming until the next build. Options: filter by date at build time plus an automatic nightly rebuild, or Next.js Incremental Static Regeneration (pages regenerate in the background, e.g. daily). Decide when building events.
- Fonts, colours, imagery: placeholders until the identity develops (they live in `tokens.css`).
- Hosting: confirm Vercel when we first deploy.
- Providers: mailing list, email sending, payments, auth, video (each decided when needed).
- Legal pages: privacy policy before any form goes live; terms + refund policy before payments.

## 11. Build plan

1. **Walking skeleton:** project setup, `tokens.css`, `[locale]` routing with `lang`/`dir`, dictionaries, header/footer/nav, language switcher, placeholder page for every route. ← next
2. Content layer for one collection (events): schema, loader, list page, detail page.
3. Remaining pages and collections, one at a time.
