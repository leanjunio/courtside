import {
  QueryKey,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { BaseRequests } from '../axios';

export type BaseQueries<Entity> = {
  useCreateOne: () => UseMutationResult<Entity, AxiosError, Entity>;
  useUpdateOne: () => UseMutationResult<Entity, AxiosError, Entity>;
  useReplaceOne: () => UseMutationResult<Entity, AxiosError, Entity>;
  useGetOne: (id: string) => UseQueryResult<Entity, AxiosError>;
  useGetAll: () => UseQueryResult<Entity[], AxiosError>;
};

export function createBaseQueries<Entity>(
  queryKey: QueryKey,
  requests: BaseRequests<Entity, Entity>
): BaseQueries<Entity> {
  return {
    useCreateOne: () => {
      return useMutation((data) => requests.createOne(data));
    },
    useUpdateOne: () => {
      return useMutation((data) => requests.updateOne(data));
    },
    useReplaceOne: () => {
      return useMutation((data) => requests.replaceOne(data));
    },
    useGetOne: (id: string) => {
      return useQuery([queryKey, id], () => requests.getOne(id));
    },
    useGetAll: () => {
      return useQuery([queryKey], () => requests.getAll());
    },
  };
}
