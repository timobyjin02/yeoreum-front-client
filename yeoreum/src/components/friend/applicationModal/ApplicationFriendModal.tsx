import React from 'react';
import styled from '@emotion/styled';
import AllUserList from './AllUserList';
import AllUserSearch from './AllUserSearch';

function ApplicationFriendModal() {
  const users = [
    {
      userNo: 1,
      nickname: '제주조랑말',
      profileImage: '',
    },
    {
      userNo: 2,
      profileImage: '',
      nickname: '제주조랑말제주조랑말제주조랑말',
    },
  ];

  return (
    <Container>
      <SearchWrapper>
        <AllUserSearch />
      </SearchWrapper>
      <ListWrapper>
        {users.map(item => {
          return <AllUserList item={item} />;
        })}
      </ListWrapper>
    </Container>
  );
}

export default ApplicationFriendModal;

const Container = styled.div`
  padding: 20px 10px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const SearchWrapper = styled.div`
  padding: 0 10px;
`;

const ListWrapper = styled.div`
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
  /* ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1);
  } */
`;
