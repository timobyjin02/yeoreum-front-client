import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import React, { useEffect, useState } from 'react';
import { getToken } from '../../utils/user';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/modules/login';
import jwtDecode from 'jwt-decode';

interface Children {
  children: React.ReactNode;
}

function AppLayout({ children }: Children) {
  const [state, setState] = useState();
  const token = getToken() as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      setState(jwtDecode(token));
    }
  }, []);

  if (state) {
    dispatch(loginSuccess(state));
  }

  return (
    <>
      {state && (
        <>
          <Nav />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

export default AppLayout;
