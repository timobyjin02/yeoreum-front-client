import React, { useRef } from 'react';
import styled from '@emotion/styled';
import useOutsideClick from '../../hooks/useOutsideClick';

export default function UserModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, onClose);
  return (
    <UserModalWrapper>
      <ModalWrapper ref={ref}>
        <ModalBubble />
        <UserModalBox>
          <NicknameDiv>
            <Nickname>donkey 님</Nickname>
          </NicknameDiv>
          <Items>
            <Item>마이페이지</Item>
            <Item>이용약관</Item>
          </Items>
          <Logout>아이콘 로그아웃</Logout>
        </UserModalBox>
      </ModalWrapper>
    </UserModalWrapper>
  );
}

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
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const UserModalWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  inset: 0;

  display: flex;
  flex-direction: row-reverse;

  background-color: rgba(0, 0, 0, 0%);
`;

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 48px;
  right: 21px;
  width: 252px;
  height: 210px;
  @media (min-width: 975px) {
    right: calc((100% - 964px) / 2);
  }
`;

const ModalBubble = styled.div`
  position: absolute;
  left: 216px;
  top: 5px;
  width: 20px;
  height: 20px;
  background-color: white;
  transform: rotate(45deg);
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-top-left-radius: 4px;
  z-index: 10;
`;

const UserModalBox = styled.div`
  --width: 250px;
  padding: 20px 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 15px;
  width: var(--width);
  height: 210px;
  background-color: white;
  border: 1px solid #888;
  border-radius: 4px;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 25%), 2px 2px 4px rgba(0, 0, 0, 25%);
`;
