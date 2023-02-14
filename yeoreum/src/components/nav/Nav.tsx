import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modalPortal/ModalPortal';
import { NavUsual } from './NavBar';
import Hamburger from '../userModal/Hamburger';
import useResize from '../../hooks/useResize';
import { getToken } from '../../utils/user';
import { requestGetUserData } from '../../apis/notices';

function Nav() {
  const { pathname } = useRouter();
  // 고객센터 페이지인지 아닌지
  const isServicePage = pathname.slice(0, 8) === '/service';

  const token = getToken() as string;

  const [hamburger, setHamburger] = useState(false);
  const [userData, setUserData] = useState({
    userNo: 0,
    email: '',
    nickname: '',
    major: '',
    gender: false,
    description: '',
    profileImage: '',
    grade: 0,
  });

  useEffect(() => {
    if (token) {
      (async () => {
        const { userProfile } = await requestGetUserData(token);
        setUserData(userProfile);
      })();
    }
  }, []);

  useResize('above', 640, () => setHamburger(false));

  return (
    <>
      <NavUsual
        isServicePage={isServicePage}
        userData={userData}
        token={token}
        setHamburger={setHamburger}
      />
      {hamburger && (
        <ModalPortal>
          <Hamburger onClose={() => setHamburger(false)} />
        </ModalPortal>
      )}
    </>
  );
}

export default Nav;
