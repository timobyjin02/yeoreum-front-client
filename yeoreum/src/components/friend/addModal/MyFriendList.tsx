import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FriendListType } from '../../../types/friend';

interface ItemProps {
  item: FriendListType;
  setAddedProfile: (state: boolean | ((prev: boolean) => boolean)) => void;
}

function MyFriendList({ item, setAddedProfile }: ItemProps) {
  const [isDisabled, setIsDisabled] = useState(false);

  const addedButtonHandler = () => {
    setIsDisabled(true);
    setAddedProfile(true);
  };

  return (
    <ListContainer key={item.userNo}>
      <ProfileImg>{item.profileImage}</ProfileImg>
      <Nickname>{item.nickname}</Nickname>
      <ApplicationButton disabled={isDisabled} onClick={addedButtonHandler}>
        추가
      </ApplicationButton>
    </ListContainer>
  );
}

export default MyFriendList;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  /* padding: 25px 0; */
  padding: 0 15px 0 30px;
  margin-right: 5px;
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
  background-color: #4d49fe;
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? `&:disabled {
    background: #DBDBFF;
    cursor: default;
  }`
      : ''};
`;
