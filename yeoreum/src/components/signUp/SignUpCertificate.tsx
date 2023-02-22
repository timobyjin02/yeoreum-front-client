import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import {
  Container,
  Wrapper,
  P,
  Label,
  Input,
  Submit,
  SubmitWrapper,
  ProfileInput as StudentIdInput,
} from './signUpFormStyle';
import {
  SIGN_UP_CERTIFICATE_INITIAL,
  SIGN_UP_PROFILE_REGEX_BY_TYPE,
  SIGN_UP_CERTIFICATE_MESSAGE_BY_TYPE,
} from '../../constants/signUpConst';
import useForm from '../../hooks/useForm';

const SignUpCertificate = () => {
  const MESSAGE_BY_TYPE = SIGN_UP_CERTIFICATE_MESSAGE_BY_TYPE;
  const MAJOR_REGEX = SIGN_UP_PROFILE_REGEX_BY_TYPE.major;
  const router = useRouter();
  const USER_NO = router.query.userNo;
  const [user, setUser, onChangeValue, onChangeValidity] = useForm(
    SIGN_UP_CERTIFICATE_INITIAL,
  );
  const [studentIdImg, setStudentIdImg] = useState('');
  const onChangeMajor = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeValue(name, value);
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (!files) return;
    setStudentIdImg(URL.createObjectURL(files[0]));
    onChangeValue(name, files[0]);
  };

  const onSubmit = () => {
    console.log(user);
  };
  return (
    <Container onSubmit={e => e.preventDefault()}>
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
            {/* <p>업로드</p> */}
            {!studentIdImg ? (
              <AltDiv>
                <p>학생을 사진을 올려주세요!</p>
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
