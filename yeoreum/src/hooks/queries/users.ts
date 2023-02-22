import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { requestGetUserData } from '../../apis/notices';
import { requestGetUserProfile } from '../../apis/users';

const useUserProfileQuery = () => {
  return useQuery<any, AxiosError, any, ['userProfile']>(
    ['userProfile'],
    requestGetUserProfile,
    {
      retry: 0,
    },
  );
};

export { useUserProfileQuery };
