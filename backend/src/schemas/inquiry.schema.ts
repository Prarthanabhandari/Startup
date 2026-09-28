import { z } from 'zod';

export const createInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().max(50).optional().nullable(),
  company: z.string().max(100).optional().nullable(),
  projectType: z.string().min(2, 'Project type is required').optional(),
  project_type: z.string().min(2, 'Project type is required').optional(),
  budget: z.string().min(1, 'Budget tier is required'),
  message: z.string().min(5, 'Message must be at least 5 characters').max(5000),
}).refine((data) => data.projectType || data.project_type, {
  message: 'Project type is required',
  path: ['projectType'],
});

export const updateInquiryStatusSchema = z.object({
  status: z.enum(['new', 'in_review', 'contacted', 'archived'], {
    errorMap: () => ({ message: 'Status must be one of: new, in_review, contacted, archived' }),
  }),
});

export const inquiryQuerySchema = z.object({
  status: z.enum(['new', 'in_review', 'contacted', 'archived', 'all']).optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});
