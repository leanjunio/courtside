import { z } from 'zod';

export const CreateUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
