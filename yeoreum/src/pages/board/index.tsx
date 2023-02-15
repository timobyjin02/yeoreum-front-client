import React, { Fragment, useState } from 'react';
import Filter from '../../components/board/Filter';
import PostList from '../../components/board/PostList';
import SearchBox from '../../components/board/SearchBox';
import BoardTitle from '../../components/board/PostPageTitle';
import PostContainer from '../../components/board/PostContainer';
import { getToken } from '../../utils/user';
import { usePostsInfiniteQuery } from '../../hooks/queries/posts';
import { RequestGetAllPostsOption } from '../../apis/posts';
import LoadingSpinner from '../../components/common/LoadingSpinner';

function Board() {
  const token = getToken() as string;
  const [option, setOption] = useState<RequestGetAllPostsOption>({});

  const { data, fetchNextPage, isFetching, isLoading, isError } =
    usePostsInfiniteQuery(option, token);

  return (
    <PostContainer>
      <BoardTitle title="게시판" />
      <Filter setOption={setOption} />
      <SearchBox />
      {data?.pages.map((group, idx) => {
        return (
          <Fragment key={idx}>
            <PostList
              key={idx}
              posts={group?.data.response.boardPagenation.boards}
              fetchNextPage={fetchNextPage}
            />
          </Fragment>
        );
      })}
      {isError && (
        <h4 style={{ textAlign: 'center' }}>조건에 맞는 게시글이 없습니다.</h4>
      )}
      {(isLoading || isFetching) && !isError && (
        // 임시 로딩 스피너
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            paddingTop: '10px',
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </PostContainer>
  );
}

export default Board;
