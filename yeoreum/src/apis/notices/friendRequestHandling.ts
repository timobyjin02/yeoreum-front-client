import axios from 'axios';

const requestAcceptFriend = (
  friendNo: number,
  senderUserNo: number,
  token: string,
) => {
  return axios.patch(
    `/api/friends/requests/${friendNo}/${senderUserNo}`,
    {},
    { headers: { Authorization: `Bearer ${token}` } },
  );
};

const requestRejectFriend = (
  friendNo: number,
  senderUserNo: number,
  token: string,
) => {
  return axios.delete(`/api/friends/requests/${friendNo}/${senderUserNo}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export { requestAcceptFriend, requestRejectFriend };
