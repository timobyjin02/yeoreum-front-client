import styled from '@emotion/styled';
import React from 'react';
import { AlarmType } from '../../types/alarm';
import sliceString from '../../utils/sliceString';

const alarmArray = [
  {
    noticeNo: 6,
    type: 6,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    boardNo: 1,
  },
  {
    noticeNo: 4,
    type: 4,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 2,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 1,
  },
  {
    noticeNo: 2,
    type: 2,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.137Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 1,
    type: 1,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    boardNo: 1,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 6,
    type: 6,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    boardNo: 1,
  },
  {
    noticeNo: 4,
    type: 4,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 2,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.137Z',
    friendNo: 1,
  },
  {
    noticeNo: 2,
    type: 2,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.137Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 1,
    type: 1,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
  {
    noticeNo: 5,
    type: 5,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 0,
    createdDate: '2023-01-16T04:19:47.133Z',
    boardNo: 1,
  },
  {
    noticeNo: 3,
    type: 3,
    senderUserNo: 20,
    senderNickname: 'aaa',
    senderProfileImage: 'abc',
    isRead: 1,
    createdDate: '2023-01-16T04:19:47.133Z',
    chatRoomNo: 1,
  },
];

function NotificationLists() {
  return (
    <ListContainer>
      {alarmArray.map((alarm, idx) => (
        <NotificationList key={idx} alarmInfo={alarm} />
      ))}
    </ListContainer>
  );
}

export default NotificationLists;

const ListContainer = styled.ul`
  margin-top: 10px;
`;

interface AlarmListProps {
  alarmInfo: AlarmType;
}

function NotificationList({ alarmInfo }: AlarmListProps) {
  if (alarmInfo.type < 1 || alarmInfo.type > 6) return null;
  switch (alarmInfo.type) {
    case 1:
      return (
        <List>
          <Light isRead={Boolean(alarmInfo.isRead)} />
          <ProfileImage />
          <NotificationText isRead={Boolean(alarmInfo.isRead)}>
            {sliceString(
              `${alarmInfo.senderNickname}에게 온 여름 초대가 있습니다.`,
              55,
            )}
          </NotificationText>
          <Btn>수락</Btn>
        </List>
      );
    case 2:
      return (
        <List>
          <Light isRead={Boolean(alarmInfo.isRead)} />
          <ProfileImage />
          <NotificationText isRead={Boolean(alarmInfo.isRead)}>
            {sliceString(
              `${alarmInfo.senderNickname}에게 온 여름 초대가 있습니다.`,
              36,
            )}
          </NotificationText>
          <Btn>수락</Btn>
        </List>
      );
    case 3:
      return (
        <List>
          <Light isRead={Boolean(alarmInfo.isRead)} />
          <ProfileImage />
          <NotificationText isRead={Boolean(alarmInfo.isRead)}>
            {sliceString(
              `${alarmInfo.senderNickname}에게 온 친구 요청이 있습니다. 친구 요청이 있습니다. 친구 요청이 있습니다.`,
              36,
            )}
          </NotificationText>
          <Btn>수락</Btn>
        </List>
      );
    case 4:
      return (
        <List>
          <Light isRead={Boolean(alarmInfo.isRead)} />
          <ProfileImage />
          <NotificationText isRead={Boolean(alarmInfo.isRead)}>
            {sliceString(
              `${alarmInfo.senderNickname}님이 친구요청을 수락했습니당.`,
              36,
            )}
          </NotificationText>
        </List>
      );
    case 5:
      return (
        <List>
          <Light isRead={Boolean(alarmInfo.isRead)} />
          <ProfileImage />
          <NotificationText isRead={Boolean(alarmInfo.isRead)}>
            {sliceString(
              `${alarmInfo.boardNo}번 게시물의 여름 신청서가 도착했습니당.`,
              36,
            )}
          </NotificationText>
        </List>
      );
    case 6:
      return (
        <List>
          <Light isRead={Boolean(alarmInfo.isRead)} />
          <ProfileImage />
          <NotificationText
            isRead={Boolean(alarmInfo.isRead)}
          >{`사진 부적절`}</NotificationText>
        </List>
      );
    default:
      return null;
  }
}

const List = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #f0f0f0;
`;

const Light = styled.div<{ isRead: boolean }>`
  width: 5px;
  height: 5px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({ isRead }) => (isRead ? 'lightgray' : 'red')};
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
  flex-shrink: 0;
`;

const NotificationText = styled.span<{ isRead: boolean }>`
  font-size: 13px;
  flex-grow: 1;
  display: block;
  color: ${({ isRead }) => (isRead ? 'lightgray' : 'inherit')};
`;

const Btn = styled.button`
  color: white;
  border-radius: 3px;
  background-color: #00b900;
  font-size: 12px;
  font-weight: 500;
  /* padding: 6px 12px; */
  padding: 0 14px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  flex-shrink: 0;

  cursor: pointer;
  &:hover {
    background-color: #009400;
  }
`;
