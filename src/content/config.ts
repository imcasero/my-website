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

const experiences = defineCollection({
  schema: z.object({
    job: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    company: z.string(),
    website: z.string().url(),
    techs: z.array(z.string()),
  }),
});

export const collections = { projects, experiences };
