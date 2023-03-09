import { Dispatch, SetStateAction } from 'react';

export type Validity = boolean | undefined;

export interface ConstType {
  [key: string]: { [key: string]: string };
}

export interface RegexType {
  [key: string]: RegExp;
}

export interface AlertProps {
  success?: Validity;
}

export interface SignUpProps {
  setUserInfo: Dispatch<SetStateAction<UserInfoType>>;
}

export interface SignUpProfileProps {
  setUserInfo: Dispatch<SetStateAction<UserInfoType>>;
  userInfo: any;
}

export interface UserInfoType {
  [key: string]: Number | undefined;
}
