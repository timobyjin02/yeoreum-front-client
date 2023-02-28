export interface FriendListType {
  userNo: number;
  nickname: string;
  profileImage: string;
}

export type FriendResponseType = {
  friendUserNo: number;
  friendNickname: string;
  friendDescription: string;
  friendProfileImage: string;
};
