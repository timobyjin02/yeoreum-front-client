import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modalPortal/ModalPortal';
import { NavService, NavUsual } from './NavBar';
import Hamburger from '../userModal/Hamburger';
import useResize from '../../hooks/useResize';
import { getToken } from '../../utils/user';

function Nav() {
  const [authenticated, setAuthenticated] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const { pathname } = useRouter();
  const isInService = pathname.slice(0, 8) === '/service';
  const token = getToken() as string;

  useResize('above', 640, () => setHamburger(false));

  return (
    <>
      {isInService ? (
        <NavService
          token={token}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setHamburger={setHamburger}
        />
      ) : (
        <NavUsual
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
