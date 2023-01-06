import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modalPortal/ModalPortal';
import UserModal from '../userModal/UserModal';
import { NavService, NavUsual } from './NavBar';
import Hamburger from '../userModal/Hamburger';
import useResize from '../../hooks/useResize';

function Nav() {
  const [userOpen, setUserOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const { pathname } = useRouter();
  const isInService = pathname.slice(0, 8) === '/service';

  useResize('above', 640, () => setHamburger(false));
  useResize('below', 640, () => setUserOpen(false));

  return (
    <>
      {isInService ? (
        <NavService
          userOpen={userOpen}
          setUserOpen={setUserOpen}
          setHamburger={setHamburger}
        />
      ) : (
        <NavUsual
          userOpen={userOpen}
          setUserOpen={setUserOpen}
          setHamburger={setHamburger}
        />
      )}
      {userOpen && (
        <ModalPortal>
          <UserModal onClose={() => setUserOpen(false)} />
        </ModalPortal>
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
