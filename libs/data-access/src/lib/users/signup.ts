import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

export type SignupDto = z.infer<typeof signupSchema>;
