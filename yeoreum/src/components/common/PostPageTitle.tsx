import styled from '@emotion/styled';
import React from 'react';

function PostPageTitle({ title }: { title: string }) {
  return <Title>{title}</Title>;
}

export default PostPageTitle;

const Title = styled.div`
  padding-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
`;
