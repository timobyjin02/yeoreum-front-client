import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';
import { usePostDetailQuery } from '../../../hooks/queries/posts';
import { useLoginState } from '../../../store/hooks';

interface PostDetailMainProps {
  postNo: number;
}

function PostDetailMain({ postNo }: PostDetailMainProps) {
  const router = useRouter();

  const { userData } = useLoginState();

  const { data } = usePostDetailQuery(postNo);
  const postData = data?.data.response.board;

  const isMyPost = postData?.hostUserNo === userData?.userNo;

  const href = isMyPost ? `/apply/${postNo}` : `/apply/${postNo}/create`;

  return (
    <Main>
      <ContentWrapper>
        <Content>{postData?.description}</Content>
      </ContentWrapper>
      <YeoreumInfo>
        <Subject>만남 정보</Subject>
        <Conditions>
          <EachCondition>
            <ConditionTitle>모집인원</ConditionTitle>
            <FlexRowContainer>
              <GenderCondition>
                <ConditionIcon src="/icons/man.svg" />
                <ConditionText>{postData?.recruitMale}명</ConditionText>
              </GenderCondition>
              <GenderCondition>
                <ConditionIcon src="/icons/woman.svg" />
                <ConditionText>{postData?.recruitFemale}명</ConditionText>
              </GenderCondition>
            </FlexRowContainer>
          </EachCondition>
          <EachCondition>
            <ConditionTitle>시간</ConditionTitle>
            <Condition>
              <ConditionIcon src="/icons/clock.svg" />
              <ConditionText>{postData?.meetingTime}</ConditionText>
            </Condition>
          </EachCondition>
          <EachCondition>
            <ConditionTitle>장소</ConditionTitle>
            <Condition>
              <ConditionIcon src="/icons/location.svg" />
              <ConditionText>{postData?.location}</ConditionText>
            </Condition>
          </EachCondition>
        </Conditions>
      </YeoreumInfo>
      <YeoreumInfo>
        <Subject>여름 멤버</Subject>
        <Members>
          <Member>
            <MemberProfile src="/anonymous.png" />
            <MemberNickname>{postData?.hostNickname}</MemberNickname>
            <WriterTag>작성자</WriterTag>
          </Member>
          {postData?.hostMemberNicknames.map((nickname: string) => {
            if (postData.nickname === nickname) return;
            return (
              <Member>
                <MemberProfile src="/anonymous.png" />
                <MemberNickname>{nickname}</MemberNickname>
              </Member>
            );
          })}
        </Members>
      </YeoreumInfo>
      <PostButton onClick={() => router.push(href)}>
        {isMyPost ? '신청내역' : '신청하기'}
      </PostButton>
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
  color: ${({ theme }) => theme.palette.main};
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

const ConditionIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 2px;
`;

const ConditionText = styled.span`
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

const MemberProfile = styled.img`
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
  border: 1px solid ${({ theme }) => theme.palette.main};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.main};
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
  background-color: ${({ theme }) => theme.palette.main};

  cursor: pointer;

  @media (max-width: 640px) {
    width: 50%;
  }
`;
