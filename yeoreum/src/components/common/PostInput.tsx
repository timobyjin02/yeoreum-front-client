import styled from '@emotion/styled';
import React from 'react';

interface PostInputProps {
  title: string;
  textarea?: boolean;
}

function PostInput({ title, textarea }: PostInputProps) {
  return (
    <Container>
      <Subject>{title}</Subject>
      {textarea ? (
        <Textarea placeholder={`${title}을 입력해주세요.`} />
      ) : (
        <Input placeholder={`${title}을 입력해주세요.`} />
      )}
    </Container>
  );
}

export default PostInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Subject = styled.h4`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 600px;
  height: 48px;
  padding: 0 12px;
  font-size: 1rem;
  background-color: #f3f4f5;
  border: none;
  border-radius: 10px;
  outline: none;
  &:focus {
    outline: 2px solid #ff515a;
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const Textarea = styled.textarea`
  display: flex;
  width: 600px;
  min-height: 250px;
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
