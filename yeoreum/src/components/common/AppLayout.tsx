import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import React, { useEffect } from 'react';
import { getToken } from '../../utils/user';
import axios from 'axios';
import { useAppDispatch } from '../../store/hooks';
import { loginFail, loginSuccess } from '../../store/modules/login';

interface Children {
  children: React.ReactNode;
}

function AppLayout({ children }: Children) {
  const token = getToken() as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      // 백엔드에 /me 같은 경로로 유저 정보 api 만들어달라고 해야함
      (async () => {
        try {
          const {
            data: {
              response: { userProfile },
            },
          } = await axios('/api/users/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          dispatch(loginSuccess(userProfile));
        } catch (error) {
          dispatch(loginFail(error));
          alert('유저 정보 불러오기 에러 발생');
          console.log('error', error);
        }
      })();
    }
  }, [token]);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
