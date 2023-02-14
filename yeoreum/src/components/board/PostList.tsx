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

interface PostListProps {
  posts?: BoardType[];
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<any, AxiosError<unknown, any>>>;
}

function PostList({ posts, fetchNextPage }: PostListProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    observeElement(ref.current, fetchNextPage);
  }, []);

  const observeElement = (element: HTMLElement | null, handler: any) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting === true) {
          handler();
          observer.unobserve(element);
        }
      },
      { threshold: 1 },
    );

    observer.observe(element);
  };

  return (
    <Post>
      {posts?.map((post, idx) => {
        return (
          <List ref={posts.length - 1 === idx ? ref : null} key={post.no}>
            <PostHeader>
              <Progress status={post.isDone}>
                {statusMaker(post.isDone)}
              </Progress>
              <CreatedAt>{post.createdDate}</CreatedAt>
            </PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostBottom>
              <Conditions>
                <Condition>
                  <GenderCondition>
                    <임시Icon />
                    <임시Text>{post.recruitMale}명</임시Text>
                  </GenderCondition>
                  <GenderCondition>
                    <임시Icon />
                    <임시Text>{post.recruitFemale}명</임시Text>
                  </GenderCondition>
                </Condition>
                <Condition>
                  <임시Icon />
                  <임시Text>{post.meetingTime}</임시Text>
                </Condition>
                <Condition>
                  <임시Icon />
                  <임시Text>{post.location}</임시Text>
                </Condition>
              </Conditions>
              <CreaterInfo>
                <CreaterImage />
                <CreaterNickname>{post.hostNickname}</CreaterNickname>
              </CreaterInfo>
            </PostBottom>
          </List>
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
  border-bottom: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
  /* color: #648fff; */
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

const 임시Icon = styled.div`
  width: 15px;
  height: 15px;
  background-color: lightgray;
  margin-right: 5px;
`;

const 임시Text = styled.span`
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

const CreaterImage = styled.div`
  width: 20px;
  height: 20px;
  background-color: lightgray;
  border-radius: 50%;
  margin-right: 6px;
`;

const CreaterNickname = styled.span`
  font-size: 0.75rem;
`;
