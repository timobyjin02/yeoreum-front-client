import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { requestHandleBoard } from '../../../apis/notices/boardRequestHandling';
import { OnError, OnSuccess } from '../../../types/mutation';

const useHandleBoard = (
  boardNo: number,
  type: number,
  isAccepted: boolean,
  onSuccess: OnSuccess,
  onError: OnError,
) => {
  const queryClient = useQueryClient();
  return useMutation<AxiosResponse<any, any>, unknown, void, unknown>(
    () => requestHandleBoard(boardNo, type, isAccepted),
    {
      onSuccess,
      onError,
      onSettled: () => {
        queryClient.invalidateQueries(['notice']);
      },
    },
  );
};

export { useHandleBoard };
