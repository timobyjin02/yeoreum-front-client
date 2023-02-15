import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { RequestGetAllPostsOption, requestGetPosts } from '../../apis/posts';
import { AxiosError } from 'axios';

const usePostsInfiniteQuery = (
  option: RequestGetAllPostsOption,
  token: string,
) => {
  return useInfiniteQuery<any, AxiosError, any, ['posts']>(
    ['posts'],
    ({ pageParam = 1 }) => {
      return requestGetPosts(pageParam, option, token);
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const boardPagenationData = lastPage.data.response.boardPagenation;
        const { page, totalPage } = boardPagenationData;

        if (page < totalPage) return pages.length + 1;
        return undefined;
      },
    },
  );
};

export { usePostsInfiniteQuery };
