import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import React, { useEffect, useState } from 'react';
import { getToken } from '../../utils/user';
import { useAppDispatch, useLoginState } from '../../store/hooks';
import { loginSuccess } from '../../store/modules/login';
import jwtDecode from 'jwt-decode';

interface Children {
  children: React.ReactNode;
}

function AppLayout({ children }: Children) {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const token = getToken() as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      setState(() => jwtDecode(token));
    }
    setLoading(false);
  }, []);

  if (state) {
    dispatch(loginSuccess(state));
  }

  return (
    <>
      {loading || (
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
