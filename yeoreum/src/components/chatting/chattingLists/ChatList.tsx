import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ProfileImage from '../../common/ProfileImage';
import { ChatRoom } from '../../../types/chat';

interface ChatRoomProps {
  chatData: ChatRoom[];
  setChatSocketData: any;
}

function ChatList({ chatData, setChatSocketData }: ChatRoomProps) {
  return (
    <>
      {chatData.map(item => {
        const users = item.users;

        return (
          <ListBox
            onClick={() => setChatSocketData(item)}
            key={item.chatRoomNo}
            hasMultipleUsers={item.users.length >= 4}
          >
            <Item hasMultipleUsers={item.users.length >= 4}>
              <ImageWrapper>
                <ImageRow>
                  {users.slice(0, 2).map(user => (
                    <Img key={user.userNo} src={user.profileImage} size={30} />
                  ))}
                </ImageRow>
                <ImageRow>
                  {users.slice(2).map(user => (
                    <Img key={user.userNo} src={user.profileImage} size={30} />
                  ))}
                </ImageRow>
              </ImageWrapper>
              <Nickname hasMultipleUsers={item.users.length >= 4}>
                {item.roomName}
              </Nickname>
            </Item>
          </ListBox>
        );
      })}
    </>
  );
}

export default ChatList;

const ListBox = styled.div<{ hasMultipleUsers: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 16px 10px;
  ${({ hasMultipleUsers }) =>
    hasMultipleUsers &&
    css`
      align-items: center;
    `}
`;

const Item = styled.div<{ hasMultipleUsers: boolean }>`
  display: flex;
  align-items: center;
  min-width: ${({ hasMultipleUsers }) =>
    hasMultipleUsers ? '200px' : '150px'};
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 68px; /* 예시값 */
  height: 68px; /* 예시값 */
`;

const ImageRow = styled.div`
  display: flex;
  margin-bottom: 4px;

  flex-direction: row;

  &:nth-child(2) {
    margin-top: 4px;
  }
`;

const Img = styled(ProfileImage)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-bottom: 4px;
  border-radius: 50%;
`;

const Nickname = styled.div<{ hasMultipleUsers: boolean }>`
  margin-left: ${({ hasMultipleUsers }) => (hasMultipleUsers ? '12px' : '8px')};
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.font.headline};
`;
