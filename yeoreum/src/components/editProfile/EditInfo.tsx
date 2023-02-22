import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { remote, requestPatchEditProfile } from '../../apis/users';
import { UserProfileResponseType } from '../../types/user';
import MajorChange from './MajorChange';
import { getToken } from '../../utils/user';

interface ProfileEditProps {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<UserProfileResponseType>>;
}
function EditInfo({ userData, setUserData }: ProfileEditProps) {
  const token = getToken() as string;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickChange = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    const res = await requestPatchEditProfile(
      userData.nickname,
      userData.description,
      token,
    );

    const newToken = res.accessToken;

    localStorage.setItem('token', newToken);

    window.location.reload();
  };

  return (
    <ProfileInfoWrapper>
      <ProfileInfoes>
        <InfoTitle>닉네임</InfoTitle>
        <InfoInput
          name="nickname"
          onChange={handleInputChange}
          value={userData.nickname}
        />
        <InfoTitle>이메일</InfoTitle>
        <InfoInput
          name="email"
          onChange={handleInputChange}
          value={userData.email}
          className={'readOnly'}
          readOnly
        />
        <InfoTitle>학과</InfoTitle>
        <MajorChange userData={userData} />
        <InfoTitle>소개</InfoTitle>
        <InfoDescription
          name="description"
          onChange={handleInputChange}
          value={userData.description}
        />
      </ProfileInfoes>
      <EditButton onClick={handleClickChange}>수정</EditButton>
    </ProfileInfoWrapper>
  );
}

export default EditInfo;

const ProfileInfoWrapper = styled.div``;

const ProfileInfoes = styled.div``;

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
  &.readOnly {
    outline: none;
    color: ${({ theme }) => theme.palette.font.disable};
  }
`;

const MajorWrapper = styled.div`
  display: flex;
`;

const MajorChangeButton = styled.button`
  width: 80px;
  height: 38px;
  border-radius: 8px;
  margin-left: 10px;
  color: ${({ theme }) => theme.palette.font.white};
  background: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;

const ImgEditInput = styled.input`
  display: none;
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
  height: 40px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.font.white};
  background: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;
