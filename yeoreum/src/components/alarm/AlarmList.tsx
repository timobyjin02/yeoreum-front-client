import styled from '@emotion/styled';
import { AlarmType } from '../../types/alarm';
import sliceString from '../../utils/sliceString';

interface AlarmListProps {
  alarmInfo: AlarmType;
}

function AlarmList({ alarmInfo }: AlarmListProps) {
  if (alarmInfo.type < 1 || alarmInfo.type > 6) return null;
  switch (alarmInfo.type) {
    case 1:
      return (
        <List>
          <ProfileImage />
          <AlarmText>
            {sliceString(
              `${alarmInfo.senderNickname}에게 온 여름 초대가 있습니다.`,
              36,
            )}
          </AlarmText>
          <Btn>수락</Btn>
        </List>
      );
    case 2:
      return (
        <List>
          <ProfileImage />
          <AlarmText>
            {sliceString(
              `${alarmInfo.senderNickname}에게 온 여름 초대가 있습니다.`,
              36,
            )}
          </AlarmText>
          <Btn>수락</Btn>
        </List>
      );
    case 3:
      return (
        <List>
          <ProfileImage />
          <AlarmText>
            {sliceString(
              `${alarmInfo.senderNickname}에게 온 친구 요청이 있습니다. 친구 요청이 있습니다. 친구 요청이 있습니다.`,
              36,
            )}
          </AlarmText>
          <Btn>수락</Btn>
        </List>
      );
    case 4:
      return (
        <List>
          <ProfileImage />
          <AlarmText>
            {sliceString(
              `${alarmInfo.senderNickname}님이 친구요청을 수락했습니당.`,
              36,
            )}
          </AlarmText>
        </List>
      );
    case 5:
      return (
        <List>
          <ProfileImage />
          <AlarmText>
            {sliceString(
              `${alarmInfo.boardNo}번 게시물의 여름 신청서가 도착했습니당.`,
              36,
            )}
          </AlarmText>
        </List>
      );
    case 6:
      return (
        <List>
          <ProfileImage />
          <AlarmText>{`사진 부적절`}</AlarmText>
        </List>
      );
    default:
      return null;
  }
}

export default AlarmList;

const List = styled.li`
  font-size: 14px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 8px 18px;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
  margin-right: 12px;
`;

const AlarmText = styled.span`
  font-size: 13px;
  flex-grow: 1;
  max-width: 194px;
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
