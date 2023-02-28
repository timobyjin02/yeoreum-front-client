import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { requestGetSearchFriends } from '../../apis/friends';

const useSearchFriendsQuery = (value: string) => {
  return useQuery<any, AxiosError, any, string[]>(
    ['userProfile', value],
    () => requestGetSearchFriends(value),
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

export { useSearchFriendsQuery };
