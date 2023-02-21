import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  requestAcceptFriend,
  requestRejectFriend,
} from '../../../apis/notices/friendRequestHandling';
import { OnError, OnSuccess } from '../../../types/mutation';

const useAcceptFriend = (
  friendNo: number,
  senderUserNo: number,
  onSuccess: OnSuccess,
  onError: OnError,
  token: string,
) => {
  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestAcceptFriend(friendNo as number, senderUserNo, token),
    { onSuccess, onError },
  );
};

const useRejectFriend = (
  friendNo: number,
  senderUserNo: number,
  onSuccess: OnSuccess,
  onError: OnError,
  token: string,
) => {
  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestRejectFriend(friendNo as number, senderUserNo, token),
    { onSuccess, onError },
  );
};

export { useAcceptFriend, useRejectFriend };
