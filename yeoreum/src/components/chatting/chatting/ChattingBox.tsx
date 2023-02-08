import styled from '@emotion/styled';
import ChattingContent from './ChattingContent';
import ChattingInput from './ChattingInput';
import React, { useRef, useState } from 'react';
import { ChatInfo } from '../../../types/chat';

function ChattingBox() {
  const [chats, setChats] = useState<ChatInfo[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Header>홍유진, 김현수, 김민호....</Header>
      <ChattingContent scrollRef={scrollRef} chats={chats} />
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
