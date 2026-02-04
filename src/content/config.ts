import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    timeline: z.string(),
    stack: z.array(z.string()).optional(),
    outcome: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    date: z.string(), // keep simple first; can switch to z.date() later
  }),
});

export const collections = {
  'case-studies': caseStudies,
};
