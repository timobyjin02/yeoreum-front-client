import React, { Fragment, useEffect, useState } from 'react';
import Filter from '../../components/board/Filter';
import PostList from '../../components/board/PostList';
import SearchBox from '../../components/board/SearchBox';
import BoardTitle from '../../components/board/PostPageTitle';
import PostContainer from '../../components/board/PostContainer';
import { usePostsInfiniteQuery } from '../../hooks/queries/posts';
import { RequestGetAllPostsOption } from '../../apis/posts';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import {
  useGetFilterData,
  useGetScrollData,
  useSaveFilterData,
} from '../../hooks/useBoardPageData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

function Board() {
  const router = useRouter();
  const [option, setOption] = useState<RequestGetAllPostsOption>({
    gender: undefined,
    people: undefined,
    isDone: undefined,
    isImpromptu: undefined,
  });

  useEffect(() => {
    const savedOption = useGetFilterData();

    // 저장된 데이터가 있다면 사용하고 없다면 default 옵션 할당
    setOption(savedOption || option);
  }, []);

  const { data, fetchNextPage, isFetching, isLoading, isError } =
    usePostsInfiniteQuery(option);

  useEffect(() => {
    const scrollHistory = useGetScrollData();

    if (!isLoading && !isFetching) {
      window.scrollTo(0, scrollHistory);
    }
  }, []);

  const routeChangeEventHandler = () => {
    useSaveFilterData(option);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', routeChangeEventHandler);
    return () => router.events.off('routeChangeStart', routeChangeEventHandler);
  }, [routeChangeEventHandler]);

  return (
    <PostContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <BoardTitle title="게시판" />
        <Link href="/board/create">
          <Image src="/icons/edit.svg" width={26} height={26} alt="edit" />
        </Link>
      </div>
      <Filter option={option} setOption={setOption} />
      {/* <SearchBox /> */}
      {data?.pages.map((group, idx) => (
        <Fragment key={idx}>
          <PostList
            key={idx}
            posts={group?.data.response.boardPagenation.boards}
            fetchNextPage={fetchNextPage}
          />
        </Fragment>
      ))}
      {isError && (
        <h4 style={{ marginTop: '20px', textAlign: 'center' }}>
          조건에 맞는 게시글이 없습니다.
        </h4>
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
