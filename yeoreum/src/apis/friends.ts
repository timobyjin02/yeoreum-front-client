import tokenAxios from './config';

const requestGetFriendsList = async () => {
  const { data } = await tokenAxios('/friends');
  return data.response.friends;
};

const requestGetSearchFriends = async (value: string) => {
  const { data } = await tokenAxios.get(`/friends/${value}`);
  return data.response;
};

const requestPostFriendApplication = async (receiverNo: number) => {
  const { data } = await tokenAxios.post(`/friends/requests/${receiverNo}`, {
    receiverNo,
  });
  return data.response;
};

export {
  requestGetFriendsList,
  requestGetSearchFriends,
  requestPostFriendApplication,
};
