import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { requestGetFriendsList } from '../../../apis/friends';
import { ApplicationCreateData, PostCreateData } from '../../../types/post';
import sliceString from '../../../utils/sliceString';
import { getToken } from '../../../utils/user';
import Modal from '../../common/Modal';
import AddFriendModal from '../../friend/addModal/AddFriendModal';

export interface Friend {
  friendDescription?: string;
  friendNickname: string;
  friendProfileImage: string | null;
  friendUserNo: number;
}
export interface FriendsList extends Friend {
  isChecked?: boolean;
}
interface AddPartyMembersProps {
  keyName: string;
  setPostData:
    | React.Dispatch<React.SetStateAction<PostCreateData>>
    | React.Dispatch<React.SetStateAction<ApplicationCreateData>>;
}

function AddPartyMembers({ keyName, setPostData }: AddPartyMembersProps) {
  const token = getToken() as string;
  const [friendsList, setFriendsList] = useState<FriendsList[]>([]);
  const [friendsEntry, setFriendsEntry] = useState<FriendsList[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const friends: FriendsList[] = await requestGetFriendsList(token);
      // setFriendsList(data);
      friends.forEach(friend => (friend.isChecked = false));
      setFriendsList(friends);
    })();
  }, []);

  useEffect(() => {
    setPostData((prev: any) => ({
      ...prev,
      [keyName]: friendsEntry?.map(f => f.friendUserNo),
    }));
  }, [friendsEntry]);

  const removeFriendFromEntry = (friend: FriendsList) => {
    setFriendsList(prev =>
      prev.map(f => {
        if (f.friendUserNo !== friend.friendUserNo) {
          return f;
        }

        return { ...f, isChecked: false };
      }),
    );
    setFriendsEntry(prev =>
      prev.filter(f => f.friendUserNo !== friend.friendUserNo),
    );
  };

  const modalCloseHandler = () => {
    setFriendsEntry(() => friendsList.filter(f => f.isChecked === true));
    setIsOpenModal(false);
  };

  return (
    <Container>
      <Subject>함께할 친구</Subject>
      <AddedList>
        {friendsEntry?.map((friend, index) => (
          <List key={index}>
            <ProfileBox>
              <ProfileImg
                src={
                  friend.friendProfileImage
                    ? friend.friendProfileImage
                    : '/anonymous.png'
                }
              />
              <XBtn
                src="/icons/close.svg"
                onClick={() => removeFriendFromEntry(friend)}
              />
            </ProfileBox>
            <Nickname>{sliceString(friend.friendNickname, 6)}</Nickname>
          </List>
        ))}
      </AddedList>
      <AddBtn onClick={() => setIsOpenModal(true)}>추가</AddBtn>
      {isOpenModal && (
        <Modal onClose={modalCloseHandler}>
          <AddFriendModal
            modalCloseHandler={modalCloseHandler}
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />
        </Modal>
      )}
    </Container>
  );
}

export default AddPartyMembers;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Subject = styled.h4`
  margin-bottom: 10px;
`;

const AddedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.li`
  min-width: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const ProfileBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const ProfileImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: lightgray;
`;

const XBtn = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  inset: 0 0 auto auto;
  cursor: pointer;
`;

const Nickname = styled.span`
  font-size: 13px;
`;

const AddBtn = styled.button`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.main};
  color: white;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
