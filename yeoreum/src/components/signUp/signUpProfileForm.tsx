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
} from './signUpFormStyle';

const SignUpProfileForm = () => {
  return (
    <Container>
      <GenderWrapper>
        <GenderLabel>
          <GenderLabel>
            남성
            <GenderInput type="radio" name="gender" />
          </GenderLabel>

          <GenderLabel>
            여성
            <GenderInput type="radio" name="gender" />
          </GenderLabel>
        </GenderLabel>
      </GenderWrapper>
      <Wrapper>
        <Label>
          <P>프로필</P>
          <Input name="nicnname" type="text"></Input>
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <P>닉네임</P>
          <Input name="nicnname" type="text"></Input>
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <P>학과</P>
          <Input name="description" type="text"></Input>
        </Label>
      </Wrapper>
      <Wrapper>
        <Label>
          <P>소개</P>
          <Input name="nicnname" type="text"></Input>
        </Label>
      </Wrapper>
      <SubmitLink href="">
        <Submit>제출</Submit>
      </SubmitLink>
    </Container>
  );
};

export default SignUpProfileForm;
