import tokenAxios from './config';

const requestGetNotices = () => {
  return tokenAxios.get('/notices');
};

const requestGetUserData = () => {
  return tokenAxios.get('/users/profile');
};

const requestPostLogin = () => {
  return tokenAxios.post(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
    email: `${process.env.NEXT_PUBLIC_ID}`,
    password: `${process.env.NEXT_PUBLIC_PASSWORD}`,
  });
};

const requestGetHasUnreadNotices = () => {
  return tokenAxios('/notices/unread');
};

const requestPatchReadNotice = (noticeNo: number) => {
  return tokenAxios.patch(`/notices/${noticeNo}`, {});
};

export {
  requestGetNotices,
  requestGetUserData,
  requestGetHasUnreadNotices,
  requestPatchReadNotice,
  requestPostLogin,
};
