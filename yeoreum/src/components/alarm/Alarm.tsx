import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import { AlarmType } from '../../types/alarm';

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
    isRead: 0,
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
];

interface AlarmListProps {
  alarmInfo: AlarmType;
}

const AlarmList = ({ alarmInfo }: AlarmListProps) => {
  const alarmTextMaker = (data: AlarmType) => {
    switch (data.type) {
      case 1:
        return `${data.type}번 알림`;
      case 2:
        return `${data.type}번 알림`;
      case 3:
        return `${data.type}번 알림`;
      case 4:
        return `${data.type}번 알림`;
      case 5:
        return `${data.type}번 알림`;
      case 6:
        return `${data.type}번 알림`;
      default:
        return;
    }
  };
  if (alarmInfo.type < 1 || alarmInfo.type > 6) return null;
  return (
    <List>
      <ProfileImage />
      <AlarmText>{alarmTextMaker(alarmInfo)}</AlarmText>
      <Btn>수락</Btn>
    </List>
  );
};

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
`;

const AlarmText = styled.span`
  flex-grow: 1;
  max-width: 198px;
`;

const Btn = styled.button`
  color: white;
  border-radius: 3px;
  background-color: #00b900;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  margin-left: 12px;
`;

const AlarmContent = () => {
  return (
    <AlarmWrapper>
      <ModalBubble />
      <AlarmModalBox>
        <AlarmLists>
          {alarmArray.map(a => (
            <AlarmList alarmInfo={a} />
          ))}
        </AlarmLists>
      </AlarmModalBox>
    </AlarmWrapper>
  );
};

const AlarmLists = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const List = styled.li`
  font-size: 14px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 8px 18px;
`;

function Alarm() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => setIsOpen(false));
  useResize('below', 640, () => setIsOpen(false));

  return (
    <div style={{ position: 'relative' }} ref={ref}>
      <ImageAlarm
        alt="alarm"
        src="/vercel.svg"
        width={40}
        height={40}
        priority
        onClick={() => setIsOpen(prev => !prev)}
      />
      {isOpen && <AlarmContent />}
    </div>
  );
}

export default Alarm;

const ImageAlarm = styled(Image)`
  margin-right: 20px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const AlarmWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;

  width: 350px;
  height: 100%;
`;

const ModalBubble = styled.div`
  position: absolute;
  right: 26px;
  top: 5px;
  width: 20px;
  height: 20px;
  background-color: white;
  transform: rotate(45deg);
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-top-left-radius: 4px;
  z-index: 10;
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 25%);
`;

const AlarmModalBox = styled.div`
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 14px;
  width: 100%;
  min-height: 128px;
  max-height: 368px;
  background-color: white;
  border-radius: 4px;
  box-shadow: -1px -1px 2px rgba(0, 0, 0, 25%), 1px 1px 2px rgba(0, 0, 0, 25%);
`;
