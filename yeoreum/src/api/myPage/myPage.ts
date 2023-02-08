import axios from 'axios';

const remote = axios.create();

export interface UserProfileResponseType {
  userNo: number;
  email: string;
  nickname: string;
  major: string;
  gender: number;
  description: string;
  profileImage: string;
  grade: string;
}

export const fetchUserProfile = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const { data } = await remote.get(
    `${process.env.NEXT_PUBLIC_URL}/users/profile`,
    config,
  );

  // console.log(data);

  return data.response.userProfile;
};
