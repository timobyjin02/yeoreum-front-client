import SignUpContainer from '../../../components/signUp/signUpContainer';
import SignUpBody from '../../../components/signUp/signUpBody';
import SignUpHeader from '../../../components/signUp/signUpHeader';
import SignUpProfileForm from '../../../components/signUp/signUpProfileForm';

const SignUpProfile = () => (
  <SignUpContainer>
    <SignUpHeader />
    <SignUpBody>
      <SignUpProfileForm />
    </SignUpBody>
  </SignUpContainer>
);

export default SignUpProfile;
