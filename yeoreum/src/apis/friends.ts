import tokenAxios from './config';

const requestGetFriendsList = async () => {
  const { data } = await tokenAxios('/friends');
  return data.response.friends;
};

const requestGetSearchFriends = (value: string) => {
  return tokenAxios.get(`/friends/${value}`);
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
