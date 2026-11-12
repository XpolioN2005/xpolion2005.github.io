# DESIGN.md

## Purpose

Define the design constraints for the personal portfolio website.

The website is being designed from scratch.

The agent should implement the design specified by the owner and should not invent a separate visual identity.

---

## Priorities

1. Recruiter-friendly information hierarchy
2. Clear presentation of projects
3. Strong personal identity
4. Good readability
5. Visual polish
6. Performance

The design should be visually interesting without reducing clarity.

---

## Design Ownership

The owner decides:

- Layout
- Colors
- Typography
- Visual identity
- Navigation style
- Animations
- Component appearance
- Page composition

When something is not specified, choose a neutral implementation rather than establishing a strong design direction independently.

---

## Portfolio

The portfolio should clearly communicate:

- Who the developer is
- What they do
- Their strongest work
- Technologies used
- Relevant experience
- Where to find their work
- How to contact them

Projects should be more prominent than generic skill lists.

---

## Projects

Projects are a major part of the visual identity.

Use actual project material where available:

- Screenshots
- Gameplay
- Videos
- Diagrams
- Code
- Technical visualizations
- Development images

Do not fabricate project information, metrics, technologies, or achievements.

Different projects may use different layouts when appropriate.

---

## Blog

The blog is a first-class part of the website.

Prioritize:

- Readability
- Clear article hierarchy
- Good typography
- Code readability
- Images and media where useful
- Tags and metadata

Blog posts should feel like part of the same website as the portfolio.

---

## Visual Design

Do not default to common "developer portfolio" aesthetics.

Avoid automatically introducing:

- Cyberpunk styling
- Hacker terminals
- Fake system interfaces
- Neon gradients
- Excessive glassmorphism
- Generic SaaS layouts
- Excessive cards
- Decorative code
- Fake technical metrics

These are not prohibited if explicitly requested by the owner, but they should never be assumed.

---

## Typography

Prioritize hierarchy and readability.

Use distinct styles for:

- Headings
- Body text
- Metadata
- Navigation
- Project information
- Blog content

Do not use monospace or decorative fonts everywhere without a design reason.

---

## Animation

Animations should support the design rather than dominate it.

Prefer:

- Short transitions
- Hover states
- Navigation feedback
- Subtle page transitions

Avoid unnecessary continuous animation.

---

## Responsive Design

Design for:

- Desktop
- Tablet
- Mobile

Do not simply scale the desktop layout down.

Mobile layouts should be intentionally composed.

---

## Accessibility

Maintain:

- Semantic HTML
- Keyboard accessibility
- Visible focus states
- Good contrast
- Readable text sizes
- Useful image alt text

Do not sacrifice usability for visual effects.

---

## Performance

Keep the site lightweight.

Avoid unnecessary:

- JavaScript
- Hydration
- Large assets
- Client-side libraries
- Animation libraries

Prefer Astro's static-first architecture.

---

## General Rule

Do not make design decisions that belong to the owner.

Implement the supplied design accurately, keep the architecture flexible, and use neutral defaults when requirements are unspecified.

## Colors

```
--color-strong-cyan-50: #eaf9fb;
--color-strong-cyan-100: #d5f4f6;
--color-strong-cyan-200: #aae8ee;
--color-strong-cyan-300: #80dde5;
--color-strong-cyan-400: #56d1dc;
--color-strong-cyan-500: #2bc6d4;
--color-strong-cyan-600: #239ea9;
--color-strong-cyan-700: #1a777f;
--color-strong-cyan-800: #114f55;
--color-strong-cyan-900: #09282a;
--color-strong-cyan-950: #061c1e;

--color-charcoal-blue-50: #f0f1f5;
--color-charcoal-blue-100: #e1e3ea;
--color-charcoal-blue-200: #c2c7d6;
--color-charcoal-blue-300: #a4acc1;
--color-charcoal-blue-400: #8690ac;
--color-charcoal-blue-500: #677498;
--color-charcoal-blue-600: #535d79;
--color-charcoal-blue-700: #3e465b;
--color-charcoal-blue-800: #292e3d;
--color-charcoal-blue-900: #15171e;
--color-charcoal-blue-950: #0e1015;

--color-olive-leaf-50: #f4f6ee;
--color-olive-leaf-100: #e9eedd;
--color-olive-leaf-200: #d3ddbb;
--color-olive-leaf-300: #bdcc99;
--color-olive-leaf-400: #a6bb77;
--color-olive-leaf-500: #90aa55;
--color-olive-leaf-600: #738844;
--color-olive-leaf-700: #576633;
--color-olive-leaf-800: #3a4422;
--color-olive-leaf-900: #1d2211;
--color-olive-leaf-950: #14180c;

--color-tea-green-50: #f1ffe5;
--color-tea-green-100: #e2ffcc;
--color-tea-green-200: #c5ff99;
--color-tea-green-300: #a8ff66;
--color-tea-green-400: #8bff33;
--color-tea-green-500: #6eff00;
--color-tea-green-600: #58cc00;
--color-tea-green-700: #429900;
--color-tea-green-800: #2c6600;
--color-tea-green-900: #163300;
--color-tea-green-950: #0f2400;

```
