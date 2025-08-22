import { useQuery } from '@tanstack/react-query';
import api from '@/api/spotify';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['spotify-me'],
    queryFn: async () => {
      const { data } = await api.get('/me');

      return data;
    },
  });
};

export const useGetUsersTopItems = () => {
  return useQuery({
    queryKey: ['spotify-top-artists'],
    queryFn: async () => {
      const { data } = await api.get('/me/top/artists');

      return data;
    },
  });
};
