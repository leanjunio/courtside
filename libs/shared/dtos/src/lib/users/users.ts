import { z } from 'zod';

export const baseUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export type BaseUserDto = z.infer<typeof baseUserSchema>;
