import styled from '@emotion/styled';
import { AlarmType } from '../../types/alarm';
import noticeDataByType from '../../utils/noticeDataByType';
import noticeRequestByType from '../../utils/noticeRequestByType';
import sliceString from '../../utils/sliceString';

interface AlarmListItemProps {
  alarmData: AlarmType;
}

function AlarmListItem({ alarmData }: AlarmListItemProps) {
  if (alarmData.type < 1 || alarmData.type > 11) return null;

  const data = noticeDataByType(alarmData);

  const { accept, reject } = noticeRequestByType(alarmData.type);

  const { mutate: acceptClick } = data.acceptClickHandler?.(
    accept.onSuccess,
    accept.onError,
  );
  const { mutate: rejectClick } = data.rejectClickHandler?.(
    reject.onSuccess,
    reject.onError,
  );

  return (
    <List>
      <ProfileImage src={data.imageUrl ? data.imageUrl : '/anonymous.png'} />
      <AlarmText>{sliceString(data.text, 36)}</AlarmText>
      {data.acceptBtn && <Btn onClick={acceptClick}>{data.acceptBtn}</Btn>}
      {data.rejectBtn && <Btn onClick={rejectClick}>{data.rejectBtn}</Btn>}
    </List>
  );
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
