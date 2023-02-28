import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import {
  requestGetUserBoards,
  requestGetUserProfile,
  requestPatchEditProfile,
  requestPatchMajorUpload,
  requestPutEditProfileImage,
} from '../../apis/users';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/modules/login';
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
  const dispatch = useAppDispatch();
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
      dispatch(loginSuccess(jwtDecode(getToken() as string)));
    },
  });
};

const useProfileImageEditMutation = () => {
  const dispatch = useAppDispatch();

  return useMutation((file: Blob) => requestPutEditProfileImage(file), {
    onError: (error: any) => {
      console.log('프로필 수정 에러', error);
    },
    onSuccess: data => {
      console.log('프로필 수정 성공', data);
      const newAccessToken = data.data.response.accessToken;
      localStorage.setItem('token', newAccessToken);
      dispatch(loginSuccess(jwtDecode(getToken() as string)));
    },
  });
};

const useMajorUploadMutation = () => {
  return useMutation<AxiosResponse<any, any>, any, [Blob | null, string]>(
    params => requestPatchMajorUpload(params[0], params[1]),
    {
      onError: (error: any) => {
        console.log('학과 수정 에러', error);
        alert(error.response.data.message);
      },
      onSuccess: data => {
        console.log('학과 수정 성공', data);
        alert('제출 되었습니다');
      },
    },
  );
};

const useBoardsMyPageQuery = (type: number) => {
  return useQuery<any, AxiosError, any, any[]>(
    ['boardsMyPage', type],
    () => requestGetUserBoards(type),
    {
      retry: 0,
      staleTime: 0,
    },
  );
};

export {
  useUserProfileQuery,
  useProfileEditMutation,
  useProfileImageEditMutation,
  useMajorUploadMutation,
  useBoardsMyPageQuery,
};
