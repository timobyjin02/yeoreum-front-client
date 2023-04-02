import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ParticipantsList from './ParticipantsList';
import ChatList from './ChatList';
import { ChatRoom } from '../../../types/chat';
import { usePromiseInquiry } from '../../../hooks/queries/promise';

interface ChatDataProps {
  chatData: ChatRoom[];
  setChatSocketData: any;
  chatSocketData: any;
}

function ChattingListBox({
  chatData,
  setChatSocketData,
  chatSocketData,
}: ChatDataProps) {
  const [viewList, setViewList] = useState(0);

  const { data } = usePromiseInquiry(chatSocketData?.chatRoomNo);
  const promiseInfo = data?.data.response.meeting;

  const tabs = [
    {
      id: 0,
      title: '참여인원',
      content: (
        <ParticipantsList
          chatData={chatData}
          setChatSocketData={setChatSocketData}
          chatSocketData={chatSocketData}
        />
      ),
    },
    {
      id: 1,
      title: '목록',
      content: (
        <ChatList chatData={chatData} setChatSocketData={setChatSocketData} />
      ),
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
      <ListWrapper>
        <ListBox>
          {tabs
            .filter(tab => viewList === tab.id)
            .map(tab => (
              <ListItem key={tab.id}>{tab.content}</ListItem>
            ))}
        </ListBox>
        <PromiseWrapper>
          <PromiseTitle>약속</PromiseTitle>
          <PromiseBox>
            <PromiseRow>장소:</PromiseRow>
            <PromiseColumn>{promiseInfo?.location}</PromiseColumn>
          </PromiseBox>
          <PromiseBox>
            <PromiseRow>시간:</PromiseRow>
            <PromiseColumn>{promiseInfo?.time}</PromiseColumn>
          </PromiseBox>
        </PromiseWrapper>
      </ListWrapper>
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
  padding: 0 10px;
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

const ListWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
`;

const ListBox = styled.div`
  width: 100%;
  height: 510px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const ListItem = styled.div`
  cursor: pointer;
`;

const PromiseWrapper = styled.div`
  width: 100%;
`;

const PromiseTitle = styled.span`
  margin: 0 0 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.font.headline};
`;

const PromiseBox = styled.div`
  display: flex;
  margin-left: 20px;
`;

const PromiseRow = styled.span`
  margin-right: 5px;
`;

const PromiseColumn = styled.span``;
