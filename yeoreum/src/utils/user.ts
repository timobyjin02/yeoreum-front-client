import axios from 'axios';

export const getToken = () => {
  if (typeof window !== 'undefined') return localStorage.getItem('token');
  return undefined;
};

export const login = async () => {
  try {
    const {
      data: {
        response: {
          user: { accessToken: token },
        },
      },
    } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
      email: `${process.env.NEXT_PUBLIC_ID}`,
      password: `${process.env.NEXT_PUBLIC_PASSWORD}`,
    });

    localStorage.setItem('token', token);
    alert('로그인 완료');
  } catch (error) {
    alert('에러 발생');
  }
};
