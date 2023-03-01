import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  requestAcceptFriend,
  requestRejectFriend,
} from '../../../apis/notices/friendRequestHandling';

type FriendNo = number;
type SenderNo = number;

type MutateParameter = [FriendNo, SenderNo];

const useAcceptFriend = () => {
  return useMutation<AxiosResponse<any, any>, AxiosError, MutateParameter>(
    (param: MutateParameter) => requestAcceptFriend(param[0], param[1]),
    {
      onSuccess: (result: any) => {
        alert('타입 3 친구 요청을 수락했습니다.');
        console.log('알림 타입 3 수락 성공', result);
      },
      onError: (error: any) => {
        console.log(error.response?.status);
        console.log('알림 타입 3 수락 오류', error);
      },
    },
  );
};

const useRejectFriend = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<any, any>, AxiosError, number[]>(
    (param: number[]) => requestRejectFriend(param[0], param[1]),
    {
      onSuccess: (result: any) => {
        alert('타입 3 친구 요청을 거절했습니다.');
        console.log('알림 타입 3 거절 성공', result);
      },
      onError: (error: any) => {
        console.log(error.response.status);
        console.log('알림 타입 3 거절 오류', error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(['notice']);
      },
    },
  );
};

export { useAcceptFriend, useRejectFriend };
