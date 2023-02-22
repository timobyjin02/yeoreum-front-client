import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import {
  requestGetUserProfile,
  requestPatchEditProfile,
} from '../../apis/users';

const useUserProfileQuery = () => {
  return useQuery<any, AxiosError, any, ['userProfile']>(
    ['userProfile'],
    requestGetUserProfile,
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

const useProfileEditMutation = (nickname: string, description: string) => {
  const router = useRouter();

  return useMutation(() => requestPatchEditProfile(nickname, description), {
    onError: (error: any) => {
      console.log('프로필 수정 에러', error);
    },
    onSuccess: data => {
      console.log('프로필 수정 성공', data);
      const newAccessToken = data.data.response.user.accessToken;
      localStorage.setItem('token', newAccessToken);
      router.push('/mypage');
    },
  });
};

export { useUserProfileQuery, useProfileEditMutation };
