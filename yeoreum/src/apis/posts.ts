import axios from 'axios';
import { ApplicationCreateData, PostCreateData } from '../types/post';
import tokenAxios from './config';

export interface RequestGetAllPostsOption {
  gender?: number | undefined;
  people?: number | undefined;
  isDone?: boolean | undefined;
  isImpromptu?: boolean | undefined;
}

const requestGetPosts = (
  pageParam: number,
  option: RequestGetAllPostsOption,
  token: string,
) => {
  const url = `/api/boards?${
    option.gender === undefined ? '' : `gender=${option.gender}&`
  }${option.people === undefined ? '' : `people=${option.people}&`}${
    option.isDone === undefined ? '' : `isDone=${option.isDone}&`
  }${
    option.isImpromptu === undefined ? '' : `isImpromptu=${option.isDone}&`
  }${`page=${pageParam}`}`;

  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const requestPostCreatePost = (body: PostCreateData) => {
  return tokenAxios.post('/boards', body);
};

const requestPostCreateApplication = (
  boardNo: number,
  body: ApplicationCreateData,
) => {
  return tokenAxios.post(`/boards/${boardNo}/join`, body);
};

const requestGetPostDetail = (boardNo: number) => {
  return tokenAxios(`/boards/${boardNo}`);
};

const requestGetPostApplication = (boardNo: number) => {
  return tokenAxios(`/boards/apply/${boardNo}?page=1`);
};

const requestGetApplicationDetail = (boardNo: number, teamNo: number) => {
  return tokenAxios(`/boards/apply/${boardNo}/${teamNo}`);
};

export {
  requestGetPosts,
  requestPostCreatePost,
  requestPostCreateApplication,
  requestGetPostDetail,
  requestGetPostApplication,
  requestGetApplicationDetail,
};
