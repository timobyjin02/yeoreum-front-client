import { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignUpProfileForm from './SignUpProfileForm';
import SignUpCertificate from './SignUpCertificate';
import SignUpNotice from './SignUpNotice';

const SignUpBodyIndex = () => {
  const [userInfo, setUserInfo] = useState<any>({
    userNo: undefined,
    status: undefined,
  });

  const components = {
    undefined: <SignUpForm setUserInfo={setUserInfo} />,
    0: <SignUpProfileForm setUserInfo={setUserInfo} userInfo={userInfo} />,
    1: <SignUpCertificate setUserInfo={setUserInfo} userInfo={userInfo} />,
    2: <SignUpNotice userInfo={userInfo} />,
    3: <SignUpNotice userInfo={userInfo} />,
    4: <SignUpCertificate setUserInfo={setUserInfo} userInfo={userInfo} />,
  };

  return <>{(components as any)[userInfo.status]}</>;
};

export default SignUpBodyIndex;
