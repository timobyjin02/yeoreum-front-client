import React, { useEffect, useState } from 'react';
import Container from '../../components/chatting/Container';
import ChattingBox from '../../components/chatting/chatting/ChattingBox';
import ChattingListsBox from '../../components/chatting/chattingLists/ChattingListsBox';
import { ChatLogType, ChatRoom } from '../../types/chat';
import { socket } from '../_app';
import { useChatRoomInvitationMutation } from '../../hooks/queries/chat';

export default function Chatting() {
  const [chats, setChats] = useState<ChatLogType[]>([]);
  const [chatData, setChatData] = useState<ChatRoom[]>([]);
  const [chatSocketData, setChatSocketData] = useState();

  // useChatRoomInvitationMutation(18, 27);

  useEffect(() => {
    const roomListHandler = ({ response }: any) => {
      const socketData = response.chatRooms;
      setChatData(socketData);
      setChatSocketData(socketData?.[0]);
    };
    socket.emit('init-socket', roomListHandler);
    return () => {
      socket.off('init-socket', roomListHandler);
    };
  }, []);

  return (
    <Container>
      <ChattingBox
        chats={chats}
        setChats={setChats}
        chatSocketData={chatSocketData}
      />
      <ChattingListsBox
        chatData={chatData}
        setChatSocketData={setChatSocketData}
        chatSocketData={chatSocketData}
      />
    </Container>
  );
}
