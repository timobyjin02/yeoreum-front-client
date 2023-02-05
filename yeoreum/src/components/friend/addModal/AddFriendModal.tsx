import styled from '@emotion/styled';
import React, { useState } from 'react';

interface FriendType {
  id: number;
  img: string;
  nickname: string;
}

function AddFriendModal() {
  const [checkedList, setCheckedList] = useState<FriendType[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [upProfile, setUpProfile] = useState(false);

  const 임시lists = [
    {
      id: 1,
      img: '',
      nickname: '제주조랑말1',
    },
    {
      id: 2,
      img: '',
      nickname: '제주조랑말2',
    },
  ];

  const 임시: any = [];

  const showProfile = (value: FriendType) => {
    임시.push(value);
    setUpProfile(true);
  };

  const checkedItemHandler = (value: FriendType, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList(prev => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter(item => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: FriendType,
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
    showProfile(value);
  };

  return (
    <Container>
      <ArrowIcons>
        <Before />
        <Next />
      </ArrowIcons>
      {upProfile && (
        <Added>
          {checkedList.map((item: any) => {
            return (
              <Items key={item.id}>
                <Delete>x</Delete>
                <Item />
                <div>{item.nickname}</div>
              </Items>
            );
          })}
        </Added>
      )}
      <div style={{ padding: '0 10px' }}>{/* <AddModalSearch /> */}</div>
      <Div>
        {임시lists.map(item => {
          return (
            <AllUsersList key={item.id}>
              <ProfileImg>{item.img}</ProfileImg>
              <Nickname>{item.nickname}</Nickname>
              <Checkbox type="checkbox" onChange={e => checkHandler(e, item)} />
            </AllUsersList>
          );
        })}
      </Div>
    </Container>
  );
}

export default AddFriendModal;

const Container = styled.div`
  width: 360px;
  padding: 10px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ArrowIcons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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

const Before = styled.div`
  width: 20px;
  height: 10px;
  background-color: aliceblue;
`;

const Next = styled.div`
  width: 20px;
  height: 10px;
  background-color: aliceblue;
`;

const Div = styled.div`
  height: 330px;
  overflow: auto;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: #217af4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  }
`;

const AllUsersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 16px 0;
  margin-right: 5px;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: antiquewhite;
`;

const Nickname = styled.div`
  width: 250px;
  font-size: 14px;
`;

const Checkbox = styled.input``;
