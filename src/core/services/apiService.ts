import axios, { AxiosRequestConfig } from 'axios';

const apiService = {
  get: (path: string, config?: AxiosRequestConfig) => axios.get(path, config),
};

export default apiService;
