import axios from 'axios';
import {convertToCity} from '../utils/cityConvertor';
import {API_URL, API_KEY} from '@env';
import {OpenWeatherCityType} from './types';

export const weatherAPI = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  params: {
    appid: API_KEY,
  },
});

export const weatherFetcher = (url: string) =>
  weatherAPI
    .get(url)
    .then(res =>
      res.data.list.map((city: OpenWeatherCityType) => convertToCity(city)),
    );
