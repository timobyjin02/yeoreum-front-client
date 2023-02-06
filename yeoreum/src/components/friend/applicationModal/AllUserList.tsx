import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FriendListType } from '../../../types/friend';

interface ItemProps {
  item: FriendListType;
}

function AllUserList({ item }: ItemProps) {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <AllUsersList key={item.userNo}>
      <UserInfo>
        <ProfileImg>{item.profileImage}</ProfileImg>
        <Nickname>{item.nickname}</Nickname>
      </UserInfo>
      <ApplicationButton
        disabled={isDisabled}
        onClick={() => setIsDisabled(true)}
      >
        신청
      </ApplicationButton>
    </AllUsersList>
  );
}

export default AllUserList;

const AllUsersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 15px 0 30px;
  margin-right: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Nickname = styled.div`
  width: 250px;
  margin-left: 10px;
  font-size: 14px;
`;

const ApplicationButton = styled.button<{ disabled: boolean }>`
  width: 58px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background-color: #626ece;
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? `&:disabled {
    background: #b8c7e7;
    cursor: default;
  }`
      : ''};
`;
