import styled from '@emotion/styled';
import React from 'react';
import { PostType } from '../../../types/post';

interface MainProps {
  postData: PostType;
  application?: boolean;
}

function PostDetailMain({ postData, application }: MainProps) {
  return (
    <Main>
      <ContentWrapper>
        <Content>{postData.description}</Content>
      </ContentWrapper>
      <YeoreumInfo>
        <Subject>만남 정보</Subject>
        <Conditions>
          <EachCondition>
            <ConditionTitle>모집인원</ConditionTitle>
            <FlexRowContainer>
              <GenderCondition>
                <임시Icon />
                <임시Text>{postData.male}명</임시Text>
              </GenderCondition>
              <GenderCondition>
                <임시Icon />
                <임시Text>{postData.female}명</임시Text>
              </GenderCondition>
            </FlexRowContainer>
          </EachCondition>
          <EachCondition>
            <ConditionTitle>시간</ConditionTitle>
            <Condition>
              <임시Icon />
              <임시Text>{postData.meetingTime}</임시Text>
            </Condition>
          </EachCondition>
          <EachCondition>
            <ConditionTitle>장소</ConditionTitle>
            <Condition>
              <임시Icon />
              <임시Text>{postData.location}</임시Text>
            </Condition>
          </EachCondition>
        </Conditions>
      </YeoreumInfo>
      <YeoreumInfo>
        <Subject>여름 멤버</Subject>
        <Members>
          <Member>
            <MemberProfile />
            <MemberNickname>{postData.nickname}</MemberNickname>
            <WriterTag>작성자</WriterTag>
          </Member>
          {postData.hostNicknames.map(nickname => {
            if (postData.nickname === nickname) return;
            return (
              <Member>
                <MemberProfile />
                <MemberNickname>{nickname}</MemberNickname>
              </Member>
            );
          })}
        </Members>
      </YeoreumInfo>
      <PostButton>{application ? '신청수락' : '신청하기'}</PostButton>
    </Main>
  );
}

export default PostDetailMain;

const FlexRowContainer = styled.div`
  display: flex;
`;

const Main = styled.main`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.p`
  width: 100%;
  min-height: 140px;
  margin-bottom: 40px;
`;

const Content = styled.span`
  line-height: 1.6;
  letter-spacing: -1px;
`;

const YeoreumInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Subject = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ff444d;
  margin-bottom: 20px;
`;

const Conditions = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const EachCondition = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  @media (max-width: 640px) {
    margin-bottom: 22px;
  }
`;

const ConditionTitle = styled.span`
  letter-spacing: -0.35px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const GenderCondition = styled.div`
  display: flex;
  align-items: center;
  &:first-of-type {
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
  font-size: 14px;
`;

const Condition = styled.div`
  display: flex;
  align-items: center;
`;

const Members = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Member = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 12px;
`;

const MemberProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 6px;
`;

const MemberNickname = styled.span`
  letter-spacing: -0.6px;
`;

const WriterTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid #ff565f;
  font-size: 12px;
  font-weight: 600;
  color: #ff565f;
  margin-left: 10px;
`;

const PostButton = styled.button`
  margin-top: 40px;
  width: 240px;
  height: 40px;
  border-radius: 10px;

  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: 600;
  color: white;
  background-color: #ff565f;

  cursor: pointer;

  @media (max-width: 640px) {
    width: 50%;
  }
`;
