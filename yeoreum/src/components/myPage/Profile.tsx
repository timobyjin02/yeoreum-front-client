import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { requestGetUserProfile } from '../../apis/users';
import { UserProfileResponseType } from '../../types/user';

function Profile() {
  const [userProfileInfo, setUserProfileInfo] =
    useState<UserProfileResponseType>({
      userNo: 0,
      email: '',
      nickname: '',
      major: '',
      gender: 0,
      description: '',
      profileImage: '',
      grade: '',
    });

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const userProfile = await requestGetUserProfile();

      // console.log(userProfile);
      setUserProfileInfo(userProfile);
    })();
  }, []);

  return (
    <Container>
      <UserProfile>
        <ProfileImg />
        <InfoWrapper>
          <Nickname>{userProfileInfo.nickname}</Nickname>
          <Description>{userProfileInfo.description}</Description>
        </InfoWrapper>
      </UserProfile>
      <EditButton
        onClick={() => {
          router.push({
            pathname: '/editProfile',
          });
        }}
      >
        계정설정
      </EditButton>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  height: 252px;
  padding: 16px 29px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.background.light};
`;

const UserProfile = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 25px;
  border-radius: 50px;
  background-color: #aeaeae;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 450px;
`;

const Nickname = styled.div`
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 18px;
  font-weight: 600;
  &::after {
    content: '님';
    margin-left: 3px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Description = styled.div`
  min-height: 130px;
  margin-top: 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.subHeadline};
`;

const EditButton = styled.button`
  float: right;
  width: 100px;
  height: 48px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.font.white};

  cursor: pointer;
`;
