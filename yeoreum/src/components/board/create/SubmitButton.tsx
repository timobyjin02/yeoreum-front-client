import styled from '@emotion/styled';
import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  content: string;
}

function SubmitButton({ onClick, content }: SubmitButtonProps) {
  return (
    <Container>
      <Button onClick={onClick}>{content}</Button>
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
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.palette.main};
  font-size: 16px;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;
