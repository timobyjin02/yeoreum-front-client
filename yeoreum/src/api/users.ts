import axios from 'axios';

const remote = axios.create();

const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

const RequestGetUserProfile = async () => {
  const { data } = await remote.get(`/api/users/profile`, config);

  return data.response.userProfile;
};

const RequestGetUsers = async (value: string) => {
  const { data } = await remote.get(`/api/users/?nickname=${value}`, config);

  return data.response.users;
};

export { RequestGetUserProfile, RequestGetUsers };
