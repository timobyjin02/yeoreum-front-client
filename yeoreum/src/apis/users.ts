import axios from 'axios';

const remote = axios.create();

const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

const requestGetUserProfile = async () => {
  const { data } = await remote.get(`/api/users/profile`, config);

  return data.response.userProfile;
};

const requestGetUsers = async (value: string) => {
  const { data } = await remote.get(`/api/users/?nickname=${value}`, config);

  return data.response.users;
};

const requestGetUserBoards = async (type: number) => {
  const { data } = await remote.get(`/api/boards/my-page/${type}`, config);

  return data.response.users;
};

export { requestGetUserProfile, requestGetUsers, requestGetUserBoards };
