import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { RequestGetAllPostsOption, requestGetPosts } from '../../api/posts';
import { AxiosError } from 'axios';

const usePostsInfiniteQuery = (
  option: RequestGetAllPostsOption,
  token: string,
) => {
  return useInfiniteQuery<any, AxiosError, any, ['posts']>(
    ['posts'],
    ({ pageParam = 1 }) => {
      //   console.log(pageParam);
      return requestGetPosts(pageParam, option, token);
    },
    {
      getNextPageParam: (lastPage, pages) => {
        // 백에서 전체 페이지, 현재 페이지 인덱스 return 구현 시 추가 작업 요망
        return pages.length + 1;
      },
    },
  );
};

export { usePostsInfiniteQuery };
