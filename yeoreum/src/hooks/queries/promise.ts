import { useMutation, useQuery } from '@tanstack/react-query';
import { requestGetMeetings } from '../../apis/promise';

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

export { useMeetingMutation };
