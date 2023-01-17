import styled from '@emotion/styled';
import Link from 'next/link';

const loginForm = () => (
  <>
    <Form>
      <Label>
        <Input type="email" placeholder="email" />
      </Label>
      <Label>
        <Input type="password" placeholder="password" />
      </Label>
      <Link href="">
        <ForgotPw>Forgot Password</ForgotPw>
      </Link>
      <Submit>Login</Submit>
    </Form>
  </>
);

export default loginForm;

const Form = styled.form`
  display: flex;
  width: 65%;
  flex-direction: column;
  & > a {
    align-self: flex-end;
  }
`;
const Label = styled.label`
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 2.6em;
  margin: 4px 0;
  padding: 8px;
  background: #f5f6f7;
  border: solid 1px #eee;
  border-radius: 4px;
  :focus {
    background: #fff;
  }
  @media (max-width: 679px) {
    height: 3rem;
  }
`;
const ForgotPw = styled.p`
  font-size: 0.6em;
  align-self: flex-end;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.palette.serviceBtn};
`;
const Submit = styled.button`
  display: inline-block;
  width: 100%;
  min-height: 2.6em;
  margin: 2em 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.serviceBtn};
  color: #fff;
  font-size: 0.875em;
  @media (max-width: 679px) {
    height: 3rem;
  }
`;
