import SignUpContainer from '../../components/signUp/signUpContainer';
import SignUpBody from '../../components/signUp/signUpBody';
import SignUpHeader from '../../components/signUp/signUpHeader';
import SignUpForm from '../../components/signUp/signUpForm';

const signUp = () => (
  <SignUpContainer>
    <SignUpHeader />
    <SignUpBody>
      <SignUpForm />
    </SignUpBody>
  </SignUpContainer>
);

export default signUp;
