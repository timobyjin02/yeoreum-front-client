import React, { useEffect, useState } from 'react';
import Container from '../../components/chatting/Container';
import ChattingBox from '../../components/chatting/chatting/ChattingBox';
import ChattingListsBox from '../../components/chatting/chattingLists/ChattingListsBox';
import { ChatLogType } from '../../types/chat';
import { socket } from '../_app';
import { useChatRoomInvitationMutation } from '../../hooks/queries/chat';

interface User {
  userNo: number;
  nickname: string;
  profileImage: string;
}

export interface ChatRoom {
  roomName: string;
  chatRoomNo: number;
  users: User[];
}

export default function Chatting() {
  const [chats, setChats] = useState<ChatLogType[]>([]);
  const [chatData, setChatData] = useState<ChatRoom[]>([]);
  const [a, setA] = useState();

  useChatRoomInvitationMutation(18, 27);

  useEffect(() => {
    const roomListHandler = ({ response }: any) => {
      const socketData = response.chatRooms;
      setChatData(socketData);
      setA(socketData[0]);
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
        chatData={chatData}
        setChats={setChats}
        a={a}
      />
      <ChattingListsBox
        chatData={chatData}
        setChatData={setChatData}
        setA={setA}
        a={a}
      />
    </Container>
  );
}
