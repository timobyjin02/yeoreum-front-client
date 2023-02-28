import React, { useState } from 'react';
import styled from '@emotion/styled';
import ElseProfile from '../../elseProfile/ElseProfile';
import Modal from '../../common/Modal';
import sliceString from '../../../utils/sliceString';
import { FriendResponseType } from '../../../types/friend';
import ProfileImage from '../../common/ProfileImage';
import { useSearchFriendsQuery } from '../../../hooks/queries/friends';

interface FriendListProps {
  searchTerm: string;
}

function FriendPage({ searchTerm }: FriendListProps) {
  const { data } = useSearchFriendsQuery(searchTerm);

  const responseFriendData = data?.data.response;

  const friendList = searchTerm
    ? responseFriendData?.searchResult
    : responseFriendData?.friends;

  return (
    <div>
      {friendList?.length > 0 ? (
        friendList.map((friend: FriendResponseType, index: number) => {
          return (
            <List key={index}>
              <ImageWrapper>
                <ProfileImage src={friend?.friendProfileImage} size={70} />
              </ImageWrapper>
              <InfoWrapper>
                <Nickname>{friend.friendNickname}</Nickname>
                <Description>
                  {sliceString(friend.friendDescription, 65)}
                </Description>
              </InfoWrapper>
            </List>
          );
        })
      ) : (
        <ListItem>검색 결과가 없습니다</ListItem>
      )}
    </div>
  );
}

export default FriendPage;

const List = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  padding: 8px 20px 10px;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  margin-right: 15px;
`;

const InfoWrapper = styled.div`
  width: calc(100% - 65px);
  height: 100%;
`;

const Nickname = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const Description = styled.div`
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  color: ${({ theme }) => theme.palette.font.subHeadline};
`;
