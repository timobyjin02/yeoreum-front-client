import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../ModalPortal/ModalPortal';
import UserModal from '../UserModal/UserModal';
import { NavService, NavUsual } from './NavBar';

function Nav() {
  const [userOpen, setUserOpen] = useState(false);
  const { pathname } = useRouter();
  const isInService = pathname.slice(0, 8) === '/service';

  return (
    <>
      {isInService ? (
        <NavService userOpen={userOpen} setUserOpen={setUserOpen} />
      ) : (
        <NavUsual userOpen={userOpen} setUserOpen={setUserOpen} />
      )}
      {userOpen && (
        <ModalPortal>
          <UserModal onClose={() => setUserOpen(false)} />
        </ModalPortal>
      )}
    </>
  );
}

export default Nav;
