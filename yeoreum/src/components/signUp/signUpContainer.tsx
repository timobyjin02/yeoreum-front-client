import styled from '@emotion/styled';
import { OnlyChildren } from '../../types/common';

const SignUpContainer = ({ children }: OnlyChildren) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  min-height: fit-content;
  /* min-height: calc(100vh - 60px); */
  flex-direction: column;
  margin: 0 auto 4em;
`;

export default SignUpContainer;
