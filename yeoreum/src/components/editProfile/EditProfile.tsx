import React from 'react';
import styled from '@emotion/styled';
import EditInfo from './EditInfo';

function EditProfile() {
  return (
    <ProfileContainer>
      <ProfileImgWrapper>
        <ProfileImg />
        <ProfileImgEditBtn>프로필편집</ProfileImgEditBtn>
      </ProfileImgWrapper>
      <EditInfo />
    </ProfileContainer>
  );
}

export default EditProfile;

const ProfileContainer = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: #4d463c; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const ProfileImgWrapper = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #aeaeae;
`;

const ProfileImgEditBtn = styled.div`
  width: 100px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  border-radius: 10px;
  color: white;
  background: rgba(255, 43, 55, 0.8);
`;
