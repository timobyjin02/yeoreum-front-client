import { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import { Validity, ConstType, RegexType } from '../../types/signUp';
import useForm from '../../hooks/useForm';
import {
  SIGN_UP_INITIAL,
  SIGN_UP_MESSAGE_BY_TYPE,
  SIGN_UP_REGEX_BY_TYPE,
} from '../../constants/signUpConst';
import {
  Container,
  Wrapper,
  P,
  AlertP,
  Input,
  Label,
  Button,
  SubmitLink,
  Submit,
} from './signUpFormStyle';

const Form = () => {
  const MESSAGE_BY_TYPE: ConstType = SIGN_UP_MESSAGE_BY_TYPE;
  const REGEX_BY_TYPE: RegexType = SIGN_UP_REGEX_BY_TYPE;
  const [emailVerificationStatus, setEmailVerificationStatus] = useState(0);
  const [user, setUser, onChangeValue, onChangeValidity] =
    useForm(SIGN_UP_INITIAL);

  const onValidate = (
    type: string,
    curValue: string | Validity,
    targetValue?: string | boolean,
  ) => {
    const comparedValueTypes = ['emailCode', 'prePopulatedPassword'];
    const isValid = (() => {
      if (comparedValueTypes.includes(type)) {
        return curValue === targetValue;
      }
      return REGEX_BY_TYPE[type].test(curValue as string);
    })();

    return {
      isValid,
      message: isValid
        ? MESSAGE_BY_TYPE[type].success
        : MESSAGE_BY_TYPE[type].error,
    };
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
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

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { isValid, message } = onValidate(name, value);
    onChangeValue(name, value);
    onChangeValidity(name, isValid, message);
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
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

  const onFocusPassword = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length !== 0) return;

    const message = '특수문자, 영어, 숫자를 합친 6자 이상 14자 이하';
    onChangeValidity(name, undefined, message);
  }, []);

  const onFocusPasswordConfirm = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
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
      <SubmitLink href="/signup/profile/1">
        <Submit>다음</Submit>
      </SubmitLink>
    </Container>
  );
};

export default Form;
