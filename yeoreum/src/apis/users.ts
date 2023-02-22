import axios from 'axios';
import tokenAxios from './config';

export const remote = axios.create();

const requestGetUserProfile = async (token: string) => {
  const { data } = await remote.get(`/api/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.response.userProfile;
};

const requestGetUsers = async (value: string, token: string) => {
  const { data } = await remote.get(`/api/users/?nickname=${value}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.response.users;
};

const requestGetUserBoards = async (type: number, token: string) => {
  const { data } = await remote.get(`/api/boards/my-page/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.response.users;
};

const requestPutEditProfileImage = async (file: Blob, token: string) => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await remote.put(`/api/users/profile-image`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.response;
};

const requestPatchEditProfile = async (
  nickname: string,
  description: string,
  token: string,
) => {
  const body = { nickname, description };
  const { data } = await remote.patch(`/api/users/profile`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data.response.user;
};

const requestPatchMajorUpload = (
  file: Blob | null,
  major: string,
  token: string,
) => {
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('major', major);
  remote.patch(`/api/users/major`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  requestGetUserProfile,
  requestGetUsers,
  requestGetUserBoards,
  requestPutEditProfileImage,
  requestPatchEditProfile,
  requestPatchMajorUpload,
};
