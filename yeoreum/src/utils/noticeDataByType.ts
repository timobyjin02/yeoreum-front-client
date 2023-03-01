import {
  useAcceptChat,
  useRejectChat,
} from '../hooks/queries/notices/chatRequestHandling';
import { useHandleBoard } from '../hooks/queries/notices/boardRequestHandling';
import {
  useAcceptFriend,
  useRejectFriend,
} from '../hooks/queries/notices/friendRequestHandling';
import { AlarmType } from '../types/alarm';
import { OnError, OnSuccess } from '../types/mutation';

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

  const acceptChatMutation = useAcceptChat();
  const rejectChatMutation = useRejectChat();

  const acceptFriendMutation = useAcceptFriend();
  const rejectFriendMutation = useRejectFriend();

  const handleBoardMutation = useHandleBoard();

  const alarmDataObject: AlarmDataObject = {
    1: {
      text: `type 1 ${senderNickname}에게 온 여름 초대가 있습니다.`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      acceptClickHandler: () =>
        acceptChatMutation.mutate([
          chatRoomNo as number,
          { type, senderNo: senderUserNo },
        ]),
      rejectClickHandler: () =>
        rejectChatMutation.mutate([
          chatRoomNo as number,
          { type, senderNo: senderUserNo },
        ]),
    },
    2: {
      text: `type 2 ${senderNickname}에게 온 여름 초대가 있습니다.`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      acceptClickHandler: () =>
        acceptChatMutation.mutate([
          chatRoomNo as number,
          { type, senderNo: senderUserNo },
        ]),
      rejectClickHandler: () =>
        rejectChatMutation.mutate([
          chatRoomNo as number,
          { type, senderNo: senderUserNo },
        ]),
    },
    3: {
      text: `type 3 ${senderNickname}에게 온 친구 요청이 있습니다.`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      acceptClickHandler: () =>
        acceptFriendMutation.mutate([friendNo as number, senderUserNo]),
      rejectClickHandler: () =>
        rejectFriendMutation.mutate([friendNo as number, senderUserNo]),
    },
    4: {
      text: `type 4 ${senderNickname}에게 친구 요청을 수락했습니다.`,
    },
    5: {
      text: `type 5 여름 신청(게스트) 파티 초대 알림`,
      acceptBtn: '수락',
      rejectBtn: '거절',
      acceptClickHandler: () =>
        handleBoardMutation.mutate({
          boardNo: boardNo as number,
          type,
          isAccepted: true,
        }),
      rejectClickHandler: () =>
        handleBoardMutation.mutate({
          boardNo: boardNo as number,
          type,
          isAccepted: false,
        }),
    },
    6: {
      text: 'type 6 학과 변경 신청 반려',
    },
    7: {
      text: 'type 7 게시글(호스트) 파티 초대 알림',
      acceptBtn: '수락',
      rejectBtn: '거절',
      acceptClickHandler: () =>
        handleBoardMutation.mutate({
          boardNo: boardNo as number,
          type,
          isAccepted: true,
        }),
      rejectClickHandler: () =>
        handleBoardMutation.mutate({
          boardNo: boardNo as number,
          type,
          isAccepted: false,
        }),
    },
    8: {
      text: 'type 8 게시글 파티 초대 누가 거절해서 게시글 삭제됨',
    },
    9: {
      text: 'type 9 게시글 파티 초대 모두 수락해서 정상 등록',
    },
    10: {
      text: 'type 10 누가 여름 신청(게스트) 거절해서 여름신청서 기각',
    },
    11: {
      text: 'type 11 평점 남기기 알림',
      acceptBtn: '평가',
    },
    12: {
      text: 'type 12 여름이 성사되었습니다.',
    },
  };

  alarmDataObject[type].imageUrl = senderProfileImage;
  alarmDataObject[type].isRead = isRead;

  return alarmDataObject[type];
}
