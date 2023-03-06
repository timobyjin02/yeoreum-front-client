import { useState } from 'react';
import { UserInfoType } from '../../types/signUp';
import SignUpForm from './SignUpForm';
import SignUpProfileForm from './SignUpProfileForm';
import SignUpCertificate from './SignUpCertificate';

const SignUpBodyIndex = () => {
  const [userInfo, setUserInfo] = useState<any>({
    userNo: undefined,
    status: undefined,
  });
  const components = {
    undefined: <SignUpForm setUserInfo={setUserInfo} />,
    0: <SignUpProfileForm setUserInfo={setUserInfo} userInfo={userInfo} />,
    1: <SignUpCertificate setUserInfo={setUserInfo} />,
  };

  return <>{(components as any)[userInfo.status]}</>;
};

export default SignUpBodyIndex;
