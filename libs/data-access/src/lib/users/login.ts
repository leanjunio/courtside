import { z } from 'zod';

export const LoginUserSchema = z.object({
  email: z
    .string({ required_error: 'Required' })
    .min(1, 'Required')
    .email('Please enter a valid email'),
  password: z.string({ required_error: 'Required' }).min(1, 'Required'),
});

export type LoginUserDto = z.infer<typeof LoginUserSchema>;
