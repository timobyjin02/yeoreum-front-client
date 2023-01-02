import styled from '@emotion/styled';
import React from 'react';

interface SubmitButtonProps {
  content: string;
}

function SubmitButton({ content }: SubmitButtonProps) {
  return (
    <Container>
      <Button>{content}</Button>
    </Container>
  );
}

export default SubmitButton;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 40px;
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 12px 16px;
  background-color: #e86b66;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 10px;

  @media (max-width: 640px) {
    width: 50%;
  }
`;
