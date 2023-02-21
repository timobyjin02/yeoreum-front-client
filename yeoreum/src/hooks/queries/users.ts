import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { requestGetUserData } from '../../apis/notices';

const useUserProfileQuery = (token: string) => {
  return useQuery<any, AxiosError, any, ['userProfile']>(
    ['userProfile'],
    () => requestGetUserData(token),
    {
      placeholderData: {
        data: {
          response: {
            userProfile: {
              profileImage: null,
            },
          },
        },
      },
      retry: 0,
      // refetchOnWindowFocus: false
    },
  );
};

export { useUserProfileQuery };
