import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';

interface AlertProps {
  success?: boolean;
}

interface Password {
  validity: boolean | undefined;
  message: string;
}

const SignUpForm = () => {
  const [mailStatus, setMailStatus] = useState(0);
  const [user, setUser] = useState({
    email: '',
    emailCode: '',
    password: '',
    passwordConfirm: '',
  });

  const [emailInfo, setEmailInfo] = useState({
    validity: true,
    message: '',
  });
  const [emailCodeInfo, setEmailCodeInfo] = useState({
    validity: false,
    message: '',
  });
  const [passwordInfo, setPasswordInfo] = useState<Password>({
    validity: undefined,
    message: '',
  });
  const [passwordConfirmInfo, setPasswordConfirmInfo] = useState<Password>({
    validity: undefined,
    message: '',
  });

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const current = e.target.value;
      setUser(pre => ({
        ...pre,
        email: current,
      }));
    },
    [],
  );

  const onClickEmail = useCallback(
    (e: React.MouseEvent) => {
      const regex =
        /([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])/;
      if (regex.test(user.email)) {
        setMailStatus(1);
        setEmailInfo(pre => ({ ...pre, validity: true }));
      } else {
        setEmailInfo(pre => ({
          ...pre,
          validity: false,
          message: '이메일 형식에 맞지 않습니다.',
        }));
      }
    },
    [user.email],
  );

  const onClickEmailCode = useCallback(() => {
    const 임시코드 = '111111';
    if (user.emailCode === 임시코드) {
      setEmailCodeInfo(pre => ({
        ...pre,
        validity: true,
        message: '인증되었습니다.',
      }));
      setMailStatus(2);
    } else {
      setEmailCodeInfo(pre => ({
        ...pre,
        validity: false,
        message: '일치하지 않습니다.',
      }));
    }
  }, [user.emailCode]);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const regexp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,14}$/;
      const current = e.target.value;
      setUser(pre => ({ ...pre, password: current }));
      if (regexp.test(current)) {
        setPasswordInfo(pre => ({
          ...pre,
          validity: true,
          message: '안전한 비밀번호입니다.',
        }));
      } else {
        setPasswordInfo(pre => ({
          ...pre,
          validity: false,
          message: '특수문자, 영어, 숫자를 합친 6자 이상 14자 이하 ',
        }));
      }
    },
    [user.password],
  );

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const current = e.target.value;
      if (passwordInfo.validity !== true) {
        setPasswordConfirmInfo(pre => ({
          ...pre,
          validity: false,
          message: '비밀번호를 먼저 입력해주세요.',
        }));
        return;
      }
      setUser(pre => ({ ...pre, passwordConfirm: current }));
      if (user.password !== current) {
        setPasswordConfirmInfo(pre => ({
          ...pre,
          validity: false,
          message: '일치하지 않습니다.',
        }));
      } else {
        setPasswordConfirmInfo(pre => ({
          ...pre,
          validity: true,
          message: '일치합니다.',
        }));
      }
    },
    [passwordInfo.validity, user.password, user.passwordConfirm],
  );
  const onFocusPassword = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value.length !== 0) return;
      setPasswordInfo(pre => ({
        ...pre,
        validity: undefined,
        message: '특수문자, 영어, 숫자를 합친 6자 이상 14자 이하',
      }));
    },
    [],
  );
  const onFocusPasswordConfirm = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value.length !== 0) return;
      setPasswordConfirmInfo(pre => ({
        ...pre,
        validity: undefined,
        message: '한 번 더 입력해주세요.',
      }));
    },
    [],
  );
  return (
    <Container onSubmit={e => e.preventDefault()}>
      <Wrapper>
        <Label>
          <P>이메일</P>
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeEmail}
          />
        </Label>
        {mailStatus === 0 ? (
          <Button onClick={onClickEmail}>인증하기</Button>
        ) : (
          <Button disabled={true}>전송됨</Button>
        )}
      </Wrapper>
      {!emailInfo.validity && (
        <AlertP success={emailInfo.validity}>{emailInfo.message}</AlertP>
      )}
      {mailStatus !== 0 ? (
        <Wrapper>
          <Label>
            <P>00:00</P>
            {mailStatus === 1 ? (
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
          {mailStatus === 1 ? (
            <Button onClick={onClickEmailCode}>인증하기</Button>
          ) : null}
        </Wrapper>
      ) : null}
      {emailCodeInfo.message.length > 0 && (
        <AlertP success={emailCodeInfo.validity}>
          {emailCodeInfo.message}
        </AlertP>
      )}
      <Wrapper>
        <Label>
          <P>비밀번호</P>
          <Input
            onChange={onChangePassword}
            onFocus={onFocusPassword}
            type="password"
            maxLength={14}
            placeholder="비밀번호를 입력해주세요"
          />
        </Label>
      </Wrapper>
      {passwordInfo.message.length > 0 && (
        <AlertP success={passwordInfo.validity}>{passwordInfo.message}</AlertP>
      )}
      <Wrapper>
        <Label>
          <P>비밀번호 확인</P>
          <Input
            onChange={onChangePasswordConfirm}
            onFocus={onFocusPasswordConfirm}
            type="password"
            maxLength={14}
            placeholder="비밀번호를 입력해주세요"
          />
        </Label>
      </Wrapper>
      {passwordConfirmInfo.message.length > 0 && (
        <AlertP success={passwordConfirmInfo.validity}>
          {passwordConfirmInfo.message}
        </AlertP>
      )}
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
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4em;
`;

const P = styled.p`
  width: 24.5%;
`;
const AlertP = styled.p<AlertProps>`
  margin-left: 21%;
  padding-bottom: 1em;
  font-size: 0.8em;
  color: ${props =>
    props.success === undefined
      ? props.theme.palette.font.body
      : props.success === true
      ? props.theme.palette.main
      : '#f50505'};
`;
const Input = styled.input`
  width: 74%;
  height: 72%;
  padding: 0.75em;
  border: solid 1px ${({ theme }) => theme.palette.line.grey};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.font.headline};
  font-size: 1rem;
  ::placeholder {
    font-size: 0.875em;
    font-weight: 300;
  }
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
  border: solid 1px ${({ theme }) => theme.palette.main};
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
  :active {
    ${props =>
      !props.disabled &&
      `color: ${props.theme.palette.font.white};
      background-color: ${props.theme.palette.light};`}
  }
`;

const Submit = styled.button`
  width: 59.2%;
  height: 48px;
  align-self: center;
  border-radius: 4px;
  margin-top: 1em;
  margin-right: 1.2%;
  background-color: ${({ theme }) => theme.palette.main};
  color: white;
  cursor: pointer;
`;
export default SignUpForm;
