import axios from 'axios';

const remote = axios.create();

export interface FriendsResponseType {
  friends: {
    friendUserNo: number;
    friendNickname: string;
    // description: string;
    friendProfileImage: string;
  }[];
}

export const fetchFriends = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const { data } = await remote.get(
    `${process.env.NEXT_PUBLIC_URL}/friends`,
    config,
  );

  console.log(data.response);

  return data.response;
};
