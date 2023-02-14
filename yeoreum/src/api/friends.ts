import axios from 'axios';

const remote = axios.create();

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

export const body = {};

const RequestGetSearchFriends = async (value: string) => {
  const { data } = await remote.get(`/api/friends/${value}`, config);
  return data.response;
};

const RequestPostFriendApplication = async (receiverNo: number) => {
  const { data } = await remote.post(
    `/api/friends/requests/${receiverNo}`,
    { receiverNo },
    config,
  );
  return data.response;
};

export { RequestGetSearchFriends, RequestPostFriendApplication };
