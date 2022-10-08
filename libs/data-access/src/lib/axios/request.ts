import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import axios from 'axios';

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
  const axiosInstance = axios.create({
    baseURL: getEnvironmentVariables('NX_API_SERVER'),
    url,
  });

  return {
    getAll: (overwrittenUrl: string = url) => {
      return axiosInstance({ method: 'get', url: overwrittenUrl });
    },
    get: (overwrittenUrl: string = url) => {
      return axiosInstance({ method: 'get', url: overwrittenUrl });
    },
    post: (data) => {
      return axiosInstance({ method: 'post', data });
    },
    put: (data) => {
      return axiosInstance({ method: 'put', data });
    },
    patch: (data) => {
      return axiosInstance({ method: 'patch', data });
    },
    delete: (overwrittenUrl: string = url) => {
      return axiosInstance({ method: 'delete', url: overwrittenUrl });
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
