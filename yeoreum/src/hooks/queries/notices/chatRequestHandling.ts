import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  requestAcceptChat,
  requestAcceptChatBody,
  requestRejectChat,
} from '../../../apis/notices/chatRequestHandling';
import { OnError, OnSuccess } from '../../../types/mutation';

const useAcceptChat = (
  chatRoomNo: number,
  requestBody: requestAcceptChatBody,
  onSuccess: OnSuccess,
  onError: OnError,
  token: string,
) => {
  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestAcceptChat(chatRoomNo, requestBody, token),
    { onSuccess, onError },
  );
};

// 아직 백엔드에 채팅 초대 거절 api가 없음
const useRejectChat = (
  chatRoomNo: number,
  requestBody: requestAcceptChatBody,
  onSuccess: OnSuccess,
  onError: OnError,
  token: string,
) => {
  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestRejectChat(chatRoomNo, requestBody, token),
    { onSuccess, onError },
  );
};

export { useAcceptChat, useRejectChat };
