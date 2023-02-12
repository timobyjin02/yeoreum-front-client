import axios from 'axios';

const remote = axios.create();

export interface FriendsResponseType {
  friends: {
    friendUserNo: number;
    friendNickname: string;
    friendDescription: string;
    friendProfileImage: string;
  }[];
}

const config = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
};

export const fetchFriends = async () => {
  const { data } = await remote.get(`/api/friends`, config);

  return data.response;
};

export type FriendsSearchResponseType = {
  friendUserNo: number;
  friendNickname: string;
  friendDescription: string;
  friendProfileImage: string;
}[];
// export interface FriendsSearchResponseType {
//   searchResult: ;
// }

export const fetchSearchFriends = async (value: string) => {
  console.log('검색어', value);

  const { data } = await remote.get(`/api/friends/${value}`, config);
  return data.response;
};
