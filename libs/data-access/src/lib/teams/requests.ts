import { Team } from '@courtside/entities';
import { createBaseRequests } from '../axios';

export const baseTeamRequests = createBaseRequests<Team, Team>('/teams');
