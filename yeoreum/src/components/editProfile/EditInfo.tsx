import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { remote, requestPatchEditProfile } from '../../apis/users';
import { UserProfileResponseType } from '../../types/user';
import MajorChange from './MajorChange';
import { getToken } from '../../utils/user';

import {
  useProfileEditMutation,
  useUserProfileQuery,
} from '../../hooks/queries/users';

interface ProfileEditProps {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<UserProfileResponseType>>;
}
function EditInfo({ userData, setUserData }: ProfileEditProps) {
  const [error, setError] = useState(false);
  const pattern = /^[a-zA-Z가-힣]{2,12}$/;

  const { refetch } = useUserProfileQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    if (name === 'description' && value.length > 255) {
      return;
    }

    if (!pattern.test(value)) {
      setError(true);
    } else {
      setError(false);
    }

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const { mutate: profileEditHandler } = useProfileEditMutation(
    userData?.nickname,
    userData?.description,
  );

  return (
    <ProfileInfoWrapper>
      <ProfileInfoes>
        <NicknameWrapper>
          <InfoTitle>닉네임</InfoTitle>
          <InfoInput
            name="nickname"
            onChange={handleInputChange}
            value={userData?.nickname || ''}
          />
          {error && (
            <Text>
              닉네임은 2 ~ 12자의 영문 및 한글, 특수문자는 사용할 수 없습니다
            </Text>
          )}
        </NicknameWrapper>
        <InfoTitle>이메일</InfoTitle>
        <InfoInput
          name="email"
          value={userData?.email || ''}
          className={'readOnly'}
          readOnly
        />
        <InfoTitle>학과</InfoTitle>
        <MajorChange userData={userData} />
        <InfoTitle>소개</InfoTitle>
        <InfoDescription
          name="description"
          onChange={handleInputChange}
          value={userData?.description || ''}
          maxLength={255}
        />
        <DescText>{userData?.description?.length || 0}/255</DescText>
      </ProfileInfoes>
      <EditButton onClick={() => profileEditHandler()}>수정</EditButton>
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

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  margin-top: -10px;
  margin-bottom: 20px;
  font-size: 11px;
  color: ${({ theme }) => theme.palette.main};
`;

const DescText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.font.subHeadline};
`;

const InfoDescription = styled.textarea`
  display: flex;
  width: 340px;
  min-height: 100px;
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
