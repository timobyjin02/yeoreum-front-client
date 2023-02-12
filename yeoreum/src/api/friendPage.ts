import axios from 'axios';

const remote = axios.create();

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

export const fetchSearchFriends = async (value: string) => {
  const { data } = await remote.get(`/api/friends/${value}`, config);
  return data.response;
};
