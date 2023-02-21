import axios from 'axios';

export interface requestAcceptChatBody {
  senderNo: number;
  receiverNo: number;
  type: number;
}

const requestAcceptChat = (
  chatRoomNo: number,
  requestBody: requestAcceptChatBody,
  token: string,
) => {
  return axios.patch(`/api/chats/${chatRoomNo}/invitation`, requestBody, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// 아직 백엔드에 채팅 초대 거절 api가 없음
const requestRejectChat = (
  chatRoomNo: number,
  requestBody: requestAcceptChatBody,
  token: string,
) => {
  return axios.delete(`/api/chats/${chatRoomNo}/invitation`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { requestAcceptChat, requestRejectChat };
