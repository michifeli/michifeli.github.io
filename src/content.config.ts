import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { writing };
