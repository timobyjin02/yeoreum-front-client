import styled from '@emotion/styled';
import { BoardType } from '../../types/post';
import {
  PostStatusType,
  ProgressColor,
  statusMaker,
} from '../../utils/postStatus';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Link from 'next/link';
import { useSaveScrollData } from '../../hooks/useBoardPageData';
import { useRouter } from 'next/router';

interface PostListProps {
  isApplication?: boolean;
  posts?: BoardType[];
  fetchNextPage?: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<any, AxiosError<unknown, any>>>;
}

function PostList({ posts, fetchNextPage, isApplication }: PostListProps) {
  const router = useRouter();
  const ref = router.pathname === '/board' ? useRef(null) : null;

  useEffect(() => {
    if (ref === null) return;
    if (!ref.current || router.pathname !== '/board') return;
    useIntersectionObserver(ref.current, fetchNextPage);
  }, []);

  const boardNo = Number(router.query.postNo);

  return (
    <Post>
      {posts?.map((post, idx) => {
        console.log(post);
        return (
          <Link
            onClick={useSaveScrollData}
            key={`${post.no}${idx}`}
            href={
              isApplication
                ? `/apply/${boardNo}/application/${post.teamNo}`
                : `/board/post/${post.no}`
            }
          >
            <List ref={posts.length - 1 === idx ? ref : null}>
              <PostHeader>
                <Progress status={post.isDone}>
                  {statusMaker(post.isDone)}
                </Progress>
                <CreatedAt>{post.createdDate}</CreatedAt>
              </PostHeader>
              <PostTitle>{post.title}</PostTitle>
              {isApplication && (
                <ApplicationDescription>
                  {post.description}
                </ApplicationDescription>
              )}
              {isApplication || (
                <PostBottom>
                  <Conditions>
                    <Condition>
                      <GenderCondition>
                        <ConditionIcon src="/icons/man.svg" />
                        <ConditionText>{post.recruitMale}명</ConditionText>
                      </GenderCondition>
                      <GenderCondition>
                        <ConditionIcon src="/icons/woman.svg" />
                        <ConditionText>{post.recruitFemale}명</ConditionText>
                      </GenderCondition>
                    </Condition>
                    <Condition>
                      <ConditionIcon src="/icons/clock.svg" />
                      <ConditionText>{post.meetingTime}</ConditionText>
                    </Condition>
                    <Condition>
                      <ConditionIcon src="/icons/location.svg" />
                      <ConditionText>{post.location}</ConditionText>
                    </Condition>
                  </Conditions>
                  <CreaterInfo>
                    <CreaterImage src="anonymous.png" />
                    <CreaterNickname>{post.hostNickname}</CreaterNickname>
                  </CreaterInfo>
                </PostBottom>
              )}
            </List>
          </Link>
        );
      })}
    </Post>
  );
}

export default PostList;

const Post = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  max-width: 600px;
  min-height: 100px;
  padding: 8px 20px 10px;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 3%);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Progress = styled.p<{ status: PostStatusType }>`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${ProgressColor};
  margin-right: 8px;
`;

const CreatedAt = styled.span`
  font-size: 0.75rem;
  color: #aaa;
`;

const PostTitle = styled.h4`
  color: #333;
  margin: 0;
  font-size: 1.0625rem;
`;

const PostBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const Conditions = styled.div`
  display: flex;
  @media (max-width: 640px) {
    margin-top: 8px;
  }
`;

const Condition = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const GenderCondition = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    margin-right: 10px;
  }
`;

const ConditionIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 2px;
`;

const ConditionText = styled.span`
  font-size: 0.6875rem;
  color: #666666;
`;

const CreaterInfo = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    display: none;
  }
`;

const CreaterImage = styled.img`
  width: 20px;
  height: 20px;
  background-color: lightgray;
  border-radius: 50%;
  margin-right: 6px;
`;

const CreaterNickname = styled.span`
  font-size: 0.75rem;
`;

const ApplicationDescription = styled.span`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;
