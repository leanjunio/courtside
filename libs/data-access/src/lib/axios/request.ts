import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import axios, { AxiosRequestConfig } from 'axios';

type AxiosRequests<Response, Data = unknown> = {
  getAll: (url?: string) => Promise<Response[]>;
  get: (url?: string) => Promise<Response>;
  post: (data: Data) => Promise<Response>;
  put: (data: Data) => Promise<Response>;
  patch: (data: Data) => Promise<Response>;
  delete: (url?: string) => Promise<Response>;
};

export function createBaseAxiosRequests<R, Data = unknown>(
  url: string
): AxiosRequests<R, Data> {
  const config: AxiosRequestConfig = {
    url: getEnvironmentVariables('NX_API_SERVER') + url,
  };

  return {
    getAll: () => {
      return axios({ ...config, method: 'get' });
    },
    get: () => {
      return axios({ ...config, method: 'get' });
    },
    post: (data) => {
      return axios({ ...config, method: 'post', data });
    },
    put: (data) => {
      return axios({ ...config, method: 'put', data });
    },
    patch: (data) => {
      return axios({ ...config, method: 'patch', data });
    },
    delete: () => {
      return axios({ ...config, method: 'delete' });
    },
  };
}

export type BaseRequests<Entity> = {
  createOne: (data: Entity) => Promise<Entity>;
  updateOne: (data: Entity) => Promise<Entity>;
  replaceOne: (data: Entity) => Promise<Entity>;
  getOne: (id: string) => Promise<Entity>;
  getAll: () => Promise<Entity[]>;
  deleteOne: (id: string) => Promise<Entity>;
};
