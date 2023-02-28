export interface FriendListType {
  userNo: number;
  nickname: string;
  profileImage: string;
}

export type FriendResponseType = {
  friendUserNo: number | null;
  friendNickname: string;
  friendDescription: string;
  friendProfileImage: string;
};
