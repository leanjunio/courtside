import { Team } from '@courtside/entities';
import { createBaseQueries } from '../react-query/base-queries';
import { teamRequests } from './requests';

export const baseTeamQueries = createBaseQueries<Team>(['teams'], teamRequests);
