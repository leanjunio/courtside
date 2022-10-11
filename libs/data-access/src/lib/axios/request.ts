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
      return axios({ ...config, method: 'get' }).then((res) => res.data);
    },
    get: () => {
      return axios({ ...config, method: 'get' }).then((res) => res.data);
    },
    post: (data) => {
      return axios({ ...config, method: 'post', data }).then((res) => res.data);
    },
    put: (data) => {
      return axios({ ...config, method: 'put', data }).then((res) => res.data);
    },
    patch: (data) => {
      return axios({ ...config, method: 'patch', data }).then(
        (res) => res.data
      );
    },
    delete: () => {
      return axios({ ...config, method: 'delete' }).then((res) => res.data);
    },
  };
}

export type BaseRequests<Response, Entity> = {
  createOne: (data: Entity) => Promise<Response>;
  updateOne: (data: Entity) => Promise<Response>;
  replaceOne: (data: Entity) => Promise<Response>;
  getOne: (id: string) => Promise<Response>;
  getAll: () => Promise<Response[]>;
  deleteOne: (id: string) => Promise<Response>;
};

export function createBaseRequests<R, Data = unknown>(
  url: string
): BaseRequests<R, Data> {
  const baseRequests = createBaseAxiosRequests<R, Data>(url);

  return {
    createOne: (data: Data) => baseRequests.post(data),
    updateOne: (data: Data) => baseRequests.put(data),
    replaceOne: (data: Data) => baseRequests.patch(data),
    getOne: (id: string) => baseRequests.get(`/${url}/${id}`),
    getAll: () => baseRequests.getAll(`/${url}`),
    deleteOne: (id: string) => baseRequests.delete(`/${url}/${id}`),
  };
}
