import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../../common/Modal';
import ElseProfile from '../../elseProfile/ElseProfile';
import { ChatRoom } from '../../../pages/chatting';
import ProfileImage from '../../common/ProfileImage';

interface ChatUserProps {
  chatData: ChatRoom[];
}

function ParticipantsList({ chatData }: ChatUserProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openProfile = () => {
    setIsOpen(true);
  };

  console.log(chatData);

  return (
    <>
      {chatData.map((item, index) => {
        return (
          <div key={index}>
            <ListBox>
              {item.users.map(user => (
                <Item key={user.userNo} onClick={openProfile}>
                  {isOpen && (
                    <Modal
                      onClose={() => {
                        setIsOpen(false);
                      }}
                    >
                      {/* <ElseProfile /> */}
                    </Modal>
                  )}
                  <ProfileImage src={user.profileImage} size={23} />
                  <Nickname>{user.nickname}</Nickname>
                </Item>
              ))}
            </ListBox>
          </div>
        );
      })}
    </>
  );
}

export default ParticipantsList;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 10px;
`;

const Item = styled.div`
  display: flex;
  min-width: 150px;
`;

const Nickname = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.headline};
`;
