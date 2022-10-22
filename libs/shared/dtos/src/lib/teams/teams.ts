import { z } from 'zod';

export const createTeamSchema = z.object({
  name: z
    .string({ required_error: 'Team Name is required' })
    .min(1, 'Required'),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Required'),
});

export type CreateTeamDto = z.infer<typeof createTeamSchema>;
