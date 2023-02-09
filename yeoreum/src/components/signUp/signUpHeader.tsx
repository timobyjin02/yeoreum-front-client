import styled from '@emotion/styled';

const SignUpHeader = () => (
  <Wrapper>
    <Head>회원가입</Head>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
  width: 100%;
  height: 10vh;
`;
const Head = styled.h2`
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 1.8em;
  font-weight: 600;
`;

export default SignUpHeader;
