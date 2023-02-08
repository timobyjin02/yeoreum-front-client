import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BoardType } from '../../types/post';
import {
  PostStatusType,
  ProgressColor,
  statusMaker,
} from '../../utils/postStatus';
import { getToken } from '../../utils/user';

function PostList() {
  const token = getToken();
  const [posts, setPosts] = useState<BoardType[]>([
    // 요청에 추가로 더해질 더미 데이터
    {
      createdDate: '2022.02.11',
      description: '...',
      hostNickname: '무친저글링',
      hostUserNo: 3,
      isDone: 0,
      isImpromptu: 0,
      location: '노원 김밥 맛집',
      meetingTime: '12월 28일',
      no: 21212,
      recruitMale: 1,
      recruitFemale: 2,
      title: '도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상',
    },
    {
      createdDate: '2022.02.11',
      description: '...',
      hostNickname: '무친저글링',
      hostUserNo: 3,
      isDone: 1,
      isImpromptu: 0,
      location: '노원 김밥 맛집',
      meetingTime: '12월 28일',
      no: 221312,
      recruitMale: 1,
      recruitFemale: 2,
      title: '도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상',
    },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/boards`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setPosts([...posts, ...data.response.boards]);
    })();
  }, []);

  console.log(posts);

  return (
    <Post>
      {posts.map(p => {
        return (
          <List key={p.no}>
            <PostHeader>
              <Progress status={p.isDone}>{statusMaker(p.isDone)}</Progress>
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
