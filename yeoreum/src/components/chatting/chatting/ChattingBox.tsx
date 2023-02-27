import styled from '@emotion/styled';
import ChattingContent from './ChattingContent';
import ChattingInput from './ChattingInput';
import React, { useRef } from 'react';
import { ChatLogType, ChatRoom } from '../../../types/chat';
import { useCurrentChatLog } from '../../../hooks/queries/chat';

interface ChatsProps {
  chats: ChatLogType[];
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
  chatSocketData: any;
}

function ChattingBox({ chats, setChats, chatSocketData }: ChatsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data } = useCurrentChatLog(chatSocketData?.chatRoomNo);
  const currentChatLog = data?.data.response.currentChatLog;

  return (
    <Container>
      <Header>{chatSocketData?.roomName}</Header>
      <ChattingContent
        scrollRef={scrollRef}
        chats={chats}
        setChats={setChats}
        currentChatLog={currentChatLog}
        chatSocketData={chatSocketData}
      />
      <ChattingInput
        scrollRef={scrollRef}
        setChats={setChats}
        chatSocketData={chatSocketData}
      />
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
