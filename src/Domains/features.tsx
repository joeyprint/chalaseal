import { axiosInstance } from '../Utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useFeaturedItems = () => {
  const res = useQuery({
    queryKey: ['items'],
    queryFn: async () => await axiosInstance.get('/items/featured'),
  });

  return res;
};
