import axios from 'axios';

const remote = axios.create();

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

const requestPostChatRoomInvitation = async (
  chatsRoomNo: number,
  userNo: number,
) => {
  const { data } = await remote.post(
    `/api/chats/${chatsRoomNo}/invitation/${userNo}`,
    { chatsRoomNo, userNo },
    config,
  );
  return data.response;
};

export { requestPostChatRoomInvitation };
