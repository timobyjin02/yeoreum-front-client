import Link from 'next/link';
import styled from '@emotion/styled';
import Search from './search';

export default function Qna() {
  // const qnaList: string[] = GetQnaList from api
  const qnaList = [
    '신고는 어떻게 하나요?',
    '왜 여름인가요?',
    '민뜨 이벤트는 언제 하나요?',
  ];
  return (
    <Container>
      <Title>무엇을 도와드릴까요?</Title>
      <Search />
      <ListWrap>{qnaList.map((a, i) => qnaRender(a, i))}</ListWrap>
      <ToAllQna href="service"><p>Q&A 전체 보기 ></p></ToAllQna>
    </Container>
  );
}

const qnaRender = (a: string, i: number) => {
  return (
    <List key={i}>
      <Link href="/service" key={i}>
        {a}
      </Link>
    </List>
  );
};

const Container = styled.div`
  width: 680px;
  padding: 50px 0px;
`;

const Title = styled.h2`
  font-size: 2.4em;
  font-weight: 500;
  margin-bottom: 16px;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
`;

const List = styled.div`
  width: 100%;
  height: 3em;
  border-radius: 4px;
  & a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1em;
  }
  &:hover {
    background-color: #dbdbdb;
  }
`;

const ToAllQna = styled(Link)`
	& p {
		display: inline-block;
	padding: 0.8em 0;
  color: #357dd6;
	}
`;

