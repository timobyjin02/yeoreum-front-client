import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from '../../common/Modal';
import ElseProfile from '../../elseProfile/ElseProfile';

function ParticipantsList() {
  const [isOpen1, setIsOpen1] = useState(false);

  const 임시list = [
    {
      userNo: 1,
      createrData: {
        profileImage: '',
        nickname: '무친저글링',
      },
    },
  ];

  const openProfile = () => {
    setIsOpen1(true);
  };

  return (
    <>
      {임시list.map(item => {
        return (
          <div>
            <ListBox>
              <Box key={item.userNo} onClick={openProfile}>
                {isOpen1 && (
                  <Modal
                    onClose={() => {
                      setIsOpen1(false);
                    }}
                  >
                    <ElseProfile />
                  </Modal>
                )}
                <ProfileImg>{item.createrData.profileImage}</ProfileImg>
                <Nickname>{item.createrData.nickname}</Nickname>
              </Box>
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
  justify-content: space-between;
  padding: 16px 10px;
`;

const Box = styled.div`
  display: flex;
  min-width: 150px;
`;

const ProfileImg = styled.div`
  width: 23px;
  height: 23px;
  margin-right: 10px;
  background-color: #f3f4f5;
`;

const Nickname = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.headline};
`;
