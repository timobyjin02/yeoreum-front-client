import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import useScroll from '../../hooks/useScroll';
import Alarm from '../alarm/Alarm';

interface NavProps {
  userOpen: boolean;
  setUserOpen: (state: boolean | ((prev: boolean) => boolean)) => void;
  setHamburger: (state: boolean | ((prev: boolean) => boolean)) => void;
}

export function NavUsual({ userOpen, setUserOpen, setHamburger }: NavProps) {
  const [authenticated, setAuthenticated] = useState(false);

  // const { y } = useScroll();

  return (
    <>
      <Container show>
        <NavContainer>
          <ArrangeContainer>
            <YeoreumLogo>로고</YeoreumLogo>
            <NavMenu>
              <NavMenuItem>게시판</NavMenuItem>
              <NavMenuItem>친구</NavMenuItem>
              <NavMenuItem>
                채팅
                <ChatAlarm>3</ChatAlarm>
              </NavMenuItem>
            </NavMenu>
          </ArrangeContainer>
          {authenticated ? (
            <ArrangeContainer>
              {/* <ImageAlarm
                alt="alarm"
                src="/vercel.svg"
                width={40}
                height={40}
                priority
                onClick={() => setAlarmOpen(true)}
              /> */}
              <Alarm />
              <ProfileWrapper onClick={() => setUserOpen(prev => !prev)}>
                <ProfileImg />
                <Arrow toggle={userOpen} />
              </ProfileWrapper>
            </ArrangeContainer>
          ) : (
            <LoginButton onClick={() => setAuthenticated(true)}>
              로그인
            </LoginButton>
          )}
          <HamburgerButton onClick={() => setHamburger(true)} />
        </NavContainer>
      </Container>
      <Kernel />
    </>
  );
}

export function NavService({ userOpen, setUserOpen, setHamburger }: NavProps) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Container show>
        <NavContainer>
          <ArrangeContainer>
            <YeoreumLogo service>로고</YeoreumLogo>
            <ServiceTitle>고객센터</ServiceTitle>
          </ArrangeContainer>

          {authenticated ? (
            <ArrangeContainer>
              <NavMenu service>
                <NavMenuItem>문의하기</NavMenuItem>
                <NavMenuItem>문의내역</NavMenuItem>
              </NavMenu>
              <ProfileWrapper onClick={() => setUserOpen(prev => !prev)}>
                <ProfileImg />
                <Arrow toggle={userOpen} />
              </ProfileWrapper>
            </ArrangeContainer>
          ) : (
            <LoginButton onClick={() => setAuthenticated(true)}>
              로그인
            </LoginButton>
          )}
          <HamburgerButton onClick={() => setHamburger(true)} />
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

// const ImageAlarm = styled(Image)`
//   margin-right: 20px;
//   @media (max-width: 640px) {
//     display: none;
//   }
// `;

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
    min-width: 95vw;
  }
`;

const YeoreumLogo = styled.div<{ service?: boolean }>`
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

const NavMenuItem = styled.div`
  position: relative;
  height: 40px;
  align-items: center;
  padding: 0 24px;
  font-size: 0.875rem;
  font-weight: 550;
  display: flex;
  min-width: 48px;
  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 4%);
    cursor: pointer;
  }
`;

const ChatAlarm = styled.div`
  position: absolute;
  inset: 0 0 auto auto;
  width: 18px;
  height: 18px;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 9px;
  background-color: red;
  color: white;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const ProfileImg = styled.div`
  width: 33px;
  height: 33px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: lightgray;
  display: block;
`;

const Arrow = styled.div<{ toggle: boolean }>`
  width: 5px;
  height: 5px;
  margin: ${({ toggle }) => (toggle ? '1px 0 0' : '0 0 1px')};
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: ${({ toggle }) => (toggle ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: 0.1s all;
`;

const LoginButton = styled.button`
  margin-right: 6px;
  width: 86px;
  height: 40px;
  border-radius: 8px;
  background-color: #ddd;
  color: #555;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid #bbb;

  cursor: pointer;

  @media (max-width: 640px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: gray;
  display: none;

  cursor: pointer;

  @media (max-width: 640px) {
    display: block;
  }
`;
