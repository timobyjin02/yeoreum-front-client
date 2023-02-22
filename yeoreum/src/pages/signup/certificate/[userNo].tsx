import SignUpContainer from '../../../components/signUp/signUpContainer';
import SignUpBody from '../../../components/signUp/signUpBody';
import SignUpHeader from '../../../components/signUp/signUpHeader';
import SignUpCertificate from '../../../components/signUp/SignUpCertificate';

const Certificate = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <SignUpBody>
        <SignUpCertificate />
      </SignUpBody>
    </SignUpContainer>
  );
};

export default Certificate;
