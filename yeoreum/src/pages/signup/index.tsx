import { useState } from 'react';
import SignUpContainer from '../../components/signUp/signUpContainer';
import SignUpBody from '../../components/signUp/SignUpBody';
import SignUpHeader from '../../components/signUp/signUpHeader';
import SignUpForm from '../../components/signUp/SignUpForm';
import SignUpBodyIndex from '../../components/signUp/SignUpBodyIndex';
import SignUpProfileForm from '../../components/signUp/SignUpProfileForm';
import SignUpCertificate from '../../components/signUp/SignUpCertificate';

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <SignUpBody>
        <SignUpBodyIndex />
      </SignUpBody>
    </SignUpContainer>
  );
};

export default SignUp;
