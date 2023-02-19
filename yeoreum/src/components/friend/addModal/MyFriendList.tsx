import React from 'react';
import styled from '@emotion/styled';
import { FriendsList } from '../../board/create/AddPartyMembers';

interface ItemProps {
  friend: FriendsList;
  setFriendsList: React.Dispatch<React.SetStateAction<FriendsList[]>>;
}

function MyFriendList({ friend, setFriendsList }: ItemProps) {
  const onClickHandler = () => {
    setFriendsList(prev => {
      const array = prev.map(f => {
        if (f.friendUserNo !== friend.friendUserNo) {
          return f;
        }
        return { ...f, isChecked: !friend.isChecked };
      });

      return array;
    });
  };

  return (
    <ListContainer onClick={onClickHandler}>
      {friend.isChecked ? <Check src="/icons/check.svg" /> : <Uncheck />}
      <ProfileImg
        src={
          friend.friendProfileImage
            ? friend.friendProfileImage
            : '/anonymous.png'
        }
      />
      <Nickname>{friend.friendNickname}</Nickname>
    </ListContainer>
  );
}

export default MyFriendList;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 15px 0 15px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.grey};
  }
`;

const Check = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const Uncheck = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Nickname = styled.div`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.headline};
`;
