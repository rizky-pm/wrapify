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

export function useGetUsersTopItems(
  items: 'artists',
  limit?: number,
  time_range?: 'short_term' | 'medium_term' | 'long_term'
): ReturnType<typeof useQuery<UsersTopArtists>>;

export function useGetUsersTopItems(
  items: 'tracks',
  limit?: number,
  time_range?: 'short_term' | 'medium_term' | 'long_term'
): ReturnType<typeof useQuery<UsersTopTracks>>;

export function useGetUsersTopItems(
  items: 'artists' | 'tracks',
  limit: number = 20,
  time_range: 'short_term' | 'medium_term' | 'long_term' = 'long_term'
) {
  return useQuery({
    queryKey: ['spotify-top-items', items, limit, time_range],
    queryFn: async () => {
      const { data } = await api.get<UsersTopArtists | UsersTopTracks>(
        `/me/top/${items}?limit=${limit}&time_range=${time_range}`
      );
      return data;
    },
    enabled: !!items,
  });
}
