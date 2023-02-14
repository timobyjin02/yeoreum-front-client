import React, { useState } from 'react';
import styled from '@emotion/styled';
import EditInfo from './EditInfo';
import Modal from '../common/Modal';
import ModalContent from './ModalContent';
import PostContainer from '../board/PostContainer';

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [fileImg, setFileImg] = useState('');

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <PostContainer>
      <Title>계정설정</Title>
      <ProfileContainer>
        <ProfileImgWrapper>
          <ProfileImg src={fileImg} />
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
        <EditInfo />
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

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  object-fit: cover;
  background-color: #aeaeae;
`;

const ProfileImgEditBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
