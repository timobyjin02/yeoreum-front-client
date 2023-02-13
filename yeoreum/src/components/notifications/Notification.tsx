import React from 'react';
import styled from '@emotion/styled';
import { AlarmType } from '../../types/alarm';
import { alarmDataByType } from '../alarm/AlarmListItem';

interface AlarmListItemProps {
  alarmInfo: AlarmType;
}

function Notification({ alarmInfo }: AlarmListItemProps) {
  if (alarmInfo.type < 1 || alarmInfo.type > 11) return null;

  const data = alarmDataByType(alarmInfo);

  return (
    <List>
      <Light isRead={Boolean(data.isRead)} />
      <ProfileImage src={data.imageUrl ? data.imageUrl : '/anonymous.png'} />
      <NotificationText isRead={Boolean(data.isRead)}>
        {data.text}
      </NotificationText>
      {data.btn && <Btn isRead={Boolean(data.isRead)}>{data.btn}</Btn>}
    </List>
  );
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

const ProfileImage = styled.img`
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

const Btn = styled.button<{ isRead: boolean }>`
  color: white;
  border-radius: 3px;
  background-color: ${({ theme, isRead }) =>
    isRead ? theme.palette.disable : theme.palette.main};
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
    background-color: ${({ theme, isRead }) =>
      isRead ? theme.palette.disable : theme.palette.main};
  }
`;
