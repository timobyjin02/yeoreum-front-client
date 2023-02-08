import styled from '@emotion/styled';
import React, { useState } from 'react';
import PostList from '../board/PostList';

function Lists() {
  const [viewList, setViewList] = useState(0);

  const tabs = [
    {
      id: 0,
      title: '내가 쓴 글',
      content: <PostList />,
    },
    {
      id: 1,
      title: '좋아요',
      content: '',
    },
  ];

  return (
    <Container>
      <TitleTab>
        {tabs.map(tab => (
          <Title
            key={tab.id}
            onClick={() => {
              setViewList(tab.id);
            }}
            className={viewList === tab.id ? 'active' : ''}
          >
            {tab.title}
          </Title>
        ))}
      </TitleTab>
      <ViewList>
        {tabs
          .filter(tab => viewList === tab.id)
          .map(tab => (
            <div>{tab.content}</div>
          ))}
      </ViewList>
    </Container>
  );
}

export default Lists;

const Container = styled.div``;

const TitleTab = styled.div`
  height: 60px;
  display: flex;
  margin-bottom: 30px;
  padding: 0 20px;
`;

const Title = styled.button`
  margin-right: 15px;
  font-size: 18px;
  border: none;
  color: ${({ theme }) => theme.palette.font.headline};
  background-color: inherit;
  cursor: pointer;

  &.active {
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.palette.main};
  }
`;

const ViewList = styled.div``;
