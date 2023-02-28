import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  requestGetFriendsValidate,
  requestGetNotFriendList,
  requestGetSearchFriends,
  requestPostFriendApplication,
} from '../../apis/friends';

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

const useNotFriendsQuery = (nickname: string) => {
  return useQuery<any, AxiosError, any, string[]>(
    ['notFriends', nickname],
    () => requestGetNotFriendList(nickname),
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

const usePostFriendApplicationMutation = (receiverNo: number) => {
  return useMutation(() => requestPostFriendApplication(receiverNo), {
    onError: (error: any) => {
      console.log('친구 신청 에러', error);
    },
    onSuccess: data => {
      console.log('프로필 수정 성공', data);
    },
  });
};

const useFriendsValidateQuery = (friendUserNo: number) => {
  return useQuery<any, AxiosError, any, any[]>(
    ['userProfile', friendUserNo],
    () => requestGetFriendsValidate(friendUserNo),
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

export {
  useSearchFriendsQuery,
  usePostFriendApplicationMutation,
  useFriendsValidateQuery,
  useNotFriendsQuery,
};
