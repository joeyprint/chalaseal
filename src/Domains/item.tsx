import { axiosInstance } from '../Utils/axios';
import { useQuery } from '@tanstack/react-query';

type PaginationParams = {
  page: string | number;
  limit: string | number;
};

export const useItemDetails = (itemId: string) => {
  const res = useQuery({
    queryKey: ['item'],
    queryFn: async () => await axiosInstance.get(`/items/${itemId}`),
  });

  return res;
};

export const useItems = (pagination?: PaginationParams) => {
  const { page = 1, limit = 10 } = pagination ?? {};

  const res = useQuery({
    queryKey: ['items'],
    queryFn: async () =>
      await axiosInstance.get(`/items?page=${page}&limit=${limit}`),
  });

  return res;
};
