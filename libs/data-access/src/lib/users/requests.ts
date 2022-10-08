import { User } from '@courtside/entities';
import { createBaseAxiosRequests } from '../axios';

const baseUserRequests = createBaseAxiosRequests<User, User>('/user');

export type UserRequests = {
  createOne: (data: User) => Promise<User>;
  updateOne: (data: User) => Promise<User>;
  replaceOne: (data: User) => Promise<User>;
  getOne: (id: string) => Promise<User>;
  getAll: () => Promise<User[]>;
  deleteOne: (id: string) => Promise<User>;
};

export const userRequests: UserRequests = {
  createOne: (data: User) => baseUserRequests.post(data),
  updateOne: (data: User) => baseUserRequests.put(data),
  replaceOne: (data: User) => baseUserRequests.patch(data),
  getOne: (id: string) => baseUserRequests.get(`/user/${id}`),
  getAll: () => baseUserRequests.getAll(`/user`),
  deleteOne: (id: string) => baseUserRequests.delete(`/user/${id}`),
};
