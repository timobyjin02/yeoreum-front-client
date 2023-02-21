import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FriendListType } from '../../../types/friend';
import ProfileImage from '../../common/ProfileImage';
import { UsersResponseType } from '../../../types/user';
import { requestPostFriendApplication } from '../../../apis/friends';
import { getToken } from '../../../utils/user';

interface ItemProps {
  item: UsersResponseType;
}

function AllUserList({ item }: ItemProps) {
  const token = getToken() as string;
  const [isDisabled, setIsDisabled] = useState(false);

  const applicationHandler = () => {
    requestPostFriendApplication(item.userNo, token);
    setIsDisabled(true);
  };

  return (
    <AllUsersList key={item.userNo}>
      <UserInfo>
        <ProfileImage src={item.profileImage} size={40} />
        <Nickname>{item.nickname}</Nickname>
      </UserInfo>
      <ApplicationButton disabled={isDisabled} onClick={applicationHandler}>
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

const Nickname = styled.div`
  width: 250px;
  margin-left: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const ApplicationButton = styled.button<{ disabled: boolean }>`
  width: 58px;
  height: 30px;
  border-radius: 8px;
  color: white;
  background-color: ${({ theme }) => theme.palette.main};
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? `&:disabled {
    background: #dbdbff;
    cursor: default;
  }`
      : ''};
`;
