import { PostCreateData, ApplicationCreateData } from '../../types/post';
import { useInfiniteQuery, useQuery, useMutation } from '@tanstack/react-query';
import {
  RequestGetAllPostsOption,
  requestGetApplicationDetail,
  requestGetPostApplication,
  requestGetPostDetail,
  requestGetPosts,
  requestPostCreateApplication,
  requestPostCreatePost,
} from '../../apis/posts';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

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
      keepPreviousData: true,
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
  body: PostCreateData,
  onSuccess?: OnSuccess,
  onError?: OnError,
) => {
  return useMutation(() => requestPostCreatePost(body), {
    onSuccess,
    onError,
  });
};

const useCreateApplicationMutation = (
  boardNo: number,
  body: ApplicationCreateData,
  onSuccess: OnSuccess,
  onError: OnError,
) => {
  return useMutation(() => requestPostCreateApplication(boardNo, body), {
    onSuccess,
    onError,
  });
};

const usePostDetailQuery = (boardNo: number) => {
  const router = useRouter();
  return useQuery(['postDetail'], () => requestGetPostDetail(boardNo), {
    retry: 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
    onError: error => {
      console.log('해당 게시글이 없습니다.', error);
      // router.push('/404');
    },
  });
};

const useApplicationList = (boardNo: number) => {
  const router = useRouter();
  return useQuery(
    ['applicationList'],
    () => requestGetPostApplication(boardNo),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      onError: (error: any) => {
        console.log(error);
        // const errorData = error.response.data;
        // if (errorData.statusCode === 404) {
        //   router.push('/404');
        // }
      },
    },
  );
};

const useApplicationDetailQuery = (boardNo: number, teamNo: number) => {
  const router = useRouter();
  return useQuery(
    ['applicationDetail'],
    () => requestGetApplicationDetail(boardNo, teamNo),
    {
      retry: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
      onError: error => {
        console.log('해당 게시글이 없습니다.', error);
        // router.push('/404');
      },
    },
  );
};

export {
  usePostsInfiniteQuery,
  useCreatePostMutation,
  usePostDetailQuery,
  useCreateApplicationMutation,
  useApplicationList,
  useApplicationDetailQuery,
};
