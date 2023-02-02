import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import useLockScroll from '../../hooks/useLockScroll';
import useOutsideClick from '../../hooks/useOutsideClick';
import Menu from './Menu';

interface HamburgerProps {
  onClose: () => void;
}

function Hamburger({ onClose }: HamburgerProps) {
  const [authenticated, setAuthenticated] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, onClose);

  const navOption = [{ value: '게시판' }, { value: '친구' }, { value: '채팅' }];
  const noticeOption = [
    { value: '공지사항' },
    { value: '이벤트' },
    { value: '업데이트내역' },
  ];
  const serviceOption = [{ value: '문의하기' }, { value: '문의내역' }];

  useLockScroll();

  return (
    <HamburgerBackground>
      <HamburgerModal ref={ref}>
        <UserInfo>
          {authenticated ? (
            <>
              <UserInfoHeader>
                <ProfileWrapper>
                  <ProfileImg />
                  <Nickname>donkeykong 님</Nickname>
                </ProfileWrapper>
                <Link href="/notifications">
                  <AlarmIcon onClick={onClose} />
                </Link>
              </UserInfoHeader>
              <UserInfoFooter>
                <MyPageBtn>마이페이지</MyPageBtn>
              </UserInfoFooter>
            </>
          ) : (
            <>로그인 해라</>
          )}
        </UserInfo>
        <Menu title="메뉴" options={navOption} />
        <Menu title="공지사항" options={noticeOption} />
        <Menu title="고객센터" options={serviceOption} />
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
  width: 280px;
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

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 140px;
  /* background-color: gray; */
  border-bottom: 2px solid #777;

  padding: 24px;
  padding-right: 20px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 5px;
`;

const Nickname = styled.span`
  padding: 5px;
`;

const AlarmIcon = styled.div`
  width: 22px;
  height: 22px;
  background-color: lightgray;
`;

const UserInfoHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
`;

const UserInfoFooter = styled.div`
  display: flex;
  padding-left: 38px;
`;

const MyPageBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: #ff8389;
  align-self: center;
  color: white;
`;
