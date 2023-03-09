import styled from '@emotion/styled';
import Link from 'next/link';
import { Submit, SubmitWrapper } from './SignUpFormStyle';

const SignUpNotice = ({ userInfo }: any) => {
  const MESSAGE_BY_USER_STATUS = {
    2: '승인 대기 중입니다. 최대 24시간 소요',
    3: '회원가입이 완료되었습니다. 로그인을 진행해 주세요.',
  };
  console.log(userInfo);
  return (
    <Wrapper>
      <P>{(MESSAGE_BY_USER_STATUS as any)[userInfo.status]}</P>
      <StyledLink href="/">
        <Submit>여름 구경하기</Submit>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  margin-bottom: 5em;
  border: solid 1px ${({ theme }) => theme.palette.line.grey};
  border-radius: 8px; ;
`;
const P = styled.p`
  margin: 5em 0;
`;

const StyledLink = styled(Link)`
  align-self: center;
  width: 30%;
  height: 48px;
  margin-right: 1.4%;
`;
export default SignUpNotice;
