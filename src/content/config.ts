import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    repository: z.string().url(),
    live_demo: z.string().url(),
  }),
});

export const collections = { projects };
