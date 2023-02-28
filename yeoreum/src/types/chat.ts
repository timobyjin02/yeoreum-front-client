export interface ChatLogType {
  chatLogNo: number;
  userNo: number;
  message: string;
  sendedTime: string;
}

interface User {
  userNo: number;
  nickname: string;
  profileImage: string;
}

export interface ChatRoom {
  roomName: string;
  chatRoomNo: number;
  users: User[];
}
