# Luma — Buzzvel Front-End Test 2026

A single responsive marketing page for **Luma**, a fictional learning platform, built from the [Buzzvel FE Test 2026 Figma file](https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026).

The page covers the desktop and mobile frames: header, hero, skill tracks, featured course, “How Luma works”, testimonial and stats, community collage, contact form, closing call to action, and footer.

## Install, run and build

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the production build.

## Key decisions

- **One page, mock data.** The Figma file is a single landing page. Copy and lists live in `lib/content.ts`. There is no backend. Footer links jump to the matching section on this page, because the file does not include extra screens for Terms, Careers, or a course catalog.
- **Server components by default.** Only the header (mobile menu) and the contact form run on the client. Everything else is rendered on the server.
- **In-page actions.** “Explore courses”, “See how it works”, “Browse all courses”, and the category cards scroll to a section. “View course”, “Log in”, and “Join Luma” go to the contact form, which is the only capture point in the design.
- **Contact form.** Validation runs in the browser. A successful submit confirms the message and explains that nothing is sent to a server.
- **Mobile navigation.** The design shows a hamburger and not the open state. The open menu is a panel under the header, closable with Escape, the button, or a link. The desktop navigation appears from the `lg` breakpoint upward. Between the two frames, sections stack until there is room for two columns.
- **Type and color.** Headings use Plus Jakarta Sans and body text uses Inter, both loaded with `next/font`. Colors were sampled from the rendered frames (blue `#3157F6`, paper `#F6F5EF`, yellow `#F3E56B`, navy `#161822`). Dev Mode in the file requires an account, so spacing and type sizes were matched by eye rather than copied from the inspect panel.
- **Step numbers.** The process labels are Step 01, 02 and 03. At the zoom available without Dev Mode the small caps were easy to misread, and sequential numbers match the three stages.
- **Motion.** Hover and color changes are CSS only. `prefers-reduced-motion: reduce` turns off smooth scrolling and transitions.

## Known gaps

- Photographs are crops of the Figma canvas, not the original image fills, so they are softer and slightly tighter than the source frames.
- The trust-row and closing-banner faces are simplified color marks. Only Alex Morgan’s portrait was clear enough to crop.
- Exact spacing, radii and type sizes can drift a few pixels from the file because they were not taken from Figma’s inspect panel.
- There is no separate tablet frame. The layout interpolates between the mobile and desktop designs.

## Time spent

About 3 hours (AI-assisted scaffolding with Cursor, plus manual review, testing and adjustments).

## AI tools used

Cursor (AI coding agent) was used to scaffold the project and implement the page, with human review of the result. The code is organized so it can be explained section by section: content in `lib/content.ts`, layout in server components, and client behavior limited to the menu and the form.

## Architecture

```
app/layout.tsx          fonts, metadata, document shell
app/page.tsx            composes the page and JSON-LD
app/globals.css         Tailwind theme tokens and reduced motion
lib/content.ts          typed copy, navigation, stats, footer links
components/             one file per section
```

`SiteHeader` and `ContactForm` are client components. The other sections receive typed data and render semantic HTML: one `h1`, labelled sections, a real form, and a footer built from lists. Images go through `next/image`. The hero image is preloaded. Other images are lazy-loaded.
