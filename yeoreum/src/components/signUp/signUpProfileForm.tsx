import { FocusEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
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
  GenderWrapper,
  GenderLabel,
  GenderInput,
  DescriptionInput,
  DescriptionWrapper,
  ProfileInput,
  ProfileImageWrapper,
} from './signUpFormStyle';
import {
  SIGN_UP_PROFILE_INITIAL,
  SIGN_UP_PROFILE_MESSAGE_BY_TYPE,
  SIGN_UP_PROFILE_REGEX_BY_TYPE,
} from '../../constants/signUpConst';
import useForm from '../../hooks/useForm';
import validateNickname from '../../apis/validateNickname';
import { ConstType, RegexType } from '../../types/signUp';

const SignUpProfileForm = () => {
  const MESSAGE_BY_TYPE: ConstType = SIGN_UP_PROFILE_MESSAGE_BY_TYPE;
  const REGEX_BY_TYPE: RegexType = SIGN_UP_PROFILE_REGEX_BY_TYPE;
  const [user, setUser, onChangeValue, onChangeValidity] = useForm(
    SIGN_UP_PROFILE_INITIAL,
  );
  const [validNicknameMessage, setValidNicknameMessage] = useState('');

  const onValidate = (name: string, value: string) => {
    const isValid = REGEX_BY_TYPE[name].test(value);
    return {
      isValid,
      message: isValid
        ? MESSAGE_BY_TYPE[name].success
        : MESSAGE_BY_TYPE[name].error,
    };
  };

  const onFocusNickname = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.length !== 0) return;
    const message = '2글자 이상 10글자 이하 영문, 한글, 숫자 조합';
    onChangeValidity(name, undefined, message);
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeValue(name, value);
    // 중복 검사 추가
    const { isValid, message } = onValidate(name, value);
    onChangeValidity(name, isValid, message);
  };

  const onClickNickname = () => {
    const isValid = validateNickname(user.nickname.value);
    console.log(isValid);
  };

  const onChangeMajor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onValidate(name, value);
    onChangeValue(name, value);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (value.length > 0) onChangeValidity(name, true, '');
    onChangeValue(name, value);
  };
  console.log(user);
  return (
    <Container onSubmit={e => e.preventDefault()}>
      <Wrapper>
        <Label>
          <P>프로필</P>
          <ProfileImageWrapper>
            <Image
              src="/anonymous.png"
              width="46"
              height="46"
              alt="profileImg"
            />
            <span>추가</span>
          </ProfileImageWrapper>
          <ProfileInput
            name="profileImg"
            type="file"
            onChange={onChange}
          ></ProfileInput>
        </Label>
      </Wrapper>
      <GenderWrapper>
        <P>성별</P>
        <GenderLabel>
          <GenderInput
            name="gender"
            value="1"
            type="radio"
            onChange={onChange}
          />
          <span>남자</span>
        </GenderLabel>
        <GenderLabel>
          <GenderInput
            name="gender"
            value="0"
            type="radio"
            onChange={onChange}
          />
          <span>여자</span>
        </GenderLabel>
      </GenderWrapper>
      <Wrapper>
        <Label>
          <P>닉네임</P>
          <Input
            name="nickname"
            type="text"
            maxLength={10}
            placeholder="닉네임을 입력해주세요"
            onFocus={onFocusNickname}
            onChange={onChangeNickname}
          ></Input>
        </Label>
        <Button onClick={onClickNickname}>중복확인</Button>
      </Wrapper>
      {user.nickname.message.length > 0 && (
        <AlertP success={user.nickname.validity}>
          {user.nickname.message}
        </AlertP>
      )}
      <Wrapper>
        <Label>
          <P>학과</P>
          <Input
            name="major"
            type="text"
            maxLength={30}
            placeholder="학과를 입력해주세요"
            onChange={onChangeMajor}
          ></Input>
        </Label>
      </Wrapper>
      <DescriptionWrapper>
        <Label>
          <P>소개</P>
          <DescriptionInput
            maxLength={150}
            placeholder="소개를 입력해주세요"
            onChange={onChange}
          />
        </Label>
      </DescriptionWrapper>
      <SubmitLink href="">
        <Submit>제출</Submit>
      </SubmitLink>
    </Container>
  );
};

export default SignUpProfileForm;
