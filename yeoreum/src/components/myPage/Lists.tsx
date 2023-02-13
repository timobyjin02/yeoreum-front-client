import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { fetchUserBoards } from '../../api/myPage';
import { BoardType } from '../../types/post';
import PostList from '../board/PostList';
import MyPosts from './MyPosts';

function Lists() {
  const [viewList, setViewList] = useState(0);
  const [boards, setBoards] = useState<BoardType[]>([]);

  const tabs = [
    {
      id: 0,
      title: '내가 쓴 글',
      content: <MyPosts boards={boards} />,
    },
    {
      id: 1,
      title: '좋아요',
      content: <PostList />,
    },
  ];

  useEffect(() => {
    (async () => {
      const userBoards = await fetchUserBoards(1);

      console.log(userBoards);
      setBoards(userBoards);
    })();
  }, []);

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
