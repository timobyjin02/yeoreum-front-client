export interface ChatInfo {
  username: string;
  chatRoomNo?: number;
  message: string;
}

export interface ChatLogType {
  chatLogNo: number;
  userNo: number;
  message: string;
  sendedTime: string;
}
