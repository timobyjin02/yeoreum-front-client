import React from 'react';
import styled from '@emotion/styled';

function EditInfo() {
  return (
    <ProfileInfoWrapper>
      <ProfileInfoes>
        <InfoTitle>닉네임</InfoTitle>
        <InfoInput />
        <InfoTitle>이메일</InfoTitle>
        <InfoInput />
        <InfoTitle>학과</InfoTitle>
        <InfoInput />
        <InfoTitle>소개</InfoTitle>
        <InfoDescription></InfoDescription>
      </ProfileInfoes>
      <Btn>수정</Btn>
    </ProfileInfoWrapper>
  );
}

export default EditInfo;

const ProfileInfoWrapper = styled.div``;

const ProfileInfoes = styled.div``;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #b7bcc4;
`;

const InfoInput = styled.input`
  width: 340px;
  height: 30px;
  margin-bottom: 15px;
  padding-left: 5px;
  /* input:focus {
    outline: 2px solid #d50000;
  } */
  border-bottom: 1px solid #d9d9d9;
  &:focus {
    outline: none;
  }
`;

const InfoDescription = styled.textarea`
  width: 340px;
  height: 100px;
  margin-bottom: 50px;
  border-bottom: 1px solid #d9d9d9;
`;

const Btn = styled.button`
  width: 60px;
  height: 30px;
  float: right;
  border-radius: 10px;
  color: white;
  background: rgba(255, 43, 55, 0.8);
`;
