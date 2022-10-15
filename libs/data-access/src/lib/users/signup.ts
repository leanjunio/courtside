import { z } from 'zod';

export const signupSchema = z
  .object({
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    email: z.string().min(1, 'Required').email('Please enter a valid email'),
    password: z.string().min(1, 'Required'),
    passwordConfirmation: z.string().min(1, 'Required'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: `Passwords don't match`,
    path: ['confirm'],
  });

export type SignupDto = z.infer<typeof signupSchema>;
