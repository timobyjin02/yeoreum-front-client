import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import EditInfo from './EditInfo';
import Modal from '../common/Modal';
import ModalContent from './ModalContent';
import PostContainer from '../board/PostContainer';
import { requestGetUserProfile } from '../../apis/users';
import { UserProfileResponseType } from '../../types/user';
import ProfileImage from '../common/ProfileImage';

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [fileImg, setFileImg] = useState('');
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

  const onClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    (async () => {
      const resultUserData = await requestGetUserProfile();

      setUserData(resultUserData);
      setFileImg(resultUserData.profileImage);
    })();
  }, []);

  return (
    <PostContainer>
      <Title>계정설정</Title>
      <ProfileContainer>
        <ProfileImgWrapper>
          <ProfileImage src={fileImg} size={70} />
          <ProfileImgEditBtn onClick={onClick}>프로필 변경</ProfileImgEditBtn>
          {isOpen && (
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <ModalContent
                onClose={() => {
                  setIsOpen(false);
                }}
                fileImg={fileImg}
                setFileImg={setFileImg}
              />
            </Modal>
          )}
        </ProfileImgWrapper>
        <EditInfo userData={userData} setUserData={setUserData} />
      </ProfileContainer>
    </PostContainer>
  );
}

export default EditProfile;

const Title = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};

  cursor: default;
  @media (max-width: 640px) {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImgWrapper = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    margin: 0;
  }
`;

const ProfileImgEditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 48px;
  margin-top: 18px;
  border-radius: 8px;
  background: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.font.white};

  cursor: pointer;

  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
`;
