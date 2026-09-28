import { z } from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(2).max(255),
  slug: z.string().min(2).max(255).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with dashes'),
  category: z.enum(['saas', 'ai', 'mobile', 'ecommerce', 'fintech', 'luxury']),
  categoryName: z.string().min(2).max(120),
  description: z.string().min(10),
  result: z.string().min(2).max(255),
  techStack: z.array(z.string()).min(1),
  imageUrl: z.string().url(),
  featured: z.boolean().default(false),
  displayOrder: z.number().int().default(0),
});

export const updateProjectSchema = createProjectSchema.partial();
