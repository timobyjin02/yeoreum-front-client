import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { requestPostLogin } from '../../apis/notices';

type OnSuccess =
  | ((
      data: AxiosResponse<any, any>,
      variables: void,
      context: unknown,
    ) => unknown)
  | undefined;

type OnError =
  | ((error: any, variables: void, context: unknown) => unknown)
  | undefined;

const useLoginMutation = (onSuccess: OnSuccess, onError: OnError) => {
  return useMutation(requestPostLogin, {
    onSuccess,
    onError,
  });
};

export { useLoginMutation };
