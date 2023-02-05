import styled from '@emotion/styled';
import React, { useState } from 'react';
import sliceString from '../../../utils/sliceString';
import Modal from '../../common/Modal';
import AddFriendModal from '../../friend/addModal/AddFriendModal';

interface Member {
  nickname: string;
}

function AddPartyMembers() {
  const [isOpen4, setIsOpen4] = useState(false);

  const memberList: Member[] = [
    { nickname: '목꺾기장인' },
    { nickname: '메가커피대항마' },
    { nickname: '63빌딩맨손등반' },
    { nickname: '목꺾기장인' },
  ];

  const addHandler = () => {
    setIsOpen4(true);
  };

  return (
    <Container>
      <Subject>함께할 친구</Subject>
      <AddedList>
        {memberList.map((member, index) => (
          <List key={index}>
            <ProfileBox>
              <ProfileImg />
              <XBtn />
            </ProfileBox>
            <Nickname>{sliceString(member.nickname, 6)}</Nickname>
          </List>
        ))}
      </AddedList>
      <AddBtn onClick={addHandler}>추가</AddBtn>
      {isOpen4 && (
        <Modal onClose={() => setIsOpen4(false)}>
          <AddFriendModal />
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

const ProfileImg = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: lightgray;
`;

const XBtn = styled.button`
  width: 12px;
  height: 12px;
  background-color: black;
  position: absolute;
  inset: 0 0 auto auto;
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
