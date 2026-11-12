# Content Guide

How to change and add content to the site. Everything here maps to a real file —
no invented fields. After editing, run `npm run dev` to preview and
`npm run build` to verify before deploying.

> All test content is prefixed with `TEST DATA —`. Search for that string to find
> everything you should replace with real information.

---

## Table of contents

1. [Site info — `src/site.ts`](#1-site-info--srcsitets)
2. [Skills — `src/data/skills.ts`](#2-skills--srcdataskillsts)
3. [Devlogs (blog) — `src/content/blog/`](#3-devlogs-blog--srccontentblog)
4. [Projects — `src/content/projects/`](#4-projects--srccontentprojects)
5. [Work Experience — `src/content/work/`](#5-work-experience--srccontentwork)
6. [Images](#6-images)
7. [Drafts & the production build](#7-drafts--the-production-build)
8. [Adding a new post, step by step](#8-adding-a-new-post-step-by-step)

---

## 1. Site info — `src/site.ts`

Central configuration. One file for identity, about text, and contact.

| Field | Where it shows | Notes |
|---|---|---|
| `name` | Hero, browser tab titles | Your real name (e.g. "Darsan Ghosh"). |
| `brand` | Mobile top bar, footer | Brand name, kept in exact casing (e.g. "XpolioN"). |
| `tagline` | Under the hero name | One short line describing your role. |
| `about` | Homepage About section | Array of paragraphs. Add/remove strings freely. |
| `aboutExtended` | About page | Longer background paragraphs. |
| `interests` | About page | Array of short focus-area strings, shown as chips. |
| `email` | Contact section, About page | Leave as `""` to show an empty state instead. |
| `resumeUrl` | "Download Resume" button | Path like `"/resume.pdf"` — drop the file in `public/`. |
| `socials` | Sidebar + mobile hero | Array of `{ label, href }`. Empty href renders as `#`. |

**To change:** edit the string in place. Example:

```ts
name: "Your Name",
tagline: "Your one-line role description.",
email: "you@example.com",
resumeUrl: "/resume.pdf",
socials: [
  { label: "GitHub", href: "https://github.com/you" },
  { label: "LinkedIn", href: "https://linkedin.com/in/you" },
  { label: "X", href: "https://x.com/you" },
  { label: "Email", href: "mailto:you@example.com" },
],
```

> Don't fabricate details. If a field isn't ready, leave it empty — the UI shows
> an empty state rather than inventing content.

---

## 2. Skills — `src/data/skills.ts`

Powers the homepage **Skills** tab. Structured as groups of items.

```ts
export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      "TypeScript",                                   // text only
      { name: "Python", icon: "https://…/python.svg" }, // with icon
    ],
  },
];
```

- **`category`** — the group heading (shown in tea-green uppercase).
- **`items`** — a skill. Either a **plain string** (`"Lua"`) or an object:
  - `name` — the skill label.
  - `icon` — *optional*. **Any image URL** works: a remote CDN SVG or a file in
    `public/` (e.g. `"/icons/godot.svg"`). Leave it off for text-only.

**To change:** edit the `category` names and `items`. Add a new group by copying
an existing `{ category, items }` block.

---

## 3. Devlogs (blog) — `src/content/blog/`

> The live URLs are `/devlogs`, but the **folder** is still `src/content/blog/`.
> That folder is internal only — it never appears in a URL.

Add a Markdown/MDX file per post. Each file starts with **frontmatter**:

```md
---
title: "Your Post Title"
description: "A one-line summary shown in listings and search."
pubDate: 2026-05-01
tags: ["Game Dev", "Godot"]
cover: ./cover.png
draft: false
---

Your post body in Markdown. **Bold**, [links](https://example.com),
`code`, lists, etc. all work.
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | Post title. |
| `description` | ✅ | Shown in the listing and as the meta description. |
| `pubDate` | ✅ | Date in `YYYY-MM-DD` format. |
| `tags` | optional | Array of strings. Each becomes a `/devlogs/tags/<tag>` page. |
| `cover` | optional | A cover image. See [Images](#6-images). |
| `draft` | optional | `true` hides the post from production builds. See [Drafts](#7-drafts--the-production-build). |

The **filename** becomes the URL slug: `my-first-post.md` → `/devlogs/my-first-post`.

---

## 4. Projects — `src/content/projects/`

One Markdown file per project. The filename is the slug
(`dungeon-crawler.md` → `/projects/dungeon-crawler`).

```md
---
title: "Dungeon Crawler Prototype"
description: "A 2D dungeon crawler with procedural rooms, built in Godot."
cover: ./test-cover.jpg
type: "Game"
technologies: ["Godot", "GDScript", "Aseprite"]
role: "Solo developer"
status: "Completed"
links:
  - label: "Source"
    url: "https://github.com/you/project"
featured: true
---

## Overview

Body content in Markdown. Add `media` below for a screenshot gallery.
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | Project title. |
| `description` | ✅ | One-line summary (cards + meta description). |
| `type` | ✅ | e.g. `"Game"`, `"Web"`, `"Tool"`. Free text. |
| `technologies` | optional | Array of strings → tech chips. |
| `role` | optional | Your role, e.g. `"Solo developer"`. |
| `status` | ✅ | e.g. `"Completed"`, `"In progress"`. Free text. |
| `links` | optional | Array of `{ label, url }` → buttons. |
| `featured` | optional | `true` shows a Featured badge and surfaces it first. |
| `cover` | optional | Single hero image (top of card + detail page). See [Images](#6-images). |
| `media` | optional | Extra screenshots — a gallery lower on the detail page. |

**`media`** is an array of screenshots, each with a required caption:

```md
media:
  - src: ./screenshot-1.png
    alt: "Main gameplay showing procedural rooms"
    caption: "Room generation in action"
  - src: ./screenshot-2.png
    alt: "Inventory UI"
```

The body text (below the frontmatter) renders on the project's detail page.

---

## 5. Work Experience — `src/content/work/`

One Markdown file per role. Powers the homepage **Work Experience** tab.

```md
---
company: "Sample Tech Co."
role: "Software Engineer Intern"
period: "2024 — Present"
summary: "Built internal tooling and shipped customer-facing features."
highlights:
  - "Reduced build times by restructuring the CI pipeline"
  - "Implemented a REST API consumed by three internal apps"
---
```

| Field | Required | Notes |
|---|---|---|
| `company` | ✅ | Company name. |
| `role` | ✅ | Your job title. |
| `period` | ✅ | Date range, e.g. `"2022 — 2024"`. |
| `summary` | optional | One-line description. |
| `highlights` | optional | Array of bullet points. |

> Work entries are shown newest-first based on `period`. If ordering ever looks
> off, adjust the `period` strings so they sort sensibly.

---

## 6. Images

Two different systems — read carefully:

### Cover / media images (projects, devlogs)
These use Astro's `image()` helper, which **requires local files** so it can
read dimensions and optimize them at build time.

- Put the image **next to the project/post's Markdown file**.
- Reference it with a **relative path**: `cover: ./test-cover.jpg`.
- Supported formats: `.png`, `.jpg`, `.webp`, `.avif`, etc.
- **Remote URLs (https://…) will NOT work here** — they must be local files.

### Skill icons
These are plain `<img>` tags, so **any URL works** — a remote CDN SVG
(e.g. devicon) or a file in `public/`:

```ts
{ name: "Python", icon: "https://cdn.jsdelivr.net/…/python.svg" } // remote
{ name: "Godot", icon: "/icons/godot.svg" }                        // file in public/
```

### Other static files
Anything in `public/` is served at the site root. Put `resume.pdf` in
`public/` and reference it as `resumeUrl: "/resume.pdf"`.

---

## 7. Drafts & the production build

Set `draft: true` in a devlog's frontmatter to keep it unpublished:

- `npm run dev` → the draft **shows** with a "Draft" badge, so you can preview.
- `npm run build` → the draft is **excluded** from the production output.

Use it for work-in-progress posts. Flip it to `false` (or remove it) to publish.

---

## 8. Adding a new post, step by step

1. Create a file in `src/content/blog/` named with your slug, e.g. `hello-world.md`.
2. Add frontmatter (`title`, `description`, `pubDate`, and optional `tags`/`cover`).
3. Write your body in Markdown below the `---` line.
4. (Optional) Place a cover image beside it and add `cover: ./your-image.png`.
5. Run `npm run dev` and open `http://localhost:4321/devlogs` to check.
6. Run `npm run build` to make sure it compiles cleanly before committing.

Same pattern applies to projects (`src/content/projects/`) and work
(`src/content/work/`).

---

## Quick reference — where things live

| What | File / folder |
|---|---|
| Name, tagline, about, email, socials, resume | `src/site.ts` |
| Skills (homepage tab) | `src/data/skills.ts` |
| Devlog posts | `src/content/blog/` |
| Projects | `src/content/projects/` |
| Work experience | `src/content/work/` |
| Resume file / static assets | `public/` |
| Colors, fonts, animations | `src/styles/` (see `DESIGN.md`) |
