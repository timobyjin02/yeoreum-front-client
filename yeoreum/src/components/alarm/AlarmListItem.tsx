import styled from '@emotion/styled';
import { AlarmType } from '../../types/alarm';
import sliceString from '../../utils/sliceString';
import axios from 'axios';

interface AlarmListItemProps {
  alarmData: AlarmType;
}

interface AlarmDataObject {
  [key: string]: {
    isRead?: number;
    imageUrl?: string;
    text: string;
    btn?: string;
    clickHandler?: () => void;
  };
}

export const alarmDataByType = (alarmData: AlarmType) => {
  const { senderNickname, type, boardNo, senderProfileImage, isRead } =
    alarmData;

  const AlarmDataObject: AlarmDataObject = {
    1: {
      text: `${senderNickname}에게 온 여름 초대가 있습니다.`,
      btn: '수락',
    },
    2: {
      text: `${senderNickname}에게 온 여름 초대가 있습니다.`,
      btn: '수락',
    },
    3: {
      text: `${senderNickname}에게 온 친구 요청이 있습니다.`,
      btn: '수락',
      // clickHandler: () => {
      //   // 친구 수락
      //   axios.patch(`/api/friends/requests/${}/${senderUserNo}`);
      // },
    },
    4: {
      text: `${senderNickname}에게 친구 요청을 수락했습니다.`,
      btn: '수락',
    },
    5: {
      text: `${boardNo}번 게시물의 여름 신청서가 도착했습니다.`,
    },
    6: {
      text: '가입 조건 부적절로 회원가입이 반려됨',
    },
    7: {
      text: 'type 7 게시글 파티 초대 알림',
      btn: '수락',
    },
    8: {
      text: 'type 8 게시글 파티 초대 누가 거절해서 게시글 삭제됨',
    },
    9: {
      text: 'type 9 게시글 파티 초대 모두 수락해서 정상 등록',
    },
    10: {
      text: 'type 10 여름 신청서 파티 초대 알림',
      btn: '수락',
    },
    11: { text: 'type 11 평점 남기기 알림', btn: '평가' },
  };

  //
  AlarmDataObject[type].imageUrl = senderProfileImage;
  AlarmDataObject[type].isRead = isRead;

  return AlarmDataObject[type];
};

function AlarmListItem({ alarmData }: AlarmListItemProps) {
  if (alarmData.type < 1 || alarmData.type > 11) return null;

  const data = alarmDataByType(alarmData);

  return (
    <List>
      <ProfileImage src={data.imageUrl ? data.imageUrl : '/anonymous.png'} />
      <AlarmText>{sliceString(data.text, 36)}</AlarmText>
      {data.btn && <Btn>{data.btn}</Btn>}
    </List>
  );

  // const alarmObject: AlarmObject = {
  //   1: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>
  //         {sliceString(
  //           `${alarmInfo.senderNickname}에게 온 여름 초대가 있습니다.`,
  //           36,
  //         )}
  //       </AlarmText>
  //       <Btn>수락</Btn>
  //     </List>
  //   ),
  //   2: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>
  //         {sliceString(
  //           `${alarmInfo.senderNickname}에게 온 여름 초대가 있습니다.`,
  //           36,
  //         )}
  //       </AlarmText>
  //       <Btn>수락</Btn>
  //     </List>
  //   ),
  //   3: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>
  //         {sliceString(
  //           `${alarmInfo.senderNickname}에게 온 친구 요청이 있습니다.`,
  //           36,
  //         )}
  //       </AlarmText>
  //       <Btn>수락</Btn>
  //     </List>
  //   ),
  //   4: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>
  //         {sliceString(
  //           `${alarmInfo.senderNickname}님이 친구 요청을 수락했습니다.`,
  //           36,
  //         )}
  //       </AlarmText>
  //     </List>
  //   ),
  //   5: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>
  //         {sliceString(
  //           `${alarmInfo.boardNo}번 게시물의 여름 신청서가 도착했습니다.`,
  //           36,
  //         )}
  //       </AlarmText>
  //     </List>
  //   ),
  //   6: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>가입 조건 부적절로 회원가입이 반려됨</AlarmText>
  //     </List>
  //   ),
  //   7: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>type 7 게시글 파티 초대 알림</AlarmText>
  //       <Btn>수락</Btn>
  //     </List>
  //   ),
  //   8: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>
  //         type 8 게시글 파티 초대 누가 거절해서 게시글 삭제됨
  //       </AlarmText>
  //     </List>
  //   ),
  //   9: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>type 9 게시글 파티 초대 모두 수락해서 정상 등록</AlarmText>
  //     </List>
  //   ),
  //   10: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>type 10 여름 신청서 파티 초대 알림</AlarmText>
  //       <Btn>수락</Btn>
  //     </List>
  //   ),
  //   11: (
  //     <List>
  //       <ProfileImage />
  //       <AlarmText>type 11 평점 남기기 알림</AlarmText>
  //       <Btn>평가</Btn>
  //     </List>
  //   ),
  // };
}

export default AlarmListItem;

const List = styled.li`
  font-size: 14px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 8px 18px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
  flex-shrink: 0;
`;

const AlarmText = styled.span`
  font-size: 13px;
  flex-grow: 1;
`;

const Btn = styled.button`
  color: white;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.main};
  font-size: 12px;
  font-weight: 500;

  padding: 0 14px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  flex-shrink: 0;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.main};
  }
`;
