import styled from '@emotion/styled';
import ChattingContent from './ChattingContent';
import ChattingInput from './ChattingInput';
import React, { useEffect, useRef, useState } from 'react';
import { ChatLogType, ChatRoom } from '../../../types/chat';
import { useCurrentChatLog } from '../../../hooks/queries/chat';
import ModalPortal from '../../modalPortal/ModalPortal';
import ChatHamburger from './ChatHamburger';

interface ChatsProps {
  chats: ChatLogType[];
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
  chatData: ChatRoom[];
  setChatSocketData: any;
  chatSocketData: any;
}

function ChattingBox({
  chats,
  setChats,
  chatData,
  setChatSocketData,
  chatSocketData,
}: ChatsProps) {
  const [hamburger, setHamburger] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data } = useCurrentChatLog(chatSocketData?.chatRoomNo);
  const currentChatLog = data?.data.response.currentChatLog;

  useEffect(() => {
    if (!scrollRef.current) return;

    const chatContainer = scrollRef.current;
    const { scrollHeight, clientHeight } = chatContainer;

    if (scrollHeight > clientHeight) {
      chatContainer.scrollTop = scrollHeight - clientHeight;
    }
  }, [chats.length]);

  return (
    <Container>
      <Header>
        {chatSocketData?.roomName}
        <HamburgerIcon
          src="/icons/hamburger.svg"
          onClick={() => setHamburger(true)}
        />
        {hamburger && (
          <ModalPortal>
            <ChatHamburger
              onClose={() => setHamburger(false)}
              chatData={chatData}
              setChatSocketData={setChatSocketData}
              chatSocketData={chatSocketData}
            />
          </ModalPortal>
        )}
      </Header>
      <ChattingContent
        scrollRef={scrollRef}
        chats={chats}
        setChats={setChats}
        currentChatLog={currentChatLog}
        chatSocketData={chatSocketData}
      />
      <ChattingInput setChats={setChats} chatSocketData={chatSocketData} />
    </Container>
  );
}

export default ChattingBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  height: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Header = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-left: 10px;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const HamburgerIcon = styled.img`
  display: none;
  cursor: pointer;

  @media (max-width: 640px) {
    display: block;
  }
`;
