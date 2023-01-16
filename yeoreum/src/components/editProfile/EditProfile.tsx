import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import EditInfo from './EditInfo';
import Modal from './Modal';
import ModalPortal from '../modalPortal/ModalPortal';
import ModalContent from './ModalContent';

function EditProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [fileImg, setFileImg] = useState('');

  const onClick = () => {
    setIsOpen(true);
  };

  return (
    <ProfileContainer>
      <ProfileImgWrapper>
        <ProfileImg src={fileImg} />
        <ProfileImgEditBtn onClick={onClick}>프로필 변경</ProfileImgEditBtn>
        {isOpen && (
          <ModalPortal>
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <ModalContent setFileImg={setFileImg} />
            </Modal>
          </ModalPortal>
        )}
      </ProfileImgWrapper>
      <EditInfo />
    </ProfileContainer>
  );
}

export default EditProfile;

const ProfileContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
`;

const ProfileImgWrapper = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
