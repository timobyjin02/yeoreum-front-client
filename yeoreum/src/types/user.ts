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

export interface UsersResponseType {
  userNo: number;
  nickname: string;
  profileImage: string;
}
