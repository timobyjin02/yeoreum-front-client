import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modalPortal/ModalPortal';
import { NavService, NavUsual } from './NavBar';
import Hamburger from '../userModal/Hamburger';
import useResize from '../../hooks/useResize';

function Nav() {
  const [hamburger, setHamburger] = useState(false);
  const { pathname } = useRouter();
  const isInService = pathname.slice(0, 8) === '/service';

  useResize('above', 640, () => setHamburger(false));

  return (
    <>
      {isInService ? (
        <NavService setHamburger={setHamburger} />
      ) : (
        <NavUsual setHamburger={setHamburger} />
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
