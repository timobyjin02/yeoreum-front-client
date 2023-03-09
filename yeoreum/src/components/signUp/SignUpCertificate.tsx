import styled from '@emotion/styled';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { SignUpProfileProps } from '../../types/signUp';
import { uploadCertification } from '../../apis/signUp';
import {
  Container,
  Wrapper,
  P,
  AlertP,
  Label,
  Input,
  Submit,
  SubmitWrapper,
  ProfileInput as StudentIdInput,
} from './SignUpFormStyle';
import { SIGN_UP_CERTIFICATE_INITIAL } from '../../constants/signUpConst';
import useForm from '../../hooks/useForm';

const SignUpCertificate = ({ userInfo, setUserInfo }: SignUpProfileProps) => {
  const [user, setUser, onChangeValue, onChangeValidity] = useForm(
    SIGN_UP_CERTIFICATE_INITIAL,
  );
  const [studentIdImg, setStudentIdImg] = useState('');

  const onChangeMajor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeValue(name, value);
    onChangeValidity(name, true, '');
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (!files) return;
    setStudentIdImg(URL.createObjectURL(files[0]));
    onChangeValue(name, files[0]);
    onChangeValidity(name, true, '');
  };

  const onSubmit = async () => {
    Object.keys(user).map(key => {
      if (!user[key].validity) {
        alert(key + '가 유효하지 않습니다.');
        return;
      }
    });

    try {
      const response = await uploadCertification(
        userInfo.userNo,
        user.studentId.value,
        user.major.value,
      );
      setUserInfo({ ...response.user });
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };
  return (
    <Container onSubmit={e => e.preventDefault()}>
      {userInfo.status === 4 && (
        <AlertP>학적 인증이 반려되었습니다. 다시 신청해주세요!</AlertP>
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
      <StudentIdWrapper>
        <Label>
          <P>학생증</P>
          <ImageWrapper>
            {!studentIdImg ? (
              <AltDiv>
                <p>학생증 사진을 올려주세요!</p>
              </AltDiv>
            ) : (
              <Image
                src={studentIdImg}
                width="100"
                height="50"
                alt="studentIdImage"
              />
            )}
          </ImageWrapper>
          <StudentIdInput
            name="studentId"
            type="file"
            maxLength={30}
            placeholder="학과를 입력해주세요"
            onChange={onChangeFile}
          ></StudentIdInput>
        </Label>
      </StudentIdWrapper>
      <SubmitWrapper>
        <Submit onClick={onSubmit}>제출</Submit>
      </SubmitWrapper>
    </Container>
  );
};

const StudentIdWrapper = styled.div`
  min-height: 200px;
  margin-bottom: 1em;
  & p {
    margin-top: 1.4em;
    align-self: flex-start;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 74%;
  height: 100%;
  margin-top: 1.4em;
  cursor: pointer;
  & > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  & > p {
    height: 2;
    margin: 0;
    margin: 1.4em 0 0.4em;
    color: ${({ theme }) => theme.palette.main};
  }
`;

const AltDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.palette.line.grey};
  border: 1px solid ${({ theme }) => theme.palette.line.grey};
  border-radius: 4px;
  & > p {
    margin: 0;
    align-self: center;
    color: ${({ theme }) => theme.palette.font.subHeadline};
  }
`;

export default SignUpCertificate;
