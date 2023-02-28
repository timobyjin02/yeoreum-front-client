import axios from 'axios';

const requestGetNotices = (token: string) => {
  return axios.get('/api/notices', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const requestGetUserData = (token: string) => {
  return axios.get('/api/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const requestPostLogin = () => {
  return axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
    email: `${process.env.NEXT_PUBLIC_ID}`,
    password: `${process.env.NEXT_PUBLIC_PASSWORD}`,
  });
};

const requestGetHasUnreadNotices = (token: string) => {
  return axios('/api/notices/unread', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const requestPatchReadNotice = (noticeNo: number, token: string) => {
  return axios.patch(
    `/api/notices/${noticeNo}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export {
  requestGetNotices,
  requestGetUserData,
  requestGetHasUnreadNotices,
  requestPatchReadNotice,
  requestPostLogin,
};
