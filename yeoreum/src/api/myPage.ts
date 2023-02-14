import axios from 'axios';

const remote = axios.create();

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

export const fetchUserProfile = async () => {
  const { data } = await remote.get(`/api/users/profile`, config);

  return data.response.userProfile;
};

export const fetchUserBoards = async (value: number) => {
  const { data } = await remote.get(`/api/boards/my-page/${value}`, config);

  return data.response.boards;
};
