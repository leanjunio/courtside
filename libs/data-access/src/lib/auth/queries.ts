import { CreateUserDto, User } from '@courtside/entities';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { LoginUserDto } from '../users';
import { login, signup } from './requests';

export function useLogin(): UseMutationResult<
  { access_token: string },
  AxiosError,
  LoginUserDto
> {
  return useMutation((data) => login(data));
}

export function useSignup(): UseMutationResult<
  User,
  AxiosError,
  CreateUserDto
> {
  return useMutation((data) => signup(data));
}
