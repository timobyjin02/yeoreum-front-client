import { PostCreateData } from './../../types/post';
import { useInfiniteQuery, useQuery, useMutation } from '@tanstack/react-query';
import {
  RequestGetAllPostsOption,
  requestGetPosts,
  requestPostCreatePost,
} from '../../apis/posts';
import { AxiosError } from 'axios';

type OnSuccess =
  | ((data: unknown, variables: void, context: unknown) => unknown)
  | undefined;
type OnError =
  | ((error: any, variables: void, context: unknown) => unknown)
  | undefined;

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

const useCreatePostMutation = (
  token: string,
  body: PostCreateData,
  onSuccess?: OnSuccess,
  onError?: OnError,
) => {
  return useMutation(() => requestPostCreatePost(token, body), {
    onSuccess,
    onError,
  });
};

export { usePostsInfiniteQuery, useCreatePostMutation };
