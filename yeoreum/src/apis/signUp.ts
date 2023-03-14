import axios from 'axios';

const requestEmailVerification = async (email: String) => {
  const { data } = await axios.get(`/api/auth/email-code/${email}`);
  return data.response;
};

const verifyEmailCode = async (email: String, code: String) => {
  const { data } = await axios.post(`/api/auth/email`, {
    email,
    code,
  });
  return data.response;
};

const requestSignIn = async (email: string, password: string) => {
  const { data } = await axios.post(`api/auth/sign-in`, { email, password });
  return data.response;
};

const validateNickname = async (nickname: string) => {
  const { data } = await axios.get(`/api/users/valid-nicknames/${nickname}`);
  return data.response.isValidNickname;
};

const createProfile = async (
  userNo: string,
  nickname: string,
  gender: string,
  description: string,
  file: string,
) => {
  const formData = new FormData();
  formData.append('nickname', nickname);
  formData.append('gender', gender);
  formData.append('description', description);
  formData.append('file', file);

  const { data } = await axios.post(`/api/users/${userNo}/profile`, formData);
  return data.response;
};

const uploadCertification = async (
  userNo: string,
  file: string,
  major: string,
  isDenied?: boolean,
) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('major', major);

  const url = isDenied
    ? `/api/users/${userNo}/denied-certificate`
    : `/api/users/${userNo}/certificate`;
  const { data } = await axios.post(url, formData);
  return data.response;
};

export {
  requestEmailVerification,
  verifyEmailCode,
  requestSignIn,
  validateNickname,
  createProfile,
  uploadCertification,
};
