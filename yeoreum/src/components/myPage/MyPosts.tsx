import styled from '@emotion/styled';
import React from 'react';
import { BoardType } from '../../types/post';
import { PostStatusType, ProgressColor } from '../../utils/postStatus';

interface MyPostsProps {
  boards: BoardType[];
}

function MyPosts({ boards }: MyPostsProps) {
  return (
    <Post>
      {boards.map(p => {
        return (
          <List key={p.no}>
            <PostHeader>
              <Progress status={p.isDone}>{p.isDone}</Progress>
              <CreatedAt>{p.createdDate}</CreatedAt>
            </PostHeader>
            <PostTitle>{p.title}</PostTitle>
            <PostBottom>
              <Conditions>
                <Condition>
                  <GenderCondition>
                    <임시Icon />
                    <임시Text>{p.recruitMale}명</임시Text>
                  </GenderCondition>
                  <GenderCondition>
                    <임시Icon />
                    <임시Text>{p.recruitFemale}명</임시Text>
                  </GenderCondition>
                </Condition>
                <Condition>
                  <임시Icon />
                  <임시Text>{p.meetingTime}</임시Text>
                </Condition>
                <Condition>
                  <임시Icon />
                  <임시Text>{p.location}</임시Text>
                </Condition>
              </Conditions>
              <CreaterInfo>
                <CreaterImage />
                <CreaterNickname>{p.hostNickname}</CreaterNickname>
              </CreaterInfo>
            </PostBottom>
          </List>
        );
      })}
    </Post>
  );
}

export default MyPosts;

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
