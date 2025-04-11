// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({ 
    loader: glob({pattern: "*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tagline: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }), 
        featured: z.boolean().optional(),
    })
     });
const caseStudies = defineCollection({ 
    loader: glob({pattern: "*.md", base: "./src/content/case-studies" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tagline: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        problem: z.string(),
        aboutOrg: z.string(),
        solution: z.string(),
        organization: z.array(z.string()),
        role: z.array(z.string()),
        team: z.array(z.string()),
        tools: z.array(z.string()),
        featured: z.boolean().optional(),
    })
     });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, caseStudies };