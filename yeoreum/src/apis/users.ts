import axios from 'axios';
import tokenAxios from './config';

export const remote = axios.create();

const requestGetUserProfile = () => {
  return tokenAxios.get(`/users/profile`);
};

const requestGetUsers = async (value: string, token: string) => {
  const { data } = await remote.get(`/users/?nickname=${value}`, {
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

const requestPutEditProfileImage = (file: Blob) => {
  const formData = new FormData();
  formData.append('file', file);
  return tokenAxios.put(`/users/profile-image`, formData);
};

const requestPatchEditProfile = (nickname: string, description: string) => {
  const body = { nickname, description };
  return tokenAxios.patch(`/users/profile`, body);
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
