import axios from 'axios';
import { getToken } from '../utils/user';

const tokenAxios = axios.create({
  baseURL: '/api',
});

tokenAxios.interceptors.request.use(
  (config: any) => {
    const accessToken = getToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// tokenAxios.interceptors.response.use(
//   response => {
//     const newToken = response.data.accessToken;
//     if (newToken) {
//       localStorage.setItem('token', newToken);
//       tokenAxios.defaults.headers.common[
//         'Authorization'
//       ] = `Bearer ${newToken}`;
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

export default tokenAxios;
