import styled from '@emotion/styled';
import { useState } from 'react';
import {
  useFriendsQuery,
  useFriendsReceivedQuery,
  useFriendsSentQuery,
} from '../../../hooks/queries/friends';
import { FriendResponseType } from '../../../types/friend';
import sliceString from '../../../utils/sliceString';
import Modal from '../../common/Modal';
import ProfileImage from '../../common/ProfileImage';
import ElseProfile from '../../elseProfile/ElseProfile';

interface Tab {
  id: number;
  title: string;
  response: string;
}
interface TabProps {
  tab: Tab;
}

interface ApiObject {
  [key: number]: any;
}

function FriendList({ tab }: TabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const api: ApiObject = {
    0: useFriendsQuery(),
    1: useFriendsSentQuery(),
    2: useFriendsReceivedQuery(),
  };
  const { data } = api[tab.id];
  const response = data?.data.response;
  const friends = response?.[tab.response];
  const [modal, setModal] = useState<FriendResponseType>({
    friendUserNo: null,
    friendProfileImage: '',
    friendNickname: '',
    friendDescription: '',
  });

  const openProfileHandler = (friend: FriendResponseType) => {
    setModal(friend);
    setIsOpen(true);
  };

  return (
    <>
      {friends?.map((friend: FriendResponseType, index: number) => {
        return (
          <List key={index}>
            <ImageWrapper>
              <ProfileImage src={friend?.friendProfileImage} size={70} />
            </ImageWrapper>
            <InfoWrapper onClick={() => openProfileHandler(friend)}>
              <Nickname>{friend.friendNickname}</Nickname>
              <Description>
                {sliceString(friend.friendDescription, 65)}
              </Description>
            </InfoWrapper>
          </List>
        );
      })}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ElseProfile
            modal={modal}

            // img={modal.friendProfileImage}
            // name={modal.friendNickname}
            // description={modal.friendDescription}
          />
        </Modal>
      )}
    </>
  );
}

export default FriendList;

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
