import styled from '@emotion/styled';
import { OnlyChildren } from '../../types/common';

const SignUpBody = ({ children }: OnlyChildren) => (
  <Wrapper>
    <P>{/* <span>* </span>필수입력 */}</P>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  margin: 0 auto;
`;

const P = styled.p`
  margin: 0 0 0 auto;
  color: ${({ theme }) => theme.palette.font.body};
  font-size: 0.8em;
  & > span {
    color: red;
  }
`;

export default SignUpBody;
