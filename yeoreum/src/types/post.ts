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
  teamNo?: number;
}

export interface PostCreateData {
  [key: string]: any;
  title: string;
  description: string;
  isImpromptu?: boolean;
  location: string;
  meetingTime: string;
  recruitMale: number;
  recruitFemale: number;
  hostMembers: UserNo[];
}

export interface ApplicationCreateData {
  [key: string]: any;
  title: string;
  description: string;
  guests: UserNo[];
}

type UserNo = number;

export type MyBoardsResponseType = {
  no: number;
  hostUserNo: number;
  hostNickname: string;
  title: string;
  description: string;
  location: string;
  isDone: number;
  recruitMale: number;
  recruitFemale: number;
  isImpromptu: boolean;
  meetingTime: string;
  createdDate: string;
}[];
