import axios from 'axios';

const remote = axios.create();

const requestGetFriendsList = async (token: string) => {
  const { data } = await axios('/api/friends', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response.friends;
};

const requestGetSearchFriends = async (value: string, token: string) => {
  const { data } = await remote.get(`/api/friends/${value}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response;
};

const requestPostFriendApplication = async (
  receiverNo: number,
  token: string,
) => {
  const { data } = await remote.post(
    `/api/friends/requests/${receiverNo}`,
    { receiverNo },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.response;
};

export {
  requestGetFriendsList,
  requestGetSearchFriends,
  requestPostFriendApplication,
};
