import React from 'react';
import Container from '../../components/chatting/Container';
import ChattingBox from '../../components/chatting/chatting/ChattingBox';
import ChattingListsBox from '../../components/chatting/chattingLists/ChattingListsBox';

export default function Chatting() {
  return (
    <Container>
      <ChattingBox />
      <ChattingListsBox />
    </Container>
  );
}
