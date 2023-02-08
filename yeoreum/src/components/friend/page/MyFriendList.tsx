import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ElseProfile from '../../elseProfile/ElseProfile';
import Modal from '../../common/Modal';
import { fetchFriends, FriendsResponseType } from '../../../api/friendPage';
import sliceString from '../../../utils/sliceString';

function FriendPage() {
  const [isOpen4, setIsOpen4] = useState(false);
  const [friendList, setFriendList] = useState<FriendsResponseType>({
    friends: [],
  });

  useEffect(() => {
    (async () => {
      const friend = await fetchFriends();

      console.log(friend);
      setFriendList(friend);
    })();
  }, []);

  const openProfileHandler = () => {
    setIsOpen4(true);
  };

  return (
    <div>
      {friendList.friends.map(friend => {
        return (
          <List key={friend.friendUserNo}>
            <ProfileImg src={friend.friendProfileImage} />
            <InfoWrapper onClick={openProfileHandler}>
              {isOpen4 && (
                <Modal onClose={() => setIsOpen4(false)}>
                  <ElseProfile />
                </Modal>
              )}
              <Nickname>{friend.friendNickname}</Nickname>
              <Description>
                {sliceString(friend.friendDescription, 65)}
              </Description>
            </InfoWrapper>
          </List>
        );
      })}
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

const ProfileImg = styled.img`
  width: 63px;
  height: 63px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: antiquewhite;
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
