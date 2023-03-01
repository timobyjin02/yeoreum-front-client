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
  max-width: 795px;
  height: calc(100vh - 60px);
  margin: auto;
  display: flex;
  border: 1px solid ${({ theme }) => theme.palette.line.grey};
  @media (max-width: 640px) {
    height: 100vh;
  }
`;
