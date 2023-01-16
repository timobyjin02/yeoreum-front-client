import React, { useCallback, useRef } from 'react';
import styled from '@emotion/styled';

interface Props {
  setFileImg: (state: string | ((prev: string) => string)) => void;
}

function ModalContent({ setFileImg }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  const onUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFileImg(URL.createObjectURL(e.target.files[0]));

    console.log(e.target.files[0].name);
  };

  return (
    <UploadWrapper>
      <PhotoUpload>프로필 사진 바꾸기</PhotoUpload>
      {/* <ProfileImgEditBtn onClick={onUploadImageButtonClick}>
        사진 업로드
        <ImgEditInput
          type="file"
          ref={inputRef}
          onChange={onUploadImage}
          accept={'image/*'}
        />
      </ProfileImgEditBtn> */}
    </UploadWrapper>
  );
}

export default ModalContent;

const UploadWrapper = styled.div``;

const PhotoUpload = styled.div``;

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

const ImgEditInput = styled.input`
  display: none;
`;
