import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  fetchUserProfile,
  UserProfileResponseType,
} from '../../api/myPage/myPage';

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
      const userProfile = await fetchUserProfile();

      // console.log(userProfile);
      setUserProfileInfo(userProfile);
    })();
  }, []);

  return (
    <Wrapper>
      <Top>
        <ProfileImg />
        <Wrap>
          <Nickname>{userProfileInfo.nickname}</Nickname>
          <Description>{userProfileInfo.description}</Description>
        </Wrap>
      </Top>
      <Button
        onClick={() => {
          router.push({
            pathname: '/editProfile',
          });
        }}
      >
        계정설정
      </Button>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  height: 252px;
  padding: 16px 29px;
  border-radius: 10px;
  background-color: #f9fafb;
`;

const Top = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 25px;
  border-radius: 50px;
  background-color: #aeaeae;
`;

const Wrap = styled.div`
  position: relative;
  width: 450px;
`;

const Nickname = styled.div`
  font-size: 18px;
  &::after {
    content: '님';
    margin-left: 3px;
    font-size: 14px;
  }
`;

const Description = styled.div`
  min-height: 130px;
  margin-top: 15px;
  font-size: 14px;
`;

const Button = styled.button`
  float: right;
  width: 100px;
  height: 40px;
  margin-top: 15px;
  background: rgba(255, 43, 55, 0.8);
  border-radius: 13px;
  color: white;

  cursor: pointer;
`;
