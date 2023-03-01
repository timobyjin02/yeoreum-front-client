import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import {
  requestAcceptChat,
  requestChatBody,
  requestRejectChat,
} from '../../../apis/notices/chatRequestHandling';

type ChatRoomNo = number;

type MutateParameter = [ChatRoomNo, requestChatBody];

const useAcceptChat = () => {
  return useMutation<AxiosResponse<any, any>, AxiosError, MutateParameter>(
    (param: MutateParameter) => requestAcceptChat(param[0], param[1]),
    {
      onSuccess: (result, variables) => {
        alert(`타입 ${variables[1].type} 여름 채팅 초대를 수락했습니다.`);
        console.log(`알림 타입 ${variables[1].type} 수락 성공`, result);
      },
      onError: (error, variables) => {
        console.log(`알림 타입 ${variables[1].type} 수락 오류`, error);
      },
    },
  );
};

// 아직 백엔드에 채팅 초대 거절 api가 없음
const useRejectChat = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<any, any>, AxiosError, MutateParameter>(
    (param: MutateParameter) => requestRejectChat(param[0], param[1]),
    {
      onSuccess: (result, variables) => {
        alert(`타입 ${variables[1].type} 여름 채팅 초대를 거절했습니다.`);
        console.log(`알림 타입 ${variables[1].type} 거절 성공`, result);
      },
      onError: (error, variables) => {
        console.log(`알림 타입 ${variables[1].type} 거절 오류`, error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(['notice']);
      },
    },
  );
};

export { useAcceptChat, useRejectChat };
