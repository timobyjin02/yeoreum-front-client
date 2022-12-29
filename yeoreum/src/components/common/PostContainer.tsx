import styled from '@emotion/styled';
import React from 'react';

interface ChildrenProps {
  children: React.ReactNode;
}

function PostContainer({ children }: ChildrenProps) {
  return <Container>{children}</Container>;
}

export default PostContainer;

const Container = styled.div`
  position: relative;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  min-height: calc(100vh - 80px);
  padding: 20px 20px 80px;
  @media (max-width: 640px) {
    width: auto;
  }
`;
