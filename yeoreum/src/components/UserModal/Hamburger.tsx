import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import useLockScroll from '../../hooks/useLockScroll';
import useOutsideClick from '../../hooks/useOutsideClick';
import Menu from './Menu';

interface HamburgerProps {
  onClose: () => void;
}

function Hamburger({ onClose }: HamburgerProps) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, onClose);

  const navMenu = [
    { title: '게시판', src: '/clipboard.svg', pageUrl: 'board' },
    { title: '친구', src: '/users.svg', pageUrl: 'friend' },
    { title: '채팅', src: '/message.svg', pageUrl: 'chatting' },
  ];
  const noticeMenu = [
    { title: '공지사항', src: '/clipboard.svg', pageUrl: '/' },
    { title: '이벤트', src: '/star.svg', pageUrl: '/' },
  ];

  useLockScroll();

  return (
    <HamburgerBackground>
      <HamburgerModal ref={ref}>
        <CloseDiv>
          <CloseButton onClick={onClose}>
            <Image
              alt="close-button"
              src="/icons/close.svg"
              width={32}
              height={32}
            />
          </CloseButton>
        </CloseDiv>
        <UserInfo>
          {authenticated ? (
            <UserInfoHeader>
              <ProfileWrapper>
                <ProfileImg />
                <ProfileMiddle>
                  <Nickname>안녕하세요안녕하</Nickname>
                  <MyPageButton
                    onClick={() => {
                      router.push('/mypage');
                      onClose();
                    }}
                  >
                    마이페이지
                  </MyPageButton>
                </ProfileMiddle>
              </ProfileWrapper>
              <Link href="/notifications">
                <AlarmIcon onClick={onClose}>
                  <Image
                    alt="alarm"
                    src="/icons/notification.svg"
                    width={24}
                    height={24}
                  />
                </AlarmIcon>
              </Link>
            </UserInfoHeader>
          ) : (
            <LoginHeader>
              <LoginText>로그인 해주세요.</LoginText>
              <LoginButton
                onClick={() => {
                  router.push('/login');
                  onClose();
                }}
              >
                로그인
              </LoginButton>
            </LoginHeader>
          )}
        </UserInfo>
        <Menu onClose={onClose} alt="menu" options={navMenu} />
        <Menu onClose={onClose} alt="notice-menu" options={noticeMenu} />
      </HamburgerModal>
    </HamburgerBackground>
  );
}

export default Hamburger;

const HamburgerBackground = styled.div`
  z-index: 10000;
  width: 100%;
  height: 100%;

  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: row-reverse;

  background-color: rgba(0, 0, 0, 60%);
`;

const slideIn = keyframes`
from {
  right: -280px;
}

to {
  right: 0px;
}
`;

const HamburgerModal = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: white;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }

  animation: ${slideIn} 0.35s 1;
`;

const CloseDiv = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  padding: auto 10px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  position: absolute;
  top: 14px;
  left: 14px;

  cursor: pointer;
  &:hover {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 5%);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 20px;
`;

const UserInfoHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
  flex-shrink: 0;
`;

const ProfileMiddle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.palette.fontBlack};
  font-size: 15px;
  padding: 5px 0;
  ::after {
    content: ' 님';
    font-size: 14px;
    color: ${({ theme }) => theme.palette.fontGrey};
  }
`;

const MyPageButton = styled.button`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  padding: 6px 10px;
  font-size: 12px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.palette.main};
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;

const AlarmIcon = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 5%);
  }
`;

const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginText = styled.p`
  margin: 10px 0 6px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.white};
  background-color: ${({ theme }) => theme.palette.main};
  border-radius: 8px;

  cursor: pointer;
`;
