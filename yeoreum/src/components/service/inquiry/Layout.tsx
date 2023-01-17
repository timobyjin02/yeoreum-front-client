import styled from '@emotion/styled';
import React from 'react';

interface Children {
  children: React.ReactNode;
}

const Layout = ({ children }: Children) => {
  return (
    <Container>
      <Title>문의하기</Title>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 680px;
  height: 100%;
  flex-direction: column;
  padding: 1em;
  margin: 0 auto;
  color: #555555;
`;

const Title = styled.h2`
  margin: 1em 0;
  font-weight: 550;
  font-size: 1.8em;
`;

export default Layout;
