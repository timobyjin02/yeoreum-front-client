import tokenAxios from './config';

const requestGetFriendsList = () => {
  return tokenAxios('/friends');
};

const requestGetSearchFriends = (value: string) => {
  return tokenAxios.get(`/friends/${value}`);
};

const requestPostFriendApplication = (receiverNo: number) => {
  return tokenAxios.post(`/friends/requests/${receiverNo}`, {
    receiverNo,
  });
};

const requestGetFriendsValidate = (friendUserNo: number | undefined) => {
  return tokenAxios.get(`/friends/validate/${friendUserNo}`);
};

const requestGetNotFriendList = (nickname: string) => {
  return tokenAxios.get(`/friends/not-friends/${nickname}`);
};

const requestGetFriendsReceivedList = () => {
  return tokenAxios.get('/friends/requests/received');
};

const requestGetFriendsSentList = () => {
  return tokenAxios.get('/friends/requests/sent');
};

export {
  requestGetFriendsList,
  requestGetSearchFriends,
  requestPostFriendApplication,
  requestGetFriendsValidate,
  requestGetNotFriendList,
  requestGetFriendsReceivedList,
  requestGetFriendsSentList,
};
