import React from 'react';
import styled from '@emotion/styled';
import AllUserList from './AllUserList';
import AllUserSearch from './AllUserSearch';

interface PropsType {
  onClose: () => void;
}

function ApplicationFriendModal({ onClose }: PropsType) {
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
      <ResponsiveHeader>
        <BackButton onClick={() => onClose()}>이전</BackButton>
        <Title>친구신청</Title>
      </ResponsiveHeader>
      <SearchWrapper>
        <AllUserSearch />
      </SearchWrapper>
      <ListWrapper>
        {users.map((item, index) => {
          return <AllUserList key={index} item={item} />;
        })}
      </ListWrapper>
    </Container>
  );
}

export default ApplicationFriendModal;

const Container = styled.div`
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ResponsiveHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 44px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.line.grey};

  @media (min-width: 641px) {
    display: none;
  }
`;

const BackButton = styled.button`
  position: absolute;
  border: none;
  background: inherit;
  cursor: pointer;
`;

const Title = styled.h3`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const SearchWrapper = styled.div`
  padding: 30px 15px 0 30px;
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
