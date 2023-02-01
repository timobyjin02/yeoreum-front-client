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
  margin-bottom: 30px;
  padding-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  cursor: default;
`;

const ProfileContainer = styled.div`
  width: 100%;
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
  width: 100px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  border-radius: 10px;
  color: white;
  background: rgba(255, 43, 55, 0.8);

  cursor: pointer;

  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
`;
