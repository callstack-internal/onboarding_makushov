import {CityType} from '../api/types';

export type RootStackParamList = {
  Weather: undefined;
  Details: {city: CityType};
};
