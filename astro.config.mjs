// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://xpolion2005.github.io/",
	vite: {
		plugins: [tailwindcss(), mdx()],
	},
	integrations: [
		sitemap({
			// Strip trailing slashes so sitemap URLs match the canonical tags exactly.
			serialize(item) {
				item.url = item.url.replace(/\/$/, "");
				return item;
			},
		}),
	],
});
