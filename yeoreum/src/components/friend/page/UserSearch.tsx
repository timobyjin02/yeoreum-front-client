import styled from '@emotion/styled';
import React from 'react';
import Progress from '../../../pages/friend/Progress';

interface Type {
  loading: boolean;
  searchTerm: string;
  setSearchTerm: (state: string | ((prev: string) => string)) => void;
}

function UserSearch({ searchTerm, setSearchTerm, loading }: Type) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <InputBox>
      {loading && (
        <ProgressWrapper>
          <Progress />
        </ProgressWrapper>
      )}
      <SearchIcon src="/icons/searchnormal.svg" />
      <Input
        placeholder="검색어를 입력하세요."
        value={searchTerm}
        onChange={changeHandler}
      />
      {searchTerm && (
        <SearchIcon
          hover
          onClick={() => setSearchTerm('')}
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiPgogICAgICAgICAgICA8Y2lyY2xlIGZpbGw9IiNDNUM1QzUiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im02IDYgNi4wMDUgNi4wMDZNMTIuMDA1IDYgNiAxMi4wMDYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=
"
        />
      )}
    </InputBox>
  );
}

export default UserSearch;

const InputBox = styled.div`
  width: 560px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  align-self: center;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.palette.background.light};
  @media (max-width: 600px) {
    width: 100%;
    max-width: 560px;
  }
`;

const SearchIcon = styled.img<{ hover?: boolean }>`
  width: 20px;
  height: 20px;
  cursor: ${({ hover }) => (hover ? 'pointer' : 'default')};
`;

const Input = styled.input`
  margin: 0 10px;
  background-color: ${({ theme }) => theme.palette.background.light};
  font-size: 0.875rem;
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.palette.font.subHeadline};
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.palette.font.disable};
    font-size: 0.875rem;
  }
`;

//

const ProgressWrapper = styled.div`
  position: absolute;
  /* top: 0;
  right: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center; */
`;
