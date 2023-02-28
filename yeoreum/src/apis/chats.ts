import axios from 'axios';
import { getToken } from '../utils/user';
import tokenAxios from './config';

const remote = axios.create();

const token = getToken();

export const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const requestPostChatRoomInvitation = (chatsRoomNo: number, userNo: number) => {
  return tokenAxios.post(`/chats/${chatsRoomNo}/invitation/${userNo}`, {
    chatsRoomNo,
    userNo,
  });
};

const requestGetCurrentChatLog = (chatsRoomNo: number) => {
  return tokenAxios.get(`/chats/${chatsRoomNo}/chat-log`);
};

export { requestPostChatRoomInvitation, requestGetCurrentChatLog };
