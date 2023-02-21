import {
  useAcceptFriend,
  useRejectFriend,
} from '../hooks/queries/notices/friendRequestHandling';
import { AlarmType } from '../types/alarm';
import { OnError, OnSuccess } from '../types/mutation';
import { getToken } from './user';

interface AlarmDataObject {
  [key: string]: {
    isRead?: number;
    imageUrl?: string;
    text: string;
    acceptBtn?: string;
    rejectBtn?: string;
    acceptClickHandler?: any;
    rejectClickHandler?: any;
  };
}

export default function noticeDataByType(alarmData: AlarmType) {
  const {
    senderNickname,
    type,
    boardNo,
    senderProfileImage,
    isRead,
    friendNo,
    chatRoomNo,
    senderUserNo,
  } = alarmData;
  const token = getToken() as string;

  const alarmDataObject: AlarmDataObject = {
    1: {
      text: `${senderNickname}에게 온 여름 초대가 있습니다.`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      // chatRoomNo,
    },
    2: {
      text: `${senderNickname}에게 온 여름 초대가 있습니다.`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      // chatRoomNo,
    },
    3: {
      text: `${senderNickname}에게 온 친구 요청이 있습니다.`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      acceptClickHandler: (onSuccess: OnSuccess, onError: OnError) =>
        useAcceptFriend(
          friendNo as number,
          senderUserNo,
          token,
          onSuccess,
          onError,
        ),
      rejectClickHandler: (onSuccess: OnSuccess, onError: OnError) =>
        useRejectFriend(
          friendNo as number,
          senderUserNo,
          token,
          onSuccess,
          onError,
        ),
    },
    4: {
      text: `${senderNickname}에게 친구 요청을 수락했습니다.`,
    },
    5: {
      text: `여름 신청(게스트) 파티 초대 알림`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      // boardNo,
    },
    6: {
      text: '가입 조건 부적절로 회원가입이 반려됨',
    },
    7: {
      text: 'type 7 게시글 파티 초대 알림',
      acceptBtn: '수락',
      rejectBtn: '거절',
      //: boardNo,
    },
    8: {
      text: 'type 8 게시글 파티 초대 누가 거절해서 게시글 삭제됨',
    },
    9: {
      text: 'type 9 게시글 파티 초대 모두 수락해서 정상 등록',
    },
    10: {
      text: '누가 여름 신청(게스트) 거절해서 여름신청서 기각',
    },
    11: { text: 'type 11 평점 남기기 알림', acceptBtn: '평가' },
  };

  alarmDataObject[type].imageUrl = senderProfileImage;
  alarmDataObject[type].isRead = isRead;

  return alarmDataObject[type];
}
