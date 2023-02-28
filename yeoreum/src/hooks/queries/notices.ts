import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  requestGetNotices,
  requestGetHasUnreadNotices,
  requestPatchReadNotice,
} from '../../apis/notices';

const useNoticesQuery = () => {
  // <데이터 타입, Error 타입, select 타입, query-key 타입>
  return useQuery<any, AxiosError, any, ['notices']>(
    ['notices'],
    () => requestGetNotices(),
    { retry: 0, staleTime: 0, refetchOnWindowFocus: true },
  );
};

const useUnreadNoticesQuery = () => {
  return useQuery<any, AxiosError, any, ['unreadNotices']>(
    ['unreadNotices'],
    () => requestGetHasUnreadNotices(),
    { retry: 0, staleTime: 0, refetchOnWindowFocus: true },
  );
};

const useReadNoticeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((noticeNo: number) => requestPatchReadNotice(noticeNo), {
    // onMutate를 이용해 알림 읽음 처리 낙관적 업데이트
    onMutate: async (noticeNo: number) => {
      await queryClient.cancelQueries(['notices']);

      const previousData = queryClient.getQueryData([
        'notices',
      ]) as AxiosResponse;

      queryClient.setQueriesData(['notices'], (old: any) => ({
        ...old,
        data: {
          response: {
            notices: old.data.response.notices.map((notice: any) => {
              if (notice.noticeNo === noticeNo) {
                return {
                  ...notice,
                  isRead: 1,
                };
              }
              return notice;
            }),
          },
        },
      }));

      return { previousData };
    },
    onSuccess: (data: AxiosResponse) => {
      console.log('알림 읽음 처리 성공', data);
    },
    onError: (error: any, _data, context) => {
      console.log('알림 읽음 처리 실패', error);
      queryClient.setQueryData(['notices'], context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['notices']);
    },
  });
};

export { useNoticesQuery, useUnreadNoticesQuery, useReadNoticeMutation };
