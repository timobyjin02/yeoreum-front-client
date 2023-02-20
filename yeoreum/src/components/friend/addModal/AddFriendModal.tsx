import styled from '@emotion/styled';
import React from 'react';
import { FriendsList } from '../../board/create/AddPartyMembers';
import MyFriendList from './MyFriendList';
import MyFriendSearch from './MyFriendSearch';

interface PropsType {
  modalCloseHandler: () => void;
  friendsList: FriendsList[];
  setFriendsList: React.Dispatch<React.SetStateAction<FriendsList[]>>;
}

function AddFriendModal({
  friendsList,
  setFriendsList,
  // 저장 버튼에서 결국 엔트리로 check된 유저를 넘겨주기 때문에 같은 함수 사용
  modalCloseHandler,
}: PropsType) {
  return (
    <Container>
      <ResponsiveHeader>
        <Title>함께할 친구 추가</Title>
        <SaveButton onClick={modalCloseHandler}>저장</SaveButton>
      </ResponsiveHeader>
      <SearchWrapper>
        <MyFriendSearch />
      </SearchWrapper>
      <ListWrapper>
        {friendsList.map(friend => {
          return (
            <MyFriendList
              key={friend.friendUserNo}
              friend={friend}
              setFriendsList={setFriendsList}
            />
          );
        })}
      </ListWrapper>
    </Container>
  );
}

export default AddFriendModal;

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.line.grey};
  border-radius: 15px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ResponsiveHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.line.grey};
`;

const SaveButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 20px;
  width: 58px;
  height: 30px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.font.white};
  background-color: ${({ theme }) => theme.palette.main};
  cursor: pointer;
  @media (min-width: 641px) {
    display: none;
  }
`;

const Title = styled.h4`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const SearchWrapper = styled.div`
  padding: 30px 15px 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.line.grey};
`;

const Added = styled.div`
  display: flex;
  padding: 10px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ListWrapper = styled.div`
  width: 400px;
  height: 330px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  /* ::-webkit-scrollbar-thumb {
    height: 30%;
    background: rgba(0, 0, 0, 25%);
    border-radius: 10px;
    border: 1px solid transparent;
    border-bottom: 4px solid transparent;
    background-clip: padding-box;
  } */

  @media (max-width: 641px) {
    height: 650px;
  }
`;
