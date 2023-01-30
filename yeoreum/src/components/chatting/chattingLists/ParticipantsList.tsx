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
    // {
    //   userNo: 2,
    //   createrData: {
    //     profileImage: '',
    //     nickname: '제주조랑말',
    //   },
    // },
    // {
    //   userNo: 3,
    //   createrData: {
    //     profileImage: '',
    //     nickname: '까지발덩크',
    //   },
    // },
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
              <Link></Link>
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
  width: 18px;
  height: 18px;
  margin-right: 10px;
  background-color: #f3f4f5;
`;

const Nickname = styled.div`
  font-size: 14px;
`;

const Link = styled.div`
  width: 18px;
  height: 18px;
  background-color: #4a5a69;
`;

//
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 640px) {
    width: 400px;
  }
`;
