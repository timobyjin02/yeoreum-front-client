import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginContainer = ({ children }: Props) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  display: flex;
  background: #fff;
  max-width: 680px;
  min-height: calc(90vh - 180px);
  margin: 60px auto;
  color: #555555;
  @media (max-width: 679px) {
    margin: 0;
    & > div:first-child {
      display: none;
    }

    & > div:last-child {
      margin: 0;
      width: 100vw;
      min-height: 90vh;
      font-size: 1.4em;
    }
  }
`;

export default LoginContainer;
