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
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  };

  const { data } = await remote.get(`/api/users/profile`, config);

  return data.response.userProfile;
};
