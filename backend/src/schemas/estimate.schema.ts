import { z } from 'zod';

export const calculateEstimateSchema = z.object({
  projectType: z.enum(['business', 'ecommerce', 'saas', 'ai', 'mobile']),
  selectedFeatures: z.array(z.string()).default([]),
  timeline: z.enum(['standard', 'priority', 'express']).default('standard'),
  clientName: z.string().max(100).optional().nullable(),
  clientEmail: z.string().email().optional().nullable(),
});

export const saveEstimateSchema = calculateEstimateSchema.extend({
  clientName: z.string().min(2, 'Name is required to save estimate'),
  clientEmail: z.string().email('Valid email is required to save estimate'),
});
