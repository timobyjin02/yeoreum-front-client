import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modalPortal/ModalPortal';
import { NavService, NavUsual } from './NavBar';
import Hamburger from '../userModal/Hamburger';
import useResize from '../../hooks/useResize';
import { getToken } from '../../utils/user';
import axios from 'axios';

function Nav() {
  const { pathname } = useRouter();
  const isInService = pathname.slice(0, 8) === '/service';
  const token = getToken() as string;

  const [authenticated, setAuthenticated] = useState(false);
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
    (async () => {
      const {
        data: {
          response: { userProfile: data },
        },
      } = await axios.get(`/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(data);
    })();
  }, []);

  useResize('above', 640, () => setHamburger(false));

  return (
    <>
      {isInService ? (
        <NavService authenticated={authenticated} setHamburger={setHamburger} />
      ) : (
        <NavUsual
          userData={userData}
          token={token}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setHamburger={setHamburger}
        />
      )}
      {hamburger && (
        <ModalPortal>
          <Hamburger onClose={() => setHamburger(false)} />
        </ModalPortal>
      )}
    </>
  );
}

export default Nav;
