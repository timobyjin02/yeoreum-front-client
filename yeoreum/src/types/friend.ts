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

export type SentFriendsResponseType = {
  receiverUserDescription: string;
  receiverUserNickname: string;
  receiverUserNo: number | null;
  receiverUserProfileImage: string;
};

export type ReceivedFriendsResponseType = {
  senderUserDescription: string;
  senderUserNickname: string;
  senderUserNo: number | null;
  senderUserProfileImage: string;
};
