import React from 'react';
import Filter from '../../components/board/Filter';
import PostList from '../../components/common/PostList';
import SearchBox from '../../components/board/SearchBox';
import BoardTitle from '../../components/common/PostPageTitle';
import PostContainer from '../../components/common/PostContainer';

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
