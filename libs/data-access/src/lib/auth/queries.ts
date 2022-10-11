import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { LoginUserDto } from '../users';
import { login } from './requests';

export function useLogin(): UseMutationResult<
  { access_token: string },
  AxiosError,
  LoginUserDto
> {
  return useMutation((data) => login(data));
}
