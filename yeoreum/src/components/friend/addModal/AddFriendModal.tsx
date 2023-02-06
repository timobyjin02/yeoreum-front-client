import styled from '@emotion/styled';
import React, { useState } from 'react';
import MyFriendList from './MyFriendList';
import MyFriendSearch from './MyFriendSearch';

interface FriendType {
  id: number;
  img: string;
  nickname: string;
}

interface PropsType {
  setIsOpen4: (state: boolean | ((prev: boolean) => boolean)) => void;
}

function AddFriendModal({ setIsOpen4 }: PropsType) {
  const [addedList, setAddedList] = useState<FriendType[]>([]);
  const [addedProfile, setAddedProfile] = useState(false);

  const users = [
    {
      userNo: 1,
      nickname: '제주조랑말',
      profileImage: '',
    },
    {
      userNo: 2,
      nickname: '제주조랑말제주조랑말제주조랑말',
      profileImage: '',
    },
  ];

  return (
    <Container>
      {/* {addedProfile && (
        <Added>
          {addedList.map((item: any) => {
            return (
              <Items key={item.userNo}>
                <Delete>x</Delete>
                <Item />
                <div>{item.nickname}</div>
              </Items>
            );
          })}
        </Added>
      )} */}
      <SearchWrapper>
        <MyFriendSearch />
      </SearchWrapper>
      <ListWrapper>
        {users.map(item => {
          return <MyFriendList setAddedProfile={setAddedProfile} item={item} />;
        })}
      </ListWrapper>
      <CheckButton
        onClick={() => {
          setIsOpen4(false);
        }}
      >
        확인
      </CheckButton>
    </Container>
  );
}

export default AddFriendModal;

const Container = styled.div`
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const CheckButton = styled.button`
  float: right;
  width: 58px;
  height: 30px;
  margin: 20px 23px 10px 0;
  border-radius: 8px;
  color: #fff;
  background-color: #4d49fe;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  padding: 30px 15px 0 30px;
`;

const Added = styled.div`
  display: flex;
  padding: 10px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Items = styled.div`
  position: relative;
  margin-right: 13px;
`;

const Delete = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: aqua;

  cursor: pointer;
`;

const Item = styled.div`
  width: 36px;
  height: 36px;
  margin-bottom: 15px;
  border-radius: 50%;
  background-color: #3d4954;
`;

const ListWrapper = styled.div`
  height: 330px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: rgba(0, 0, 0, 25%);
    border-radius: 10px;
    border: 1px solid transparent;
    background-clip: padding-box;
  }
  @media (max-width: 640px) {
    height: 650px;
  }
`;
