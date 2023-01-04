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
  height: 40%;
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
`;
const ForgotPw = styled.p`
  font-size: 0.7em;
  align-self: flex-end;
  letter-spacing: -0.5px;
  color: #1d7cd3;
`;
const Submit = styled.button`
  display: inline-block;
  width: 100%;
  min-height: 2.6em;
  margin-top: 2em;
  border-radius: 4px;
  background: #1d7cd3;
  color: #fff;
`;
