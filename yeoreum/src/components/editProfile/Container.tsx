import React from 'react';
import styled from '@emotion/styled';

interface PropsChild {
  children: React.ReactNode;
}

function Container({ children }: PropsChild) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;

const Wrapper = styled.div`
  width: 680px;
  height: calc(100vh - 60px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    width: auto;
  }
`;
