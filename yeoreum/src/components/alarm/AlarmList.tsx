import styled from '@emotion/styled';
import React from 'react';
import AlarmListItem from './AlarmListItem';
import { AlarmType } from '../../types/alarm';
import { getToken } from '../../utils/user';
import { useNoticesQuery } from '../../hooks/queries/notices';

function AlarmList() {
  const token = getToken() as string;
  const { data } = useNoticesQuery(token);
  const noticesData = data?.data.response.notices;

  // const alarmArray = [
  //   {
  //     noticeNo: 6,
  //     type: 6,
  //     senderUserNo: 20,
  //     senderNickname: 'aaa',
  //     senderProfileImage: '',
  //     isRead: 0,
  //     createdDate: '2023-01-16T04:19:47.137Z',
  //   },
  //   {
  //     noticeNo: 5,
  //     type: 5,
  //     senderUserNo: 20,
  //     senderNickname: 'aaa',
  //     senderProfileImage: '',
  //     isRead: 0,
  //     createdDate: '2023-01-16T04:19:47.137Z',
  //     boardNo: 1,
  //   },
  //   {
  //     noticeNo: 4,
  //     type: 4,
  //     senderUserNo: 20,
  //     senderNickname: 'aaa',
  //     senderProfileImage: '',
  //     isRead: 0,
  //     createdDate: '2023-01-16T04:19:47.137Z',
  //     friendNo: 2,
  //   },
  //   {
  //     noticeNo: 3,
  //     type: 3,
  //     senderUserNo: 20,
  //     senderNickname: 'aaa',
  //     senderProfileImage: '',
  //     isRead: 0,
  //     createdDate: '2023-01-16T04:19:47.137Z',
  //     friendNo: 1,
  //   },
  //   {
  //     noticeNo: 2,
  //     type: 2,
  //     senderUserNo: 20,
  //     senderNickname: 'aaa',
  //     senderProfileImage: '',
  //     isRead: 0,
  //     createdDate: '2023-01-16T04:19:47.137Z',
  //     chatRoomNo: 1,
  //   },
  // ];

  return (
    <AlarmContainer>
      <AlarmModalBox>
        <AlarmLists>
          {noticesData?.map((alarm: AlarmType, idx: any) => (
            <AlarmListItem key={idx} alarmData={alarm} />
          ))}
        </AlarmLists>
      </AlarmModalBox>
    </AlarmContainer>
  );
}

export default AlarmList;

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
`;

const AlarmLists = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
