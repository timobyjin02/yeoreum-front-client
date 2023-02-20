import axios from 'axios';

const remote = axios.create();

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

export const body = {};

const requestGetFriendsList = async (token: string) => {
  const { data } = await axios('/api/friends', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response.friends;
};

const requestGetSearchFriends = async (value: string) => {
  const { data } = await remote.get(`/api/friends/${value}`, config);
  return data.response;
};

const requestPostFriendApplication = async (receiverNo: number) => {
  const { data } = await remote.post(
    `/api/friends/requests/${receiverNo}`,
    { receiverNo },
    config,
  );
  return data.response;
};

export {
  requestGetFriendsList,
  requestGetSearchFriends,
  requestPostFriendApplication,
};
