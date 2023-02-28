import styled from '@emotion/styled';
import React, { useState } from 'react';
import { BoardType } from '../../types/post';
import PostList from '../board/PostList';
import { useBoardsMyPageQuery } from '../../hooks/queries/users';

function Lists() {
  const [actived, setActived] = useState(0);

  const { data } = useBoardsMyPageQuery(1);
  const { data: bookMark } = useBoardsMyPageQuery(4);

  const myBoards = data?.data.response.boards;
  const myBookMark = bookMark?.data.response.boards;

  const tabs = [
    {
      id: 0,
      title: '내가 쓴 글',
      content: <PostList posts={myBoards} />,
    },
    {
      id: 1,
      title: '좋아요',
      content: <PostList posts={myBookMark} />,
    },
  ];

  return (
    <Container>
      <TitleTab>
        {tabs.map(tab => (
          <Title
            key={tab.id}
            onClick={() => {
              setActived(tab.id);
            }}
            className={actived === tab.id ? 'active' : ''}
          >
            {tab.title}
          </Title>
        ))}
      </TitleTab>
      <ViewList>
        {tabs
          .filter(tab => actived === tab.id)
          .map(tab => (
            <div key={tab.id}>{tab.content}</div>
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
