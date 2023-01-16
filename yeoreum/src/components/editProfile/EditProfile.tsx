import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import EditInfo from './EditInfo';

function EditProfile() {
  const [fileImg, setFileImg] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  // const onUploadImageButtonClick = () => {
  //   if (inputRef.current != null) {
  //     inputRef.current.focus();
  //   }
  // };

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
    <ProfileContainer>
      <ProfileImgWrapper>
        <ProfileImg src={fileImg} />
        <ProfileImgEditBtn onClick={onUploadImageButtonClick}>
          프로필 변경
          <ImgEditInput
            type="file"
            ref={inputRef}
            onChange={onUploadImage}
            accept={'image/*'}
          />
        </ProfileImgEditBtn>
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

const ImgEditInput = styled.input`
  display: none;
`;
