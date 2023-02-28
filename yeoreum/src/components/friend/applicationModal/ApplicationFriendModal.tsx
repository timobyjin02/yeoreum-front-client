import React, { useState } from 'react';
import styled from '@emotion/styled';
import AllUserList from './AllUserList';
import AllUserSearch from './AllUserSearch';
import { requestGetUsers } from '../../../apis/users';
import { UsersResponseType } from '../../../types/user';
import { useNotFriendsQuery } from '../../../hooks/queries/friends';

interface PropsType {
  onClose: () => void;
}

function ApplicationFriendModal({ onClose }: PropsType) {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const { data } = useNotFriendsQuery(searchTerm);
  const lists = data?.data.response.searchResult;

  const TextBySearchTerm = ({
    searchTerm,
    loading,
  }: {
    searchTerm: string;
    loading: boolean;
  }) => {
    if (loading || searchTerm.length === 0) {
      return <ListItem>검색어를 입력하세요</ListItem>;
    }
    if (searchTerm.length > 0) {
      return <ListItem>검색 결과가 없습니다</ListItem>;
    }
    return null;
  };

  return (
    <Container>
      <ResponsiveHeader>
        <BackButton src="/icons/arrowleft.svg" onClick={() => onClose()} />
        <Title>친구신청</Title>
      </ResponsiveHeader>
      <SearchWrapper>
        <AllUserSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          loading={loading}
        />
      </SearchWrapper>
      <ListWrapper>
        {lists?.length > 0 ? (
          lists.map((item: UsersResponseType, index: number) => {
            return <AllUserList key={index} item={item} />;
          })
        ) : (
          <TextBySearchTerm searchTerm={searchTerm} loading={loading} />
        )}
      </ListWrapper>
    </Container>
  );
}

export default ApplicationFriendModal;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.font.subHeadline};
  cursor: pointer;
`;

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

const BackButton = styled.img`
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
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%;
    background: rgba(0, 0, 0, 25%);
    border-radius: 10px;
    border: 1px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    background-clip: padding-box;
  }

  @media (max-width: 640px) {
    height: 650px;
  }
`;
