import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ParticipantsList from './ParticipantsList';
import ChatList from './ChatList';
import { ChatRoom } from '../../../pages/chatting';

interface ChatDataProps {
  chatData: ChatRoom[];
  setChatData: React.Dispatch<React.SetStateAction<ChatRoom[]>>;
  setA: any;
  a: any;
}

function ChattingListBox({ chatData, setChatData, setA, a }: ChatDataProps) {
  const [viewList, setViewList] = useState(0);

  const tabs = [
    {
      id: 0,
      title: '참여인원',
      content: <ParticipantsList chatData={chatData} setA={setA} a={a} />,
    },
    {
      id: 1,
      title: '목록',
      content: <ChatList chatData={chatData} setA={setA} />,
    },
  ];

  return (
    <Container>
      <ButtonBox>
        {tabs.map(tab => (
          <SelectButton
            key={tab.id}
            onClick={() => {
              setViewList(tab.id);
            }}
            className={viewList === tab.id ? 'active' : ''}
          >
            {tab.title}
          </SelectButton>
        ))}
      </ButtonBox>
      <ListsBox>
        {tabs
          .filter(tab => viewList === tab.id)
          .map(tab => (
            <ListItem key={tab.id}>{tab.content}</ListItem>
          ))}
      </ListsBox>
    </Container>
  );
}

export default ChattingListBox;

const Container = styled.div`
  width: 35%;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.palette.line.grey};
  @media (max-width: 640px) {
    display: none;
  }
`;

const ButtonBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const SelectButton = styled.button`
  width: 90px;
  height: 100%;
  margin: 0;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.palette.font.headline};
  background-color: inherit;
  cursor: pointer;

  &.active {
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.palette.main};
  }
`;

const ListsBox = styled.div`
  height: calc(100% - 60px);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ListItem = styled.div`
  cursor: pointer;
`;
