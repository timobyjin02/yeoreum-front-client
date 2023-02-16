import React, { Fragment, useEffect, useState } from 'react';
import Filter from '../../components/board/Filter';
import PostList from '../../components/board/PostList';
import SearchBox from '../../components/board/SearchBox';
import BoardTitle from '../../components/board/PostPageTitle';
import PostContainer from '../../components/board/PostContainer';
import { getToken } from '../../utils/user';
import { usePostsInfiniteQuery } from '../../hooks/queries/posts';
import { RequestGetAllPostsOption } from '../../apis/posts';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import {
  useGetFilterData,
  useScrollHistory,
} from '../../hooks/useBoardPageData';

function Board() {
  const token = getToken() as string;
  const [option, setOption] = useState<RequestGetAllPostsOption>({
    gender: undefined,
    people: undefined,
    isDone: undefined,
    isImpromptu: undefined,
  });
  const scrollHistory = useScrollHistory();

  useEffect(() => {
    const savedOption = useGetFilterData();

    // 저장된 데이터가 있다면 사용하고 없다면 default 옵션 할당
    setOption(savedOption || option);
  }, []);

  const { data, fetchNextPage, isFetching, isLoading, isError } =
    usePostsInfiniteQuery(option, token);

  useEffect(() => {
    window.scrollTo(0, scrollHistory);
  }, []);

  return (
    <PostContainer>
      <BoardTitle title="게시판" />
      <Filter option={option} setOption={setOption} />
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
