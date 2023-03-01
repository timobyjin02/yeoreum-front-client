import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRef } from 'react';
import useLockScroll from '../../../hooks/useLockScroll';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { ChatRoom } from '../../../types/chat';
import ChattingListBox from '../chattingLists/ChattingListsBox';
import HamburgerContent from '../chattingLists/HamburgerContent';

interface HamburgerProps {
  onClose: () => void;
  chatData: ChatRoom[];
  setChatSocketData: any;
  chatSocketData: any;
}

function ChatHamburger({
  onClose,
  chatData,
  setChatSocketData,
  chatSocketData,
}: HamburgerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, onClose);

  useLockScroll();

  return (
    <HamburgerBackground>
      <HamburgerModal ref={ref}>
        <CloseWrapper>
          <CloseButton onClick={onClose}>
            <Image
              alt="close-button"
              src="/icons/close.svg"
              width={32}
              height={32}
            />
          </CloseButton>
        </CloseWrapper>
        <ChatInfoWrapper>
          <Header />
          <HamburgerContent
            chatData={chatData}
            setChatSocketData={setChatSocketData}
            chatSocketData={chatSocketData}
          />
        </ChatInfoWrapper>
      </HamburgerModal>
    </HamburgerBackground>
  );
}

export default ChatHamburger;

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
  width: 80%;
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

const CloseWrapper = styled.div`
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

const ChatInfoWrapper = styled.div``;

const Header = styled.div`
  height: 50px;
`;
