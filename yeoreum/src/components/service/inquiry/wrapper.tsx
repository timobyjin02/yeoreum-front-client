import styled from '@emotion/styled';
import React from 'react';

interface wrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: wrapperProps) => {
  return (
    <Container>
      <Title>문의하기</Title>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 680px;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
  color: #555555;
`;

const Title = styled.h2`
  font-weight: 550;
  font-size: 1.8em;
`;

export default Wrapper;
