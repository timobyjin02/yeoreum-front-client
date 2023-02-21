import { useMutation } from '@tanstack/react-query';
import { requestPostLogin } from '../../apis/notices';
import { OnError, OnSuccess } from '../../types/mutation';

const useLoginMutation = (onSuccess: OnSuccess, onError: OnError) => {
  return useMutation(requestPostLogin, {
    onSuccess,
    onError,
  });
};

export { useLoginMutation };
