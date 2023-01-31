import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';

interface AlertProps {
  success?: boolean;
}

const Form = () => {
  const [sendmail, setSendmail] = useState(0);
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    email: '',
    emailCode: '',
    password: '',
    passwordConfirm: '',
  });
  const [messages, setMessages] = useState({
    email: '',
    emailCode: '',
    password: '',
  });
  const [validity, setValidity] = useState({
    email: true,
    emailCode: false,
    password: false,
    passwordConfirm: false,
  });

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(pre => ({
        ...pre,
        email: e.target.value,
      }));
    },
    [],
  );

  const onClickEmail = useCallback(
    (e: React.MouseEvent) => {
      let regex = new RegExp(
        "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
      );

      if (regex.test(user.email)) {
        setValidity(pre => ({ ...pre, email: true }));
        setSendmail(1);
      } else {
        setValidity(pre => ({ ...pre, email: false }));
        setMessages(pre => ({
          ...pre,
          email: '이메일 형식에 맞지 않습니다.',
        }));
      }
    },
    [user.email],
  );

  const onClickEmailCode = useCallback(() => {
    const 임시코드 = '111111';
    if (user.emailCode === 임시코드) {
      setValidity(pre => ({ ...pre, emailCode: true }));
      setMessages(pre => ({ ...pre, emailCode: '인증되었습니다.' }));
      setSendmail(2);
    } else {
      setMessages(pre => ({ ...pre, emailCode: '일치하지 않습니다.' }));
    }
  }, [user.emailCode]);

  console.log(user);
  return (
    <Container onSubmit={e => e.preventDefault()}>
      <Wrapper>
        <Label>
          <P>이메일</P>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeEmail}
            onError={() => null}
          />
        </Label>
        {sendmail === 0 ? (
          <Button onClick={onClickEmail}>인증하기</Button>
        ) : (
          <Button disabled={true}>전송됨</Button>
        )}
      </Wrapper>
      {!validity.email && (
        <AlertP success={validity.emailCode}>{messages.email}</AlertP>
      )}
      {sendmail !== 0 ? (
        <Wrapper>
          <Label>
            <P>00:00</P>
            {sendmail === 1 ? (
              <Input
                type="text"
                maxLength={6}
                onChange={e =>
                  setUser(pre => ({ ...pre, emailCode: e.target.value }))
                }
                placeholder="인증코드"
              />
            ) : (
              <Input
                type="text"
                maxLength={6}
                placeholder="인증코드"
                disabled
              />
            )}
          </Label>
          {sendmail === 1 ? (
            <Button onClick={onClickEmailCode}>인증하기</Button>
          ) : null}
        </Wrapper>
      ) : null}
      {messages.emailCode.length > 0 && (
        <AlertP success={validity.emailCode}>{messages.emailCode}</AlertP>
      )}
      <Wrapper>
        <Label>
          <P>비밀번호</P>
          <Input
            type="password"
            maxLength={16}
            placeholder="4자 이상 16자 이하"
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <P>비밀번호 확인</P>
          <Input
            type="password"
            maxLength={16}
            placeholder="4자 이상 16자 이하"
          />
        </Label>
      </Wrapper>
      {/* <AlertP>4자 이상 16자 이하</AlertP> */}
      <Submit>다음</Submit>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.2em auto;
  padding: 1em 1.3em;
  /* border: solid ${({ theme }) => theme.palette.line.grey}; */
  /* border-width: 1px; */
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4em;
`;

const P = styled.p`
  width: 25.5%;
`;
const AlertP = styled.p<AlertProps>`
  margin-left: 21%;
  padding-bottom: 1em;
  font-size: 0.8em;
  color: ${props =>
    props.success === true ? props.theme.palette.main : '#f50505'};
`;
const Input = styled.input`
  width: 73%;
  height: 72%;
  padding: 0.75em;
  border: solid 1px ${({ theme }) => theme.palette.line.grey};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 1rem;
  :focus {
    outline: none;
    box-shadow: 0 0 1px;
    border-color: ${({ theme }) => theme.palette.main};
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  font-size: 0.9em;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const Button = styled.button`
  width: 20%;
  height: 72%;
  border: solid 1px ${({ theme }) => theme.palette.serviceBtn};
  border-radius: 4px;
  background-color: white;
  color: ${({ theme }) => theme.palette.serviceBtn};
  font-size: 0.875em;
  font-weight: 500;
  cursor: pointer;
  :disabled {
    border: solid 1px ${({ theme }) => theme.palette.line.grey};
    background-color: ${({ theme }) => theme.palette.background.grey};
    color: ${({ theme }) => theme.palette.font.white};
    cursor: default;
  }
  /* :active {
    ${props =>
    !props.disabled &&
    `color: ${props.theme.palette.font.white};
      background-color: ${props.theme.palette.light};`}
  } */
`;

const Submit = styled.button`
  width: 30%;
  height: 48px;
  align-self: center;
  border-radius: 4px;
  margin-top: 1em;
  background-color: ${({ theme }) => theme.palette.serviceBtn};
  color: white;
  cursor: pointer;
`;
export default Form;
