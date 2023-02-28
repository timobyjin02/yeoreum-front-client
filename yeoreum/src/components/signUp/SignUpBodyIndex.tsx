import { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignUpProfileForm from './SignUpProfileForm';
import SignUpCertificate from './SignUpCertificate';

const SignUpBodyIndex = () => {
  const [userStatus, setUserStatus] = useState<any>();
  const components = {
    undefined: <SignUpForm setUserStatus={setUserStatus} />,
    0: <SignUpProfileForm setUserStatus={setUserStatus} />,
    1: <SignUpCertificate setUserStatus={setUserStatus} />,
  };
  return <>{(components as any)[userStatus]}</>;
};

export default SignUpBodyIndex;
