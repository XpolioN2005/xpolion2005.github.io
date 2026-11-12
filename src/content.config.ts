import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Local path (optimized at build time), a root-relative public/ path
      // (e.g. "/img/project/cover.png"), or any remote image URL.
      cover: z
        .union([
          z.string().refine((s) => s.startsWith("/") || URL.canParse(s)),
          image(),
        ])
        .optional(),
      type: z.string(),
      technologies: z.array(z.string()).default([]),
      role: z.string().optional(),
      status: z.string(),
      links: z
        .array(z.object({ label: z.string(), url: z.string() }))
        .default([]),
      media: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
    }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string().optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects, work };
