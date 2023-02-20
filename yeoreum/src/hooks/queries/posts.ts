import { PostCreateData } from './../../types/post';
import { useInfiniteQuery, useQuery, useMutation } from '@tanstack/react-query';
import {
  RequestGetAllPostsOption,
  requestGetPosts,
  requestPostCreatePost,
} from '../../apis/posts';
import { AxiosError } from 'axios';

type PostsQueryKeyObject = RequestGetAllPostsOption;

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
  const fetchPostsData = ({ pageParam = 1 }) => {
    return requestGetPosts(pageParam, option, token);
  };

  return useInfiniteQuery<any, AxiosError, any, ['posts', PostsQueryKeyObject]>(
    ['posts', option],
    fetchPostsData,
    {
      getNextPageParam: (lastPage, pages) => {
        const boardPagenationData = lastPage.data.response.boardPagenation;
        const { page, totalPage } = boardPagenationData;

        if (page < totalPage) return pages.length + 1;
        return undefined;
      },
      // retry 기본값 3은 fetching 실패시 재요청을 3번까지 하는데요~
      // 때문에 error를 리턴하기까지 오래 걸려서 UX에 좋지 않은 영향을 줄 수 있어 1로 설정합니다~
      retry: 1,
      refetchOnWindowFocus: false,
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
