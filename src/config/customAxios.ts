import { store } from '@appStore/store';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { path } from 'ramda';

const getToken = (): string | null | undefined => {
  const state = store.getState();
  return path(['user', 'user', 'token'], state);
};

const publicPaths = [
  '/auth_check',
  '/auth/login/google',
  '/auth/login/google/callback',
  '/auth/register'
];
const baseURL = import.meta.env.DEV
  ? import.meta.env.VITE_LOCAL_API_URL
  : import.meta.env.VITE_PROD_API_URL;

const customAxios = axios.create({
  baseURL
});

customAxios.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
    const token = getToken();

    const isPublicPath = publicPaths.some((path: string) => {
      config.url?.startsWith(path);
    });

    if (token && !isPublicPath) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: any): Promise<any> => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (
    response: AxiosResponse<any, any>
  ): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
    return response;
  },
  (error: any): Promise<any> => {
    // if (error.response && error.response.status === 401) {
    //     window.location.href = '/auth/login';
    // }

    return Promise.reject(error);
  }
);

export default customAxios;
