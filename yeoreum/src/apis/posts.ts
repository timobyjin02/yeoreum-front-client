import axios from 'axios';

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

export { requestGetPosts };
