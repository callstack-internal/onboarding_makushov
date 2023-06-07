import {weatherFetcher} from '../api/axiosInstance';
import useSWR from 'swr';

export const useWeather = (cityIds: number[]) => {
  const cityIdsString = cityIds.join(',');
  const {data, error, isLoading} = useSWR(
    `/group?id=${cityIdsString}&units=metric`,
    weatherFetcher,
  );

  return {data, isError: error, isLoading};
};
