import styled from '@emotion/styled';
import React from 'react';

function Card() {
  const title = `도서관에서 같이 공부하실 남자 둘 구해요 IQ 200이상만 도서관에서 같이
          공부하실 남자 둘 구해요`;
  function titleSlice(string: string) {
    if (string.length <= 80) return string;
    else return string.slice(0, 80) + '...';
  }
  return (
    <CardContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header>
          <Status>모집중</Status>
          <Like />
        </Header>
        <Section>
          <Profile />
          <ColumnWrapper>
            <RowWrapper>
              <GenderCondition>
                <임시Icon />
                <임시Text>{1}명</임시Text>
              </GenderCondition>
              <GenderCondition>
                <임시Icon />
                <임시Text>{1}명</임시Text>
              </GenderCondition>
            </RowWrapper>
            <Nickname>클라이밍장인</Nickname>
          </ColumnWrapper>
        </Section>
        <Title>{titleSlice(title)}</Title>
      </div>
      <Conditions>
        <Condition>
          <임시Icon />
          <임시Text>민들레뜨락</임시Text>
        </Condition>
        <Condition>
          <임시Icon />
          <임시Text>니시간될때</임시Text>
        </Condition>
      </Conditions>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  width: 240px;
  height: 284px;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 0 1.5px rgba(25, 25, 25, 0.5);
  margin: 10px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 975px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Status = styled.div`
  padding: 4px 13px;
  background-color: #484848;
  color: white;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Like = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: pink;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 10px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 2px;
`;

const 임시Text = styled.span`
  font-size: 0.9375rem;
  letter-spacing: -1px;
  color: #666666;
`;

const Nickname = styled.span`
  font-size: 0.75rem;
  color: #7f7f7f;
`;

const Title = styled.p`
  max-height: 110px;
`;

const Conditions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 975px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Condition = styled.div`
  display: flex;
  align-items: center;

  width: 50%;

  @media (max-width: 975px) {
    width: 100%;
    margin: 3px auto;
  }
`;
