import React from 'react';
import Filter from '../../components/board/Filter';
import PostList from '../../components/board/PostList';
import SearchBox from '../../components/board/SearchBox';
import BoardTitle from '../../components/board/PostPageTitle';
import PostContainer from '../../components/board/PostContainer';

function Board() {
  return (
    <PostContainer>
      <BoardTitle title="게시판" />
      <Filter />
      <SearchBox />
      <PostList />
    </PostContainer>
  );
}

export default Board;
