import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import {
  requestGetUserProfile,
  requestPatchEditProfile,
  requestPutEditProfileImage,
} from '../../apis/users';
import { getToken } from '../../utils/user';

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

const useProfileImageEditMutation = () => {
  return useMutation((file: Blob) => requestPutEditProfileImage(file), {
    onError: (error: any) => {
      console.log('프로필 수정 에러', error);
    },
    onSuccess: data => {
      console.log('프로필 수정 성공', data);
      const newAccessToken = data.data.response.accessToken;
      localStorage.setItem('token', newAccessToken);
      console.log(getToken());
    },
  });
};

export {
  useUserProfileQuery,
  useProfileEditMutation,
  useProfileImageEditMutation,
};
