import React, { useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { requestPutEditProfile } from '../../apis/users';

interface EditImageProps {
  fileImg: string;
  setFileImg: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

function ModalContent({ fileImg, setFileImg, onClose }: EditImageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImageClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;

    setFileImg(URL.createObjectURL(e.target.files[0]));

    requestPutEditProfile(e.target.files[0]);

    handleClose();
  };

  const handleClose = () => {
    onClose?.();
  };

  const handleDelete = () => {
    URL.revokeObjectURL(fileImg);
    setFileImg('');
    handleClose();
  };

  return (
    <UploadWrapper>
      <ProfileImgChange>프로필 사진 바꾸기</ProfileImgChange>
      <PhotoUpload>
        <ProfileImgEditBtn onClick={handleUploadImageClick}>
          사진 업로드
          <ImgEditInput
            type="file"
            ref={inputRef}
            onChange={handleUploadImage}
            accept={'image/*'}
          />
        </ProfileImgEditBtn>
      </PhotoUpload>
      <PhotoUpload>
        <PhotoDelete onClick={handleDelete}>현재 사진 삭제</PhotoDelete>
      </PhotoUpload>
      <PhotoUpload>
        <ModalCloseBtn onClick={handleClose}>취소</ModalCloseBtn>
      </PhotoUpload>
    </UploadWrapper>
  );
}

export default ModalContent;

const UploadWrapper = styled.div``;

const ProfileImgChange = styled.div`
  width: 450px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 150px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.grey};
`;

const PhotoUpload = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.5px solid #e5e5e5;
  &:last-of-type {
    border: none;
  }
`;

const ProfileImgEditBtn = styled.button`
  background: inherit;
  cursor: pointer;
`;

const ImgEditInput = styled.input`
  display: none;
`;

const PhotoDelete = styled.button`
  background: inherit;
  cursor: pointer;
`;

const ModalCloseBtn = styled.button`
  background: inherit;
  cursor: pointer;
`;
