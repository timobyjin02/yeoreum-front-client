import tokenAxios from '../config';

const requestAcceptFriend = (friendNo: number, senderUserNo: number) => {
  return tokenAxios.patch(`/friends/requests/${friendNo}/${senderUserNo}`, {});
};

const requestRejectFriend = (friendNo: number, senderUserNo: number) => {
  return tokenAxios.delete(`/friends/requests/${friendNo}/${senderUserNo}`);
};

export { requestAcceptFriend, requestRejectFriend };
