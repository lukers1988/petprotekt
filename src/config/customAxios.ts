import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const getToken = (): string => {
    return localStorage.getItem('token') || '';
};

const publicPaths =  ['/api/auth/login', '/api/auth/login/google', '/api/auth/login/google/callback', '/api/auth/register']

const customAxios = axios.create({
    baseURL: 'https://lukers1988.usermd.net:19408/api'
});

customAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
        const token: string = getToken()
        const isPublicPath = publicPaths.some((path: string) => {
            config.url?.startsWith(path);
        })

        if (token && !isPublicPath) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (error: any): Promise<any> => {
        return Promise.reject(error)
    }
);

customAxios.interceptors.response.use(
    (response: AxiosResponse<any, any>): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
        return response;
    },
    (error: any): Promise<any> => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/auth/login';
        }

        return Promise.reject(error);
    }
);

export default customAxios;