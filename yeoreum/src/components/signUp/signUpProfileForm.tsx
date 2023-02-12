import { FocusEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import {
  Container,
  Wrapper,
  P,
  AlertP,
  Input,
  Label,
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

const SignUpProfileForm = () => {
  const MESSAGE_BY_TYPE = SIGN_UP_PROFILE_MESSAGE_BY_TYPE;
  const REGEX_BY_TYPE = SIGN_UP_PROFILE_REGEX_BY_TYPE;
  const [user, setUser, onChangeValue, onChangeValidity] = useForm(
    SIGN_UP_PROFILE_INITIAL,
  );

  const onValidate = (name: string, value: string) => {
    const isValid = (REGEX_BY_TYPE as any)[name].test(value);
    return {
      isValid,
      message: isValid
        ? (MESSAGE_BY_TYPE as any)[name].success
        : (MESSAGE_BY_TYPE as any)[name].error,
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
    <Container>
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
            maxLength={16}
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
