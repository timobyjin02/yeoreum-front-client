import React, { useState } from 'react';
import styled from '@emotion/styled';

function EditInfo() {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    department: '',
    email: '',
    description: '',
  });

  // const { nickname, department, description } = inputValue;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <ProfileInfoWrapper>
      <ProfileInfoes>
        <InfoTitle>닉네임</InfoTitle>
        <InfoInput name="nickname" onChange={onChange} />
        <InfoTitle>이메일</InfoTitle>
        <InfoInput name="email" onChange={onChange} />
        <InfoTitle>학과</InfoTitle>
        <InfoInput name="department" onChange={onChange} />
        <InfoTitle>소개</InfoTitle>
        <InfoDescription
          name="description"
          // onChange={onChange}
        ></InfoDescription>
      </ProfileInfoes>
      <Btn>수정</Btn>
    </ProfileInfoWrapper>
  );
}

export default EditInfo;

const ProfileInfoWrapper = styled.div``;

const ProfileInfoes = styled.form``;

const InfoTitle = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
`;

const InfoInput = styled.input`
  width: 340px;
  height: 34px;
  padding: 0 12px;
  margin-bottom: 18px;
  font-size: 1rem;
  background-color: #f3f4f5;
  border: none;
  border-radius: 5px;
  outline: none;
  &:focus {
    outline: 2px solid #ff515a;
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const InfoDescription = styled.textarea`
  display: flex;
  width: 340px;
  min-height: 100px;
  margin-bottom: 50px;
  padding: 12px;
  font-size: 1rem;
  background-color: #f3f4f5;
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
  line-height: 1.45;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  &:focus {
    outline: 2px solid #ff515a;
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const Btn = styled.button`
  width: 70px;
  height: 40px;
  float: right;
  border-radius: 10px;
  color: white;
  background: rgba(255, 43, 55, 0.8);

  cursor: pointer;
`;
