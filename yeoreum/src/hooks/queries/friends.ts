import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  requestGetFriendsList,
  requestGetFriendsReceivedList,
  requestGetFriendsSentList,
  requestGetFriendsValidate,
  requestGetNotFriendList,
  requestGetSearchFriends,
  requestPostFriendApplication,
} from '../../apis/friends';

const useFriendsQuery = () => {
  return useQuery<any, AxiosError, any, ['friends']>(
    ['friends'],
    requestGetFriendsList,
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

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
      alert(error.response.data.message);
    },
    onSuccess: data => {
      console.log('친구 신청 성공', data);
    },
  });
};

const useFriendsValidateQuery = (friendUserNo: number | undefined) => {
  return useQuery<any, AxiosError, any, any[]>(
    ['userProfile', friendUserNo],
    () => requestGetFriendsValidate(friendUserNo),
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

const useFriendsReceivedQuery = () => {
  return useQuery<any, AxiosError, any, ['friendsReceived']>(
    ['friendsReceived'],
    requestGetFriendsReceivedList,
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

const useFriendsSentQuery = () => {
  return useQuery<any, AxiosError, any, ['friendsSent']>(
    ['friendsSent'],
    requestGetFriendsSentList,
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

export {
  useFriendsQuery,
  useSearchFriendsQuery,
  usePostFriendApplicationMutation,
  useFriendsValidateQuery,
  useNotFriendsQuery,
  useFriendsReceivedQuery,
  useFriendsSentQuery,
};
