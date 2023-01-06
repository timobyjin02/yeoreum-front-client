import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const LoginBox = ({ children }: Props) => <Container>{children}</Container>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid #dbdbdb;
`;

export default LoginBox;
