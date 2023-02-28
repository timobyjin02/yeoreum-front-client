import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  requestGetCurrentChatLog,
  requestPostChatRoomInvitation,
} from '../../apis/chats';

const useChatRoomInvitationMutation = (chatsRoomNo: number, userNo: number) => {
  return useMutation(() => requestPostChatRoomInvitation(chatsRoomNo, userNo), {
    onError: (error: any) => {
      console.log('채팅방 초대 실패', error);
    },
    onSuccess: data => {
      console.log('채팅방 초대 성공', data);
    },
  });
};

const useCurrentChatLog = (chatsRoomNo: number) => {
  return useQuery<
    AxiosResponse<any, AxiosError>,
    AxiosError,
    AxiosResponse<any, AxiosError>,
    [number]
  >([chatsRoomNo], () => requestGetCurrentChatLog(chatsRoomNo), {
    retry: 0,
    staleTime: 0,
  });
};

export { useChatRoomInvitationMutation, useCurrentChatLog };
