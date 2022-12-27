import styled from '@emotion/styled';
import React, { useCallback } from 'react';

function PostList() {
  const statusMaker = useCallback((status: number) => {
    if (status === 0) return '모집 중';
    if (status === 1) return '여름 진행 중';
    if (status === 2) return '여름 마감';
  }, []);

  const 임시postData = [
    {
      postNo: 0,
      progress: 1,
      createdAt: '1672018499336',
      title: '도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상',
      male: 1,
      female: 2,
      meetDate: '12월 28일',
      meetPlace: '노원 김밥 맛집',
      createrData: {
        profileImage: '',
        nickname: '무친저글링',
      },
    },
    {
      postNo: 1,
      progress: 0,
      createdAt: '1672018519182',
      title: '이벤트 참여하러 민뜨 가실분 3대 1200kg 헬창 있음',
      male: 2,
      female: 0,
      meetDate: '12월 30일',
      meetPlace: '성전',
      createrData: {
        profileImage: '',
        nickname: '제주조랑말',
      },
    },
    {
      postNo: 2,
      progress: 2,
      createdAt: '1672018499336',
      title: '도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상',
      male: 0,
      female: 3,
      meetDate: '12월 25일',
      meetPlace: '족발야시장',
      createrData: {
        profileImage: '',
        nickname: '까치발덩크',
      },
    },
    {
      postNo: 3,
      progress: 1,
      createdAt: '1672018499336',
      title: '도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상',
      male: 0,
      female: 3,
      meetDate: '12월 25일',
      meetPlace: '치킨 클럽',
      createrData: {
        profileImage: '',
        nickname: '한라산맨손등반',
      },
    },
    {
      postNo: 4,
      progress: 0,
      createdAt: '1672018499336',
      title: '도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상',
      male: 0,
      female: 3,
      meetDate: '12월 25일',
      meetPlace: '민들레뜨락',
      createrData: {
        profileImage: '',
        nickname: '클라이밍장인',
      },
    },
  ];

  return (
    <Post>
      {임시postData.map(p => {
        return (
          <List key={p.postNo}>
            <PostHeader>
              <Progress status={p.progress}>{statusMaker(p.progress)}</Progress>
              <CreatedAt>
                {new Intl.DateTimeFormat('ko-KR').format(+p.createdAt)}
              </CreatedAt>
            </PostHeader>
            <PostTitle>{p.title}</PostTitle>
            <PostBottom>
              <Conditions>
                <Condition>
                  <GenderCondition>
                    <임시Icon />
                    <임시Text>{p.male}명</임시Text>
                  </GenderCondition>
                  <GenderCondition>
                    <임시Icon />
                    <임시Text>{p.female}명</임시Text>
                  </GenderCondition>
                </Condition>
                <Condition>
                  <임시Icon />
                  <임시Text>{p.meetDate}</임시Text>
                </Condition>
                <Condition>
                  <임시Icon />
                  <임시Text>{p.meetPlace}</임시Text>
                </Condition>
              </Conditions>
              <CreaterInfo>
                <CreaterImage />
                <CreaterNickname>{p.createrData.nickname}</CreaterNickname>
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

type CurrentStatus = {
  status: number;
};

function ProgressColor({ status }: CurrentStatus) {
  if (!(typeof status === 'number') || status < 0 || status > 2) return;
  if (status === 0) return '#648fff';
  if (status === 1) return '#FF2B37';
  if (status === 2) return '#525252';
}

const Progress = styled.p<CurrentStatus>`
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
  margin: 0;
  font-size: 1.125rem;
  @media (max-width: 640px) {
    font-size: 1.0625rem;
  }
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
  font-size: 0.75rem;
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
