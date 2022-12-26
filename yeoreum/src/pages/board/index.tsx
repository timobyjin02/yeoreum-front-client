import styled from '@emotion/styled';
import React from 'react';
import Filter from '../../components/board/Filter';
import PostList from '../../components/PostList/PostList';
import SearchBox from '../../components/board/SearchBox';

function Board() {
  return (
    <Container>
      <BoardTitle>게시판</BoardTitle>
      <Filter />
      <SearchBox />
      <PostList />
    </Container>
  );
}

export default Board;

const Container = styled.div`
  position: relative;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  height: 2000px;
  padding: 20px;
  @media (max-width: 640px) {
    width: auto;
  }
`;

const BoardTitle = styled.div`
  padding-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
`;
