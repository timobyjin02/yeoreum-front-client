import axios from 'axios';

const remote = axios.create();

export const RequestGetUserProfile = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const { data } = await remote.get(`/api/users/profile`, config);

  return data.response.userProfile;
};
