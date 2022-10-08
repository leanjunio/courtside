import { User } from '@courtside/entities';
import { createBaseQueries } from '../react-query/base-queries';
import { userRequests } from './requests';

export const baseUserQueries = createBaseQueries<User>(['users'], userRequests);
