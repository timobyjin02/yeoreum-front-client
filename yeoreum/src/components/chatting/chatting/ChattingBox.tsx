import styled from '@emotion/styled';
import ChattingContent from './ChattingContent';
import ChattingInput from './ChattingInput';
import React, { useRef } from 'react';
import { ChatLogType } from '../../../types/chat';
import { ChatRoom } from '../../../pages/chatting';

interface ChatsProps {
  chats: ChatLogType[];
  chatData: ChatRoom[];
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
}

function ChattingBox({ chats, chatData, setChats }: ChatsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      {chatData.map((chatRoom, index) => (
        <Header key={index}>{chatRoom.roomName}</Header>
      ))}
      <ChattingContent
        scrollRef={scrollRef}
        chats={chats}
        setChats={setChats}
      />
      <ChattingInput scrollRef={scrollRef} setChats={setChats} />
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
  width: 100%;
  height: 60px;
  padding-left: 10px;
  color: ${({ theme }) => theme.palette.font.headline};
`;
