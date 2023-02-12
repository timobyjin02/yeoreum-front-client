import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Alarm from '../alarm/Alarm';
import UserModal from '../userModal/UserModal';
import Link from 'next/link';
import { login } from '../../utils/user';
import { useRouter } from 'next/router';
import Image from 'next/image';

// 임시 유저 타입
export interface User {
  userNo: number;
  email: string;
  nickname: string;
  major: string;
  gender: false;
  description: string;
  profileImage: string;
  grade: number;
}

interface NavProps {
  userData?: Pick<User, 'profileImage' | 'nickname'>;
  token?: string;
  authenticated?: boolean;
  setAuthenticated?: (state: boolean | ((prev: boolean) => boolean)) => void;
  setHamburger?: (state: boolean | ((prev: boolean) => boolean)) => void;
}

export function NavUsual({
  userData,
  token,
  authenticated,
  setAuthenticated,
  setHamburger,
}: NavProps) {
  useEffect(() => {
    if (token && setAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Container show>
        <NavContainer>
          <ArrangeContainer>
            <Link href="/">
              <YeoreumLogo alt="logo" src="/logo.png" />
            </Link>
            <NavMenu>
              <NavMenuItem href="/board">
                <Image
                  width={22}
                  height={22}
                  alt="board"
                  src="/icons/clipboard.svg"
                />
                <MenuText>게시판</MenuText>
              </NavMenuItem>
              <NavMenuItem href="/friend">
                <Image
                  width={22}
                  height={22}
                  alt="friends"
                  src="/icons/users.svg"
                />
                <MenuText>친구</MenuText>
              </NavMenuItem>
              <NavMenuItem href="/chatting">
                <Image
                  width={22}
                  height={22}
                  alt="chat"
                  src="/icons/message.svg"
                />
                <MenuText>채팅</MenuText>
              </NavMenuItem>
            </NavMenu>
          </ArrangeContainer>
          {authenticated ? (
            <ArrangeContainer>
              <Alarm />
              <UserModal userData={userData} />
            </ArrangeContainer>
          ) : (
            <LoginButton
              onClick={() => {
                login();
              }}
            >
              로그인
            </LoginButton>
          )}
          <HamburgerButton onClick={() => setHamburger?.(true)}>
            <Image
              alt="hamburger"
              src="/icons/hamburger.svg"
              width={36}
              height={36}
            />
          </HamburgerButton>
        </NavContainer>
      </Container>
      <Kernel />
    </>
  );
}

const MenuText = styled.span`
  margin-left: 4px;
`;

export function NavService({ authenticated, setHamburger }: NavProps) {
  const router = useRouter();

  return (
    <>
      <Container show>
        <NavContainer>
          <ArrangeContainer>
            <YeoreumLogo alt="logo" src="/logo.png" service />
            <ServiceTitle>고객센터</ServiceTitle>
          </ArrangeContainer>

          {authenticated ? (
            <ArrangeContainer>
              <NavMenu service>
                <NavMenuItem href="/">문의하기</NavMenuItem>
                <NavMenuItem href="/">문의내역</NavMenuItem>
              </NavMenu>
              <UserModal />
            </ArrangeContainer>
          ) : (
            <LoginButton onClick={() => router.push('/login')}>
              로그인
            </LoginButton>
          )}
          <HamburgerButton onClick={() => setHamburger?.(true)} />
        </NavContainer>
      </Container>
      <Kernel />
    </>
  );
}

const Kernel = styled.div`
  height: 60px;
  width: 100%;
`;

const ArrangeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.nav<{ show: boolean }>`
  color: #181818;
  z-index: 9999;
  display: flex;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: ${({ show }) => (show ? '0 1px 2px rgba(0, 0, 0, 25%)' : 'none')};
  background-color: ${({ show }) =>
    show ? 'white' : 'rgba(255, 255, 255, 0)'};
  transition-timing-function: ease-in;
  transition: all 0.2s;
`;

const NavContainer = styled.div`
  box-sizing: border-box;
  min-width: 975px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 975px) {
    min-width: calc(100% - 20px);
  }
`;

const YeoreumLogo = styled.img<{ service?: boolean }>`
  margin-top: 6px;
  height: 32px;
  margin-bottom: 1px;
  color: lightgray;
  margin-right: ${({ service }) => (service ? '30px' : '50px')};
  font-size: 30px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
  }
`;

const ServiceTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

const NavMenu = styled.div<{ service?: boolean }>`
  display: flex;
  align-items: center;
  margin-right: ${({ service }) => (service ? '80px' : 'none')};

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavMenuItem = styled(Link)`
  position: relative;
  height: 40px;
  align-items: center;
  padding: 0 20px;
  font-size: 0.875rem;
  font-weight: 550;
  display: flex;
  min-width: 48px;
  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 5%);
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  margin-right: 6px;
  width: 86px;
  height: 40px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.font.white};
  background-color: ${({ theme }) => theme.palette.main};
  font-weight: 500;
  font-size: 14px;

  cursor: pointer;

  &:active {
    background-color: ${({ theme }) => theme.palette.dark};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 5%);
  }

  @media (min-width: 641px) {
    display: none;
  }
`;
