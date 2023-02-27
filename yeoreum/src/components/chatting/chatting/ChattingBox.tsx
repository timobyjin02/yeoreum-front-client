import styled from '@emotion/styled';
import ChattingContent from './ChattingContent';
import ChattingInput from './ChattingInput';
import React, { useRef } from 'react';
import { ChatLogType } from '../../../types/chat';
import { ChatRoom } from '../../../pages/chatting';
import { useCurrentChatLog } from '../../../hooks/queries/chat';

interface ChatsProps {
  chats: ChatLogType[];
  chatData: ChatRoom[];
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
  a: any;
}

function ChattingBox({ chats, chatData, setChats, a }: ChatsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data } = useCurrentChatLog(a?.chatRoomNo);
  const ddd = data?.data.response.currentChatLog;

  return (
    <Container>
      <Header>{a?.roomName}</Header>
      <ChattingContent
        scrollRef={scrollRef}
        chats={chats}
        setChats={setChats}
        ddd={ddd}
        a={a}
      />
      <ChattingInput
        scrollRef={scrollRef}
        setChats={setChats}
        ddd={ddd}
        chatData={chatData}
        a={a}
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
