import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import {
  requestGetMeetings,
  requestGetPromiseInquiry,
} from '../../apis/promise';

const useMeetingMutation = (
  location: string,
  time: Date,
  chatsRoomNo: number,
) => {
  return useMutation(() => requestGetMeetings(location, time, chatsRoomNo), {
    onError: (error: any) => {
      console.log('미팅 생성 실패', error);
    },
    onSuccess: data => {
      console.log('미팅 생성 성공', data);
    },
  });
};

const usePromiseInquiry = (chatsRoomNo: number) => {
  return useQuery<
    AxiosResponse<any, AxiosError>,
    AxiosError,
    AxiosResponse<any, AxiosError>,
    [number]
  >([chatsRoomNo], () => requestGetPromiseInquiry(chatsRoomNo), {
    retry: 0,
    staleTime: 0,
  });
};

export { useMeetingMutation, usePromiseInquiry };
