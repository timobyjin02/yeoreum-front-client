import axios from 'axios';
import { PostCreateData } from '../types/post';

export interface RequestGetAllPostsOption {
  gender?: string | undefined;
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

const requestPostCreatePost = (token: string, body: PostCreateData) => {
  return axios.post('/api/boards', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { requestGetPosts, requestPostCreatePost };
