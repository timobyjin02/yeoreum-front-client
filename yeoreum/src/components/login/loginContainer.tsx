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
  width: 680px;
  min-height: calc(90vh - 180px);
  margin: 60px auto;
  color: #555555;
`;

export default LoginContainer;
