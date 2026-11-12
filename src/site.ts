/**
 * Central site configuration.
 *
 * Identity, about text, and contact details for the site.
 * Do not fabricate personal details. Leave a value empty and the UI
 * will show an empty state instead of inventing content.
 */
export const site = {
	/** Person name — hero, page titles. */
	name: "Darsan Ghosh",

	/** Site brand — mobile top bar and footer (keep exact casing). */
	brand: "XpolioN",

	/** One-line introduction under the hero name. */
	tagline:
		"Game developer and software developer focused on game technology, graphics, rendering, and low-level programming.",

	/** Short introduction paragraphs (homepage About section). */
	about: [
		"I'm Darsan Ghosh, known online as XpolioN, a developer and Computer Science student interested in game development, software, and computer graphics.",
		"I enjoy building things and exploring how software works beneath the abstractions, with a particular interest in game engines, rendering, performance, and low-level programming.",
	],

	/** Additional paragraphs for the About page. */
	aboutExtended: [
		"I am currently pursuing a B.Tech in Computer Science and Engineering at Techno India University, West Bengal. Alongside my studies, I spend much of my time working on personal projects and exploring areas of computer science outside the classroom.",
		"My journey into game development began with Python and Pygame. Working on small projects introduced me to programming fundamentals, game loops, input handling, and rendering. As I became more interested in the field, I moved to Godot and GDScript, which remain my primary tools for game development.",
		"My interests have since expanded toward the systems behind games. I enjoy learning about game engine architecture, rendering pipelines, graphics systems, and the relationship between high-level tools and the lower-level code that powers them. Performance, efficiency, and understanding how things work internally are recurring themes in the projects I work on.",
		"Beyond game development, I work across different areas of software development and use a range of programming languages depending on the project. These include Python, GDScript, C, C++, Rust, Java, C#, and JavaScript.",
		"I also build web and cross-platform applications using technologies such as React, Astro, and Flutter. This website is built from scratch with Astro and serves as a place to showcase my projects, document what I learn, and share my work.",
	],

	/** Interests and focus areas (About page). */
	interests: [
		"Game Development",
		"Game Engines",
		"Graphics Programming",
		"Rendering",
		"Low-Level Programming",
		"Game Technology",
		"Performance Engineering",
		"Procedural Systems",
	],

	/** Contact email. Leave empty to show an empty state. */
	email: "xpolion2005@gmail.com",

	/** Resume file path (e.g. "/resume.pdf" — place the file in public/). */
	resumeUrl: "/resume.pdf",

	/** Social profiles — fill in the hrefs; empty hrefs render as "#". */
	socials: [
		{ label: "GitHub", href: "https://github.com/XpolioN2005" },
		{ label: "itch.io", href: "https://xpolion.itch.io" },
		{ label: "LinkedIn", href: "https://www.linkedin.com/in/xpolion" },
		{ label: "Email", href: "mailto:xpolion2005@gmail.com" },
	],
};
