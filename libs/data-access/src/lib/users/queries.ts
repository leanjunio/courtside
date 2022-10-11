import { User } from '@courtside/entities';
import { createBaseQueries } from '../react-query/base-queries';
import { baseUserRequests } from './requests';

export const baseUserQueries = createBaseQueries<User>(
  ['users'],
  baseUserRequests
);
