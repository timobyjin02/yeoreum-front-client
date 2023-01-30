export interface AlarmType {
  noticeNo: number;
  type: number;
  senderUserNo: number;
  senderNickname: string;
  senderProfileImage: string;
  isRead: number;
  createdDate: string;
  chatRoomNo?: number;
  friendNo?: number;
  boardNo?: number;
}
