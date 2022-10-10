import { Team } from '@courtside/entities';
import { createBaseAxiosRequests } from '../axios';

const baseTeamRequests = createBaseAxiosRequests<Team, Team>('/teams');

export type TeamRequests = {
  createOne: (data: Team) => Promise<Team>;
  updateOne: (data: Team) => Promise<Team>;
  replaceOne: (data: Team) => Promise<Team>;
  getOne: (id: string) => Promise<Team>;
  getAll: () => Promise<Team[]>;
  deleteOne: (id: string) => Promise<Team>;
};

export const teamRequests: TeamRequests = {
  createOne: (data: Team) => baseTeamRequests.post(data),
  updateOne: (data: Team) => baseTeamRequests.put(data),
  replaceOne: (data: Team) => baseTeamRequests.patch(data),
  getOne: (id: string) => baseTeamRequests.get(`/user/${id}`),
  getAll: () => baseTeamRequests.getAll(`/user`),
  deleteOne: (id: string) => baseTeamRequests.delete(`/user/${id}`),
};
