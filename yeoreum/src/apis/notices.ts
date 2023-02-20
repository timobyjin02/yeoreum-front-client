import axios from 'axios';

const requestGetNotices = (token: string) => {
  return axios.get('/api/notices', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const requestGetUserData = async (token: string) => {
  const { data } = await axios.get('/api/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response;
};

const requestGetUnreadNotices = (token: string) => {
  return axios('/api/notices/unread', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { requestGetNotices, requestGetUserData, requestGetUnreadNotices };
