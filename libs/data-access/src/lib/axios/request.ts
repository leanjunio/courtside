import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import axios from 'axios';

export function createBaseAxiosRequests<R, Data = unknown>(url: string) {
  const axiosInstance = axios.create({
    baseURL: getEnvironmentVariables('NX_API_SERVER'),
  });

  const requests = {
    get: () => axiosInstance.get<R>(url),
    post: (data?: Data) => axiosInstance.post<R>(url, data),
    put: (data?: Data) => axiosInstance.put<R>(url, data),
    patch: (data?: Data) => axiosInstance.patch<R>(url, data),
    delete: () => axiosInstance.get<R>(url),
  };

  return requests;
}
