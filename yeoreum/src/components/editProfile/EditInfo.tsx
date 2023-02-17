import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { requestGetUserProfile } from '../../apis/users';
import { UserProfileResponseType } from '../../types/user';

function EditInfo() {
  const [userData, setUserData] = useState<UserProfileResponseType>({
    userNo: 0,
    email: '',
    nickname: '',
    major: '',
    gender: 0,
    description: '',
    profileImage: '',
    grade: '',
  });
  // const [img, setImg] = useState(null);
  // const [nickname, setNickname] = useState('');
  // const [email, setEmail] = useState('');
  // const [major, setMajor] = useState('');
  // const [description, setDescription] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    (async () => {
      const resultUserData = await requestGetUserProfile();

      setUserData(resultUserData);
    })();
  }, []);

  return (
    <ProfileInfoWrapper>
      <ProfileInfoes>
        <InfoTitle>닉네임</InfoTitle>
        <InfoInput
          name="nickname"
          onChange={onChange}
          value={userData.nickname}
        />
        <InfoTitle>이메일</InfoTitle>
        <InfoInput name="email" onChange={onChange} value={userData.email} />
        <InfoTitle>학과</InfoTitle>
        <InfoInput name="major" onChange={onChange} value={userData.major} />
        <InfoTitle>소개</InfoTitle>
        <InfoDescription
          name="description"
          onChange={onChange}
          value={userData.description}
        />
      </ProfileInfoes>
      <EditButton>수정</EditButton>
    </ProfileInfoWrapper>
  );
}

export default EditInfo;

const ProfileInfoWrapper = styled.div``;

const ProfileInfoes = styled.form``;

const InfoTitle = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const InfoInput = styled.input`
  width: 340px;
  height: 34px;
  padding: 0 12px;
  margin-bottom: 18px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.background.light};
  border: none;
  border-radius: 5px;
  outline: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.dark};
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const InfoDescription = styled.textarea`
  display: flex;
  width: 340px;
  min-height: 100px;
  margin-bottom: 50px;
  padding: 12px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.background.light};
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
  line-height: 1.45;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.dark};
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const EditButton = styled.button`
  float: right;
  width: 70px;
  height: 44px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.font.white};
  background: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;
