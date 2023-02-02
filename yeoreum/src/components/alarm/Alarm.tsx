import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import AlarmList from './AlarmList';

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

function Alarm() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => setIsOpen(false));
  useResize('below', 640, () => setIsOpen(false));

  return (
    <Wrapper ref={ref}>
      <ImageAlarm
        alt="alarm"
        src="/vercel.svg"
        width={40}
        height={40}
        priority
        onClick={() => setIsOpen(prev => !prev)}
      />
      {isOpen && (
        <AlarmContainer>
          <AlarmModalBox>
            <AlarmLists>
              {alarmArray.map((alarm, idx: any) => (
                <AlarmList key={idx} alarmInfo={alarm} />
              ))}
            </AlarmLists>
          </AlarmModalBox>
        </AlarmContainer>
      )}
    </Wrapper>
  );
}

export default Alarm;

const Wrapper = styled.div`
  position: relative;
`;

const ImageAlarm = styled(Image)`
  margin-right: 20px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const AlarmContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;

  width: 380px;
  height: 100%;
`;

const AlarmModalBox = styled.div`
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 8px;
  width: 100%;
  min-height: 128px;
  max-height: 428px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 25%);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: rgba(0, 0, 0, 25%);
    border: 1px solid transparent;
    background-clip: padding-box;
  }
  /* ::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 25%);
  } */
`;

const AlarmLists = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
