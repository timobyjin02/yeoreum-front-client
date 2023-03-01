import { PostCreateData, ApplicationCreateData } from '../../types/post';
import { useInfiniteQuery, useQuery, useMutation } from '@tanstack/react-query';
import {
  RequestGetAllPostsOption,
  requestGetApplicationDetail,
  requestGetPostApplication,
  requestGetPostDetail,
  requestGetPosts,
  requestPostCreateApplication,
  requestPostCreateChatRoom,
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

const usePostsInfiniteQuery = (option: RequestGetAllPostsOption) => {
  const fetchPostsData = ({ pageParam = 1 }) => {
    return requestGetPosts(pageParam, option);
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
  // const router = useRouter();
  return useQuery(
    ['postDetail', boardNo],
    () => requestGetPostDetail(boardNo),
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

const useApplicationList = (boardNo: number) => {
  // const router = useRouter();
  return useQuery(
    ['applicationList', boardNo],
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
  // const router = useRouter();
  return useQuery(
    ['applicationDetail', boardNo, teamNo],
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

const useCreateChatMutation = (boardNo: number, teamNo: number) => {
  const router = useRouter();
  return useMutation(() => requestPostCreateChatRoom(boardNo, teamNo), {
    onSuccess: (data: any) => {
      console.log('여름 신청 수락 성공', data);
      alert('여름 신청 수락 성공');
    },
    onError: (error: any) => {
      const errorData = error.response.data;
      console.log('여름 신청 수락 실패', error);
      if (errorData.statusCode === 404) {
        alert('이미 게시글의 여름이 성사된 상태입니다.');
        router.push('/mypage');
        return;
      }
      if (errorData.statusCode === 400) {
        alert(errorData.message);
        router.push('/chatting');
        return;
      }
      alert('알 수 없는 오류가 발생했습니다.');
      router.push('/');
    },
  });
};

export {
  usePostsInfiniteQuery,
  useCreatePostMutation,
  usePostDetailQuery,
  useCreateApplicationMutation,
  useApplicationList,
  useApplicationDetailQuery,
  useCreateChatMutation,
};
