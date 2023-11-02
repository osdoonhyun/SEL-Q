import axios from 'axios';

export const serverApi = axios.create({
  baseURL: process.env.PROD_BASE_URL,
  withCredentials: true,
});
