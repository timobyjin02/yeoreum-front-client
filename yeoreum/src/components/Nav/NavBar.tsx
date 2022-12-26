import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import useScroll from '../../hooks/useScroll';

interface NavProps {
  userOpen: boolean;
  setUserOpen: (state: boolean | ((prev: boolean) => boolean)) => void;
}

export function NavUsual({ userOpen, setUserOpen }: NavProps) {
  const { y } = useScroll();

  return (
    <>
      <Container show={y > 0 ? true : false}>
        <NavContainer>
          <div style={{ display: 'flex' }}>
            <YeoreumLogo>로고</YeoreumLogo>
            <NavMenu>
              <NavMenuItem>게시판</NavMenuItem>
              <NavMenuItem>친구</NavMenuItem>
              <NavMenuItem>채팅</NavMenuItem>
            </NavMenu>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ImageAlarm
              alt="alarm"
              src="/vercel.svg"
              width={40}
              height={40}
              priority
            />
            <ProfileImg onClick={() => setUserOpen(prev => !prev)} />
            <Arrow toggle={userOpen} />
          </div>
        </NavContainer>
      </Container>
      <div style={{ height: '60px', width: '100%' }} />
    </>
  );
}

export function NavService({ userOpen, setUserOpen }: NavProps) {
  return (
    <>
      <Container show>
        <NavContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <YeoreumLogo service>로고</YeoreumLogo>
            <div style={{ fontWeight: 600, fontSize: '18px' }}>고객센터</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <NavMenu service>
              <NavMenuItem>문의하기</NavMenuItem>
              <NavMenuItem>문의내역</NavMenuItem>
            </NavMenu>
            <ProfileImg onClick={() => setUserOpen(prev => !prev)} />
            <Arrow toggle={userOpen} />
          </div>
        </NavContainer>
      </Container>
      <div style={{ height: '60px', width: '100%' }} />
    </>
  );
}

const ImageAlarm = styled(Image)`
  margin-right: 20px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Container = styled.nav<{ show: boolean }>`
  z-index: 99999;
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
  color: #ff2b37;
  margin-right: ${({ service }) => (service ? '30px' : '50px')};
  font-size: 30px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
  }
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
  height: 40px;
  align-items: center;
  padding: 0 24px;
  font-weight: 600;
  display: flex;
  min-width: 48px;
  &:hover {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 4%);
    cursor: pointer;
  }
`;

const ProfileImg = styled.div`
  width: 33px;
  height: 33px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: red;
  display: block;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const Arrow = styled.div<{ toggle: boolean }>`
  width: 4px;
  height: 4px;
  margin: ${({ toggle }) => (toggle ? '3px 0 0' : '0 0 3px')};
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: ${({ toggle }) => (toggle ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: 0.1s all;
  @media (max-width: 640px) {
    display: none;
  }
`;
