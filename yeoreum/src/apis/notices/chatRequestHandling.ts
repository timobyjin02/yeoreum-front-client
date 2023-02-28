import tokenAxios from '../config';

export interface requestChatBody {
  senderNo: number;
  type: number;
}

const requestAcceptChat = (
  chatRoomNo: number,
  requestBody: requestChatBody,
) => {
  return tokenAxios.patch(`/chats/${chatRoomNo}/invitation`, requestBody);
};

const requestRejectChat = (
  chatRoomNo: number,
  requestBody: requestChatBody,
) => {
  return tokenAxios.post(`/chats/${chatRoomNo}/invitation`, requestBody);
};

export { requestAcceptChat, requestRejectChat };
