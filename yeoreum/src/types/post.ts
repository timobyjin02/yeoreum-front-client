export interface PostType {
  no: number;
  userNo: number;
  nickname: string;
  title: string;
  description: string;
  location: string;
  meetingTime: string;
  isDone: boolean;
  male: number;
  female: number;
  hostUserNums: number[];
  hostNicknames: string[];
}

export interface BoardType {
  createdDate: string;
  description: string;
  hostNickname: string;
  hostUserNo: number;
  isDone: 0 | 1;
  isImpromptu: 0 | 1;
  location: string;
  meetingTime: string;
  no: number;
  recruitMale: number;
  recruitFemale: number;
  title: string;
}
