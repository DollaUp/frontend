import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/'
  // TODO: add token as a param here
});

export default instance;
