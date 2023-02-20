import React, { useEffect } from 'react';
import Container from '../../components/chatting/Container';
import ChattingBox from '../../components/chatting/chatting/ChattingBox';
import ChattingListsBox from '../../components/chatting/chattingLists/ChattingListsBox';
import { requestPostChatRoomInvitation } from '../../apis/chats';

export default function Chatting() {
  useEffect(() => {
    (async () => {
      await requestPostChatRoomInvitation(1, 20);
    })();
  }, []);

  return (
    <Container>
      <ChattingBox />
      <ChattingListsBox />
    </Container>
  );
}
