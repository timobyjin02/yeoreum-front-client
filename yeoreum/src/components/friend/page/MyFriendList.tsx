import React, { useState } from 'react';
import styled from '@emotion/styled';
import ElseProfile from '../../elseProfile/ElseProfile';
import Modal from '../../common/Modal';
import sliceString from '../../../utils/sliceString';
import { FriendResponseType } from '../../../types/friend';
import ProfileImage from '../../common/ProfileImage';

interface FriendListProps {
  friendList: FriendResponseType;
}

function FriendPage({ friendList }: FriendListProps) {
  const [isOpen4, setIsOpen4] = useState(false);

  const openProfileHandler = () => {
    setIsOpen4(true);
  };

  return (
    <div>
      {friendList.length > 0 ? (
        friendList.map((friend, index) => {
          return (
            <List key={index}>
              <ImageWrapper>
                <ProfileImage src={friend.friendProfileImage} size={70} />
              </ImageWrapper>
              <InfoWrapper onClick={openProfileHandler}>
                {isOpen4 && (
                  <Modal onClose={() => setIsOpen4(false)}>
                    <ElseProfile
                      img={friend.friendProfileImage}
                      name={friend.friendNickname}
                      description={friend.friendDescription}
                    />
                  </Modal>
                )}
                <Nickname>{friend.friendNickname}</Nickname>
                <Description>
                  {sliceString(friend.friendDescription, 65)}
                </Description>
              </InfoWrapper>
            </List>
          );
        })
      ) : (
        <List>검색 결과가 없습니다</List>
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
