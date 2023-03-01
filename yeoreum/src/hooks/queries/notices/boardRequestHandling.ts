import { Param } from './../../../pages/apply/[postNo]/application/[applicationNo]';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { requestHandleBoard } from '../../../apis/notices/boardRequestHandling';

interface MutateVariables {
  boardNo: number;
  type: number;
  isAccepted: boolean;
}

const useHandleBoard = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<any, any>, AxiosError, MutateVariables>(
    (param: MutateVariables) =>
      requestHandleBoard(param.boardNo, param.type, param.isAccepted),
    {
      onSuccess: (result, variables) => {
        alert(
          `타입 ${variables.type} 여름 참가 초대를 ${
            variables.isAccepted ? '수락' : '거절'
          }했습니다.`,
        );
        console.log(
          `알림 타입 ${variables.type} ${
            variables.isAccepted ? '수락' : '거절'
          } 성공`,
          result,
        );
      },
      onError: (error, variables) => {
        console.log(
          `알림 타입 ${variables.type} ${
            variables.isAccepted ? '수락' : '거절'
          } 오류`,
          error,
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries(['notice']);
      },
    },
  );
};

export { useHandleBoard };
