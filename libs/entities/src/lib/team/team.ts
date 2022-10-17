import { baseUserSchema } from '@courtside/shared/dtos';
import { z } from 'zod';

export const CreateTeamSchema = z.object({
  name: z.string(),
  creator: baseUserSchema.optional(),
  members: z.array(baseUserSchema).optional(),
});

export type CreateTeamDto = z.infer<typeof CreateTeamSchema>;
