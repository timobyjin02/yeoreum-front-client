import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PostCreateData } from '../../../types/post';
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
  setPostData: React.Dispatch<React.SetStateAction<PostCreateData>>;
}

function AddPartyMembers({ setPostData }: AddPartyMembersProps) {
  const token = getToken() as string;
  const [friendsList, setFriendsList] = useState<FriendsList[]>([]);
  const [friendsEntry, setFriendsEntry] = useState<FriendsList[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const users: FriendsList[] = [
    {
      friendUserNo: 1,
      friendNickname: '제주조랑말',
      friendProfileImage: '',
    },
    {
      friendUserNo: 2,
      friendNickname: '제주조랑말',
      friendProfileImage: '',
    },
    {
      friendUserNo: 3,
      friendNickname: '제주조랑말',
      friendProfileImage: '',
    },
    {
      friendUserNo: 4,
      friendNickname: '제주조랑말',
      friendProfileImage: '',
    },
    {
      friendUserNo: 5,
      friendNickname: '제주조랑말',
      friendProfileImage: '',
    },
    {
      friendUserNo: 6,
      friendNickname: '제주조랑말',
      friendProfileImage: '',
    },
  ];

  const requestGetFriendsList = async (token: string) => {
    const { data } = await axios('/api/friends', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.response.friends;
  };

  useEffect(() => {
    (async () => {
      const data = await requestGetFriendsList(token);
      // setFriendsList(data);
      users.forEach(user => (user.isChecked = false));
      setFriendsList(users);
    })();
  }, []);

  useEffect(() => {
    setPostData(prev => ({
      ...prev,
      hostMembers: friendsEntry?.map(f => f.friendUserNo),
    }));
  }, [friendsEntry]);

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
                onClick={() => {
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
                }}
              />
            </ProfileBox>
            <Nickname>{sliceString(friend.friendNickname, 6)}</Nickname>
          </List>
        ))}
      </AddedList>
      <AddBtn onClick={() => setIsOpenModal(true)}>추가</AddBtn>
      {isOpenModal && (
        <Modal
          onClose={() => {
            setFriendsEntry(() =>
              friendsList.filter(f => f.isChecked === true),
            );
            setIsOpenModal(false);
          }}
        >
          <AddFriendModal
            friendsList={friendsList}
            setFriendsList={setFriendsList}
            setFriendsEntry={setFriendsEntry}
            setPostData={setPostData}
            setIsOpenModal={setIsOpenModal}
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
  width: 46px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #707070;
  color: white;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;
