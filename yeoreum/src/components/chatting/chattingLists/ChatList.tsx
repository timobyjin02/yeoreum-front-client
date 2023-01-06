import React from 'react';
import styled from '@emotion/styled';

function ChatList() {
  const 임시list = [
    {
      userNo: 1,
      createrData: {
        profileImage: '',
        nickname: '무친저글링, 제주조랑말, 까지발덩크',
      },
    },
    {
      userNo: 2,
      createrData: {
        profileImage: '',
        nickname: '제주조랑말, 까지발덩크',
      },
    },
    {
      userNo: 3,
      createrData: {
        profileImage: '',
        nickname: '까지발덩크',
      },
    },
  ];

  return (
    <>
      {임시list.map(item => {
        return (
          <ListBox>
            <Box key={item.userNo}>
              <ProfileImg>{item.createrData.profileImage}</ProfileImg>
              <Nickname>{item.createrData.nickname}</Nickname>
            </Box>
            <Link></Link>
          </ListBox>
        );
      })}
    </>
  );
}

export default ChatList;

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
  width: 200px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Link = styled.div`
  width: 18px;
  height: 18px;
  background-color: #4a5a69;
`;
