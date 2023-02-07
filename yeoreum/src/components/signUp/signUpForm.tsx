import styled from '@emotion/styled';
import React, { useCallback, useState } from 'react';
import { Validity, AlertProps } from '../../types/signUp';
import useInput from '../../hooks/useForm';
import {
  SIGN_UP_INITIAL,
  SIGN_UP_MESSAGE_BY_TYPE,
  SIGN_UP_REGEX_BY_TYPE,
} from '../../constants/signUpConst';
import Link from 'next/link';

const Form = () => {
  const MESSAGE_BY_TYPE = SIGN_UP_MESSAGE_BY_TYPE;
  const REGEX_BY_TYPE = SIGN_UP_REGEX_BY_TYPE;
  const [emailVerificationStatus, setEmailVerificationStatus] = useState(0);
  const [user, setUser, onChangeValue, onChangeValidity] =
    useInput(SIGN_UP_INITIAL);

  const onValidate = (
    type: string,
    curValue: string | Validity,
    targetValue?: string | boolean,
  ) => {
    const comparedValueTypes = [
      'emailCode',
      'prePopulatedPassword',
      'passwordConfirm',
    ];
    const isValid = (() => {
      if (comparedValueTypes.includes(type)) {
        return curValue === targetValue;
      }
      return (REGEX_BY_TYPE as any)[type].test(curValue);
    })();

    return {
      isValid,
      message: isValid
        ? (MESSAGE_BY_TYPE as any)[type].success
        : (MESSAGE_BY_TYPE as any)[type].error,
    };
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeValue(name, value);
  };

  const onClickEmail = useCallback(() => {
    const { isValid, message } = onValidate('email', user.email.value);
    onChangeValidity('email', isValid, message);
    isValid && setEmailVerificationStatus(1);
  }, [user.email.value]);

  const onClickEmailCode = useCallback(() => {
    const TEMP_CODE = '111111';
    const { isValid, message } = onValidate(
      'emailCode',
      user.emailCode.value,
      TEMP_CODE,
    );
    onChangeValidity('emailCode', isValid, message);
    isValid && setEmailVerificationStatus(2);
  }, [user.emailCode.value]);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const { isValid, message } = onValidate(name, value);
      onChangeValue(name, value);
      onChangeValidity(name, isValid, message);
    },
    [],
  );

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const {
        isValid: isValidPrePopulatedPassword,
        message: prePopulatedPasswordMessage,
      } = onValidate('prePopulatedPassword', user.password.validity, true);
      if (!isValidPrePopulatedPassword) {
        onChangeValidity(
          name,
          isValidPrePopulatedPassword,
          prePopulatedPasswordMessage,
        );
        return;
      }

      onChangeValue(name, value);

      const {
        isValid: isValidPasswordConfirm,
        message: passwordConfirmMessage,
      } = onValidate(name, value, user.password.value);

      onChangeValidity(name, isValidPasswordConfirm, passwordConfirmMessage);
    },
    [user.password.validity, user.password.value, user.passwordConfirm.value],
  );
  const onFocusPassword = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (value.length !== 0) return;

      const message = '특수문자, 영어, 숫자를 합친 6자 이상 14자 이하';
      onChangeValidity(name, undefined, message);
    },
    [],
  );

  const onFocusPasswordConfirm = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (value.length !== 0) return;

      const { message } = onValidate(
        'prePopulatedPassword',
        user.password.validity,
        true,
      );
      onChangeValidity(name, undefined, message);
    },
    [],
  );
  return (
    <Container onSubmit={e => e.preventDefault()}>
      <Wrapper>
        <Label>
          <P>이메일</P>
          <Input
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={onChangeEmail}
          />
        </Label>
        {emailVerificationStatus === 0 ? (
          <Button onClick={onClickEmail}>인증하기</Button>
        ) : (
          <Button disabled={true}>전송됨</Button>
        )}
      </Wrapper>
      {!user.email.validity && (
        <AlertP success={user.email.validity}>{user.email.message}</AlertP>
      )}
      {emailVerificationStatus !== 0 ? (
        <Wrapper>
          <Label>
            <P>00:00</P>
            {emailVerificationStatus === 1 ? (
              <Input
                name="emailCode"
                type="text"
                maxLength={6}
                onChange={onChangeEmail}
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
          {emailVerificationStatus === 1 ? (
            <Button onClick={onClickEmailCode}>인증하기</Button>
          ) : null}
        </Wrapper>
      ) : null}
      {user.emailCode.message.length > 0 && (
        <AlertP success={user.emailCode.validity}>
          {user.emailCode.message}
        </AlertP>
      )}
      <Wrapper>
        <Label>
          <P>비밀번호</P>
          <Input
            name="password"
            type="password"
            maxLength={14}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
            onFocus={onFocusPassword}
          />
        </Label>
      </Wrapper>
      {user.password.message.length > 0 && (
        <AlertP success={user.password.validity}>
          {user.password.message}
        </AlertP>
      )}
      <Wrapper>
        <Label>
          <P>비밀번호 확인</P>
          <Input
            name="passwordConfirm"
            type="password"
            maxLength={14}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePasswordConfirm}
            onFocus={onFocusPasswordConfirm}
          />
        </Label>
      </Wrapper>
      {user.passwordConfirm.message.length > 0 && (
        <AlertP success={user.passwordConfirm.validity}>
          {user.passwordConfirm.message}
        </AlertP>
      )}
      <SubmitLink as="/signup/profile" href="/profile/1">
        <Submit>다음</Submit>
      </SubmitLink>
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
  color: ${({ theme }) => theme.palette.main};
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
      `color: ${props.theme.palette.main};
      background-color: ${props.theme.palette.disable};`}
  }
`;

const SubmitLink = styled(Link)`
  display: flex;
  justify-content: center;
`;
const Submit = styled.button`
  width: 59.2%;
  height: 48px;
  /* align-self: center; */
  border-radius: 4px;
  margin-top: 1em;
  margin-right: 1.4%;
  background-color: ${({ theme }) => theme.palette.main};
  color: white;
  cursor: pointer;
  :active {
    ${props =>
      !props.disabled && `background-color: ${props.theme.palette.dark};`}
  }
`;
export default Form;
