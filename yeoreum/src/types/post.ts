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
