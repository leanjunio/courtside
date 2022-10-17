import { z } from 'zod';

export const baseUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export type BaseUserDto = z.infer<typeof baseUserSchema>;

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
