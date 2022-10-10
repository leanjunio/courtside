import { z } from 'zod';
import { BaseUserSchema } from '../user';

export const CreateTeamSchema = z.object({
  name: z.string(),
  creator: BaseUserSchema,
  members: z.array(BaseUserSchema).optional(),
});

export type CreateTeamDto = z.infer<typeof CreateTeamSchema>;
