import { axiosInstance } from '../Utils/axios';
import { useQuery } from '@tanstack/react-query';

export const useItemDetails = (itemId: string) => {
  const res = useQuery({
    queryKey: ['item'],
    queryFn: async () => await axiosInstance.get(`/items/${itemId}`),
  });

  return res;
};
