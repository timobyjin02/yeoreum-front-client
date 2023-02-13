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

export { requestGetNotices, requestGetUserData };

// (async () => {
//   const {
//     data: {
//       response: { userProfile: data },
//     },
//   } = await axios.get(`/api/users/profile`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   setUserData(data);
// })();
