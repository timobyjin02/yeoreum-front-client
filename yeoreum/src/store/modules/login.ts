import { createSlice } from '@reduxjs/toolkit';

export interface UserProfileDataType {
  [key: string]: any;
  userNo?: number;
  nickname: string;
  profileImage: string;
}

export interface LoginStateType {
  isLoggedIn?: boolean;
  userData: UserProfileDataType | null;
  error?: any;
}

const initialState: LoginStateType = {
  isLoggedIn: false,
  userData: null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.isLoggedIn = false;
      state.userData = null;
      state.error = action.payload;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.userData = null;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, loginFail, logout } = loginSlice.actions;

export { loginSlice };
