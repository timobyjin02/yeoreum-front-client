import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  requestAcceptChat,
  requestChatBody,
  requestRejectChat,
} from '../../../apis/notices/chatRequestHandling';
import { OnError, OnSuccess } from '../../../types/mutation';

const useAcceptChat = (
  chatRoomNo: number,
  requestBody: requestChatBody,
  onSuccess: OnSuccess,
  onError: OnError,
) => {
  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestAcceptChat(chatRoomNo, requestBody),
    { onSuccess, onError },
  );
};

// 아직 백엔드에 채팅 초대 거절 api가 없음
const useRejectChat = (
  chatRoomNo: number,
  requestBody: requestChatBody,
  onSuccess: OnSuccess,
  onError: OnError,
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestRejectChat(chatRoomNo, requestBody),
    {
      onSuccess,
      onError,
      onSettled: () => {
        queryClient.invalidateQueries(['notice']);
      },
    },
  );
};

export { useAcceptChat, useRejectChat };
