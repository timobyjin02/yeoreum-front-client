import React from 'react';
import styled from '@emotion/styled';
import { ChatRoom } from '../../../pages/chatting';

interface ChatRoomProps {
  chatData: ChatRoom[];
}

function ChatList({ chatData }: ChatRoomProps) {
  return (
    <>
      {chatData.map(item => {
        return (
          <ListBox key={item.chatRoomNo}>
            <Item>
              <ImageWrapper>
                {item.users.map(user => (
                  <Img src={user.profileImage} />
                ))}
              </ImageWrapper>
              <Nickname>{item.roomName}</Nickname>
            </Item>
          </ListBox>
        );
      })}
    </>
  );
}

export default ChatList;

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  min-width: 150px;
`;

const ImageWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.background.grey};
`;

const Nickname = styled.div`
  width: 200px;
  margin-left: 12px;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.font.headline};
`;
