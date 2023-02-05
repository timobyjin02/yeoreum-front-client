import React, { useState } from 'react';
import styled from '@emotion/styled';
import ElseProfile from '../../elseProfile/ElseProfile';
import Modal from '../../common/Modal';

function FriendPage() {
  const [isOpen4, setIsOpen4] = useState(false);

  const friendList = [
    {
      friendUserNo: 1,
      friendNickname: '무친저글링',
      friendImage: '',
      friendDescription:
        '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    },
  ];

  const descriptionSlice = (string: string) => {
    if (string.length <= 65) return string;
    else return string.slice(0, 65) + '...';
  };

  const openProfileHandler = () => {
    setIsOpen4(true);
  };

  return (
    <div>
      {friendList.map((item, idx) => {
        return (
          <List key={idx}>
            <ProfileImg />
            <Info onClick={openProfileHandler}>
              {isOpen4 && (
                <Modal onClose={() => setIsOpen4(false)}>
                  <ElseProfile />
                </Modal>
              )}
              <Nickname>{item.friendNickname}</Nickname>
              <Description>
                {descriptionSlice(item.friendDescription)}
              </Description>
            </Info>
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

const ProfileImg = styled.div`
  width: 63px;
  height: 63px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Info = styled.div`
  width: calc(100% - 65px);
  height: 100%;
`;

const Nickname = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 20px;
`;
