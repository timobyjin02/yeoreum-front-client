import { FocusEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { SignUpProfileProps } from '../../types/signUp';
import {
  Container,
  Wrapper,
  P,
  AlertP,
  Input,
  Label,
  Button,
  SubmitWrapper,
  Submit,
  GenderWrapper,
  GenderLabel,
  GenderInput,
  DescriptionInput,
  DescriptionWrapper,
  ProfileInput,
  ProfileImageWrapper,
} from './SignUpFormStyle';
import {
  SIGN_UP_PROFILE_INITIAL,
  SIGN_UP_PROFILE_MESSAGE_BY_TYPE,
  SIGN_UP_PROFILE_REGEX_BY_TYPE,
} from '../../constants/signUpConst';
import useForm from '../../hooks/useForm';
import { ConstType, RegexType } from '../../types/signUp';
import { validateNickname, createProfile } from '../../apis/signUp';

const SignUpProfileForm = ({ setUserInfo, userInfo }: SignUpProfileProps) => {
  const MESSAGE_BY_TYPE: ConstType = SIGN_UP_PROFILE_MESSAGE_BY_TYPE;
  const REGEX_BY_TYPE: RegexType = SIGN_UP_PROFILE_REGEX_BY_TYPE;
  const [user, setUser, onChangeValue, onChangeValidity] = useForm(
    SIGN_UP_PROFILE_INITIAL,
  );
  const [userImg, setUserImg] = useState('');
  const [nicknameDuplicationStatus, setNicknameDuplicationStatus] = useState({
    message: '',
    duplication: undefined,
  });
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (!files) return;
    setUserImg(URL.createObjectURL(files[0]));
    onChangeValue(name, files[0]);
    onChangeValidity(name, true, '');
  };
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
    setNicknameDuplicationStatus(pre => ({
      duplication: undefined,
      message: '중복확인을 눌러주세요.',
    }));
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeValue(name, value);
    const { isValid, message } = onValidate(name, value);
    onChangeValidity(name, isValid, message);
    setNicknameDuplicationStatus(pre => ({
      duplication: undefined,
      message: '중복확인을 눌러주세요.',
    }));
  };

  const onClickNickname = async () => {
    const value = user.nickname.value;
    const name = 'nickname';
    if (!user.nickname.validity) return;

    try {
      const isValid = await validateNickname(user.nickname.value);
      console.log(isValid);
      setNicknameDuplicationStatus({
        message: isValid
          ? MESSAGE_BY_TYPE.nicknameDuplication.success
          : MESSAGE_BY_TYPE.nicknameDuplication.error,
        duplication: isValid,
      });
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (value.length > 0) onChangeValidity(name, true, '');
    onChangeValue(name, value);
  };

  const onSubmit = async () => {
    if (!nicknameDuplicationStatus.duplication) {
      alert('닉네임 중복 확인버튼을 눌러주세요');
      return;
    }

    for (let key in user) {
      if (!user[key].validity) {
        alert(key + '가 유효하지 않습니다.');
        return;
      }
    }

    try {
      const response = await createProfile(
        userInfo.userNo,
        user.nickname.value,
        user.gender.value,
        user.description.value,
        user.file.value,
      );
      setUserInfo({ ...response.user });
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };
  return (
    <Container onSubmit={e => e.preventDefault()}>
      <Wrapper>
        <Label>
          <P>프로필</P>
          <ProfileImageWrapper>
            <Image
              src={userImg ? userImg : '/anonymous.png'}
              width="46"
              height="46"
              alt="profileImg"
            />
            <span>추가</span>
          </ProfileImageWrapper>
          <ProfileInput
            name="file"
            type="file"
            onChange={onChangeFile}
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
      {nicknameDuplicationStatus.message.length > 0 && (
        <AlertP success={nicknameDuplicationStatus.duplication}>
          {nicknameDuplicationStatus.message}
        </AlertP>
      )}

      <DescriptionWrapper>
        <Label>
          <P>소개</P>
          <DescriptionInput
            name="description"
            maxLength={150}
            placeholder="소개를 입력해주세요"
            onChange={onChange}
          />
        </Label>
      </DescriptionWrapper>
      <SubmitWrapper>
        <Submit onClick={onSubmit}>다음</Submit>
      </SubmitWrapper>
    </Container>
  );
};

export default SignUpProfileForm;
