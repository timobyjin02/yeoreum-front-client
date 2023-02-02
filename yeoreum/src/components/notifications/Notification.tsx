import React from 'react';
import styled from '@emotion/styled';
import { AlarmType } from '../../types/alarm';
import sliceString from '../../utils/sliceString';

interface AlarmListProps {
  alarmInfo: AlarmType;
}

function Notification({ alarmInfo }: AlarmListProps) {
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
          >{`사진 부적절 반려`}</NotificationText>
        </List>
      );
    default:
      return null;
  }
}

export default Notification;

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
