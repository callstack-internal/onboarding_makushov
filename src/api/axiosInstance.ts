import axios from 'axios';
import {API_URL, API_KEY} from '@env';

export const weatherAPI = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  params: {
    appId: API_KEY,
  },
});
