import React, { useEffect, useState } from 'react';
import Container from '../../components/chatting/Container';
import ChattingBox from '../../components/chatting/chatting/ChattingBox';
import ChattingListsBox from '../../components/chatting/chattingLists/ChattingListsBox';
import { requestPostChatRoomInvitation } from '../../apis/chats';
import { ChatLogType } from '../../types/chat';
import { socket } from '../_app';

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

  useEffect(() => {
    (async () => {
      // await requestPostChatRoomInvitation(1, 20);
    })();
  }, []);

  useEffect(() => {
    const roomListHandler = ({ response }: any) => {
      const socketData = response.chatRooms;
      setChatData(socketData);
      // console.log(response.chatRooms);
    };
    socket.emit('init-socket', roomListHandler);
    return () => {
      socket.off('init-socket', roomListHandler);
    };
  }, []);

  return (
    <Container>
      <ChattingBox chats={chats} setChats={setChats} />
      <ChattingListsBox chatData={chatData} setChatData={setChatData} />
    </Container>
  );
}
