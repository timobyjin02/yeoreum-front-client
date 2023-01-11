import styled from '@emotion/styled';
import React from 'react';

function PostDetailMain(postData: any) {
  return (
    <Main>
      <ContentWrapper>
        <Content>
          이상! 이것이야말로 무한한 가치를 가진 것이다
          <br /> 사람은 크고 작고 간에 이상이 있음으로써 이상은 실로 인간의
          부패를 방지하는 소금이라 할지니 인생에 가치를 주는 원질이 되는 것이다
          <br /> 그들은 앞이 긴지라 착목한는 곳이 원대하고 그들은 피가 더운지라
          실현에 대한 자신과 용기가 있다
          <br /> 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은
          아름답고 소담스러운 열매를 맺어 우리 이상의 꽃이 없으면 쓸쓸한 인간에
          남는 것은 영락과 부패 뿐이다
          <br />
          낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖
          과실이 어디 있으랴?
          <br /> 이상! 우리의 청춘이 가장 많이 품고
        </Content>
      </ContentWrapper>
      <YeoreumInfo>
        <Subject>만남 정보</Subject>
        <Conditions>
          <EachCondition>
            <ConditionTitle>모집인원</ConditionTitle>
            <FlexRowContainer>
              <GenderCondition>
                <임시Icon />
                <임시Text>1명</임시Text>
              </GenderCondition>
              <GenderCondition>
                <임시Icon />
                <임시Text>1명</임시Text>
              </GenderCondition>
            </FlexRowContainer>
          </EachCondition>
          <EachCondition>
            <ConditionTitle>시간</ConditionTitle>
            <Condition>
              <임시Icon />
              <임시Text>12월 20일</임시Text>
            </Condition>
          </EachCondition>
          <EachCondition>
            <ConditionTitle>장소</ConditionTitle>
            <Condition>
              <임시Icon />
              <임시Text>민들레뜨락</임시Text>
            </Condition>
          </EachCondition>
        </Conditions>
      </YeoreumInfo>
      <YeoreumInfo>
        <Subject>여름 멤버</Subject>
        <Members>
          <Member>
            <MemberProfile />
            <MemberNickname>클라이밍장인</MemberNickname>
            <WriterTag>작성자</WriterTag>
          </Member>
          <Member>
            <MemberProfile />
            <MemberNickname>무친저글링</MemberNickname>
          </Member>
          <Member>
            <MemberProfile />
            <MemberNickname>제주조랑말</MemberNickname>
          </Member>
          <Member>
            <MemberProfile />
            <MemberNickname>매직키드수리수리마수리</MemberNickname>
          </Member>
          <Member>
            <MemberProfile />
            <MemberNickname>신입디자이너가왕이다</MemberNickname>
          </Member>
          <Member>
            <MemberProfile />
            <MemberNickname>닉네임제한열두글자가맞나</MemberNickname>
          </Member>
        </Members>
      </YeoreumInfo>
      <PostButton>신청하기</PostButton>
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
