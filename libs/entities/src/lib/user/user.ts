import { z } from 'zod';

export const BaseUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export type BaseUserDto = z.infer<typeof BaseUserSchema>;

export const CreateUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
