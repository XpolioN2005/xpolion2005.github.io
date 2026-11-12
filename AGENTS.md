# AGENTS.md

## Project

Personal portfolio and blog built from scratch with Astro.

The site includes:

- Portfolio
- Projects
- Blog
- Profile / contact

The visual design is decided by the owner. Do not invent or impose a design direction.

## Stack

- Astro
- TypeScript
- Markdown / MDX
- Astro Content Collections
- Lightweight CSS library for efficient CSS delivery
- Custom CSS where needed

Keep client-side JavaScript minimal.

Do not introduce React, Vue, Svelte, or other frameworks unless explicitly requested.

## Content

Use Content Collections for projects and blog posts.

Content should be separate from page/component implementation.

Do not invent personal information, projects, experience, technologies, achievements, or metrics.

## Structure

Keep the architecture simple.

```text
src/
├── components/
├── content/
│   ├── projects/
│   └── blog/
├── layouts/
├── pages/
└── styles/
```

Only add abstractions when they are actually useful.

## Projects

Projects should support basic metadata such as:

- Title
- Description
- Type
- Technologies
- Role
- Status
- Links
- Media
- Featured

Projects may have dedicated detail pages.

## Blog

Support:

```text
/blog
/blog/[slug]
/blog/tags/[tag]
```

Posts use Markdown/MDX and should support title, description, date, tags, cover image, and draft state.

## Styling

refer to [DESIGN.md](./DESIGN.md)

The owner controls the visual design.

Do not assume colors, typography, layout, animations, or design language.

Do not turn the site into a generic developer portfolio.

Use the chosen CSS library for maintainable and efficient CSS, but use custom CSS whenever required.

## Performance

Keep the site static-first and lightweight.

Avoid unnecessary:

- JavaScript
- Hydration
- Dependencies
- Large client bundles

Use semantic HTML and optimized assets.

## Deployment

The site is deployed on **Netlify**.

Write the application with Netlify deployment in mind.

If server-side functionality is needed, use Astro/Netlify-compatible approaches such as serverless or edge functions where appropriate.

Do not add Netlify as a dependency unless the feature actually requires it.

## Development

Before making changes:

1. Inspect the existing code.
2. Make the smallest appropriate change.
3. Do not modify unrelated code.
4. Verify the production build.

Do not over-engineer.
