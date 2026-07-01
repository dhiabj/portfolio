import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
  subject: z
    .string()
    .trim()
    .min(3, 'Subject must be at least 3 characters')
    .max(120, 'Subject must be under 120 characters'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
});
