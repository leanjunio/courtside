import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import axios from 'axios';
import { LoginUserDto } from '../users';

const baseAuthUrl = getEnvironmentVariables('NX_API_SERVER') + '/auth';

export function login(data: LoginUserDto) {
  return axios.post(`${baseAuthUrl}/login`, data).then((res) => res.data);
}
