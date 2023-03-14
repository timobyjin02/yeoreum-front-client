import styled from '@emotion/styled';
import React from 'react';

interface PromiseeProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function PromiseModal({ setIsOpen }: PromiseeProps) {
  const promiseSubmitHandler = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Title>약속을 입력해주세요</Title>
      <InputBox>
        <PromiseTitle>장소</PromiseTitle>
        <PromiseInput />
      </InputBox>
      <InputBox>
        <PromiseTitle>시간</PromiseTitle>
        <PromiseInput />
      </InputBox>
      <SubmitButton onClick={promiseSubmitHandler}>제출</SubmitButton>
    </Container>
  );
}

export default PromiseModal;

const Container = styled.div`
  width: 450px;
  padding: 14px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const InputBox = styled.div``;

const PromiseInput = styled.input`
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 0 10px;
  font-size: 1rem;
  background-color: #f3f4f5;
  border: none;
  border-radius: 10px;
  outline: none;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.main};
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const PromiseTitle = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: default;
`;

const SubmitButton = styled.button`
  float: right;
  width: 70px;
  height: 40px;
  margin-bottom: 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.font.white};
  background: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;
