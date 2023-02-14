import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { BoardType } from '../../types/post';
import PostList from '../board/PostList';
import { requestGetUserBoards } from '../../apis/users';

function Lists() {
  const [actived, setActived] = useState(0);
  const [posts, setPosts] = useState<BoardType[]>([]);

  const tabs = [
    {
      id: 0,
      title: '내가 쓴 글',
      content: <PostList posts={posts} />,
    },
    {
      id: 1,
      title: '좋아요',
      // content: <PostList />,
    },
  ];

  useEffect(() => {
    (async () => {
      const userBoards = await requestGetUserBoards(1);

      setPosts(userBoards);
    })();
  }, []);

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
