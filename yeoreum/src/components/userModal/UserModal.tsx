import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useLoginState } from '../../store/hooks';
import { logout } from '../../store/modules/login';

export default function UserModal() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { userData } = useLoginState();

  const dispatch = useAppDispatch();

  useOutsideClick(ref, () => setIsOpen(false));
  useResize('below', 640, () => setIsOpen(false));

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    dispatch(logout);
    alert('로그아웃 되었습니다.');
    window.location.reload();
  };

  return (
    <Wrapper ref={ref}>
      <ProfileWrapper onClick={() => setIsOpen(prev => !prev)}>
        {userData?.profileImage ? (
          <ProfileImg
            width={300}
            height={300}
            alt="userProfile"
            src={
              userData?.profileImage ? userData?.profileImage : '/anonymous.png'
            }
          />
        ) : (
          <ProfileImg
            width={240}
            height={240}
            alt="default"
            src="/anonymous.png"
          />
        )}
        <Arrow toggle={isOpen} />
      </ProfileWrapper>
      {isOpen && (
        <ModalContainer>
          <UserModalBox>
            <NicknameDiv>
              <Nickname>{userData?.nickname} 님</Nickname>
            </NicknameDiv>
            <Items>
              <Link href="/mypage">
                <Item onClick={() => setIsOpen(false)}>마이페이지</Item>
              </Link>
              <Item>이용약관</Item>
            </Items>
            <Logout onClick={handleLogoutClick}>
              <Image
                width={18}
                height={18}
                alt="logout"
                src="/icons/logout.svg"
              />
              <LogoutText>로그아웃</LogoutText>
            </Logout>
          </UserModalBox>
        </ModalContainer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
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

const ProfileImg = styled(Image)`
  width: 34px;
  height: 34px;
  margin-right: 6px;
  border-radius: 50%;
  border: 1px solid #cacaca;
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

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  top: 40px;
  right: 0;
  width: 252px;
  height: 210px;
`;

const UserModalBox = styled.div`
  --width: 250px;
  padding: 20px 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 2px;
  width: var(--width);
  height: 210px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 25%);
`;

const NicknameDiv = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Nickname = styled.h4`
  margin: 0;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: var(--width);
  padding: 14px 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;

const LogoutText = styled.span`
  color: ${({ theme }) => theme.palette.font.body};
  margin-left: 2px;
`;
