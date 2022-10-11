import { User } from '@courtside/entities';
import { createBaseRequests } from '../axios';

export const baseUserRequests = createBaseRequests<User, User>('/users');
