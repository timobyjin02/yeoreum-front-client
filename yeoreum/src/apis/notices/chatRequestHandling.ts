import axios from 'axios';

export interface requestChatBody {
  senderNo: number;
  type: number;
}

const requestAcceptChat = (
  chatRoomNo: number,
  requestBody: requestChatBody,
  token: string,
) => {
  return axios.patch(`/api/chats/${chatRoomNo}/invitation`, requestBody, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const requestRejectChat = (
  chatRoomNo: number,
  requestBody: requestChatBody,
  token: string,
) => {
  return axios.post(`/api/chats/${chatRoomNo}/invitation`, requestBody, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { requestAcceptChat, requestRejectChat };
