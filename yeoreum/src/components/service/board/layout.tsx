import styled from '@emotion/styled';
import React from 'react';
import Search from './search';

interface wrapperProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: wrapperProps) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Search />
      </Header>

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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3.25em 0 3em 0;
`;

const Title = styled.h2`
  font-weight: 550;
  font-size: 1.8em;
`;

export default Layout;
