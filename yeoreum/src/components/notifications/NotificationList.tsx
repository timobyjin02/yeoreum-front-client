import React from 'react';
import styled from '@emotion/styled';
import Notification from './Notification';
import { useNoticesQuery } from '../../hooks/queries/notices';
import { getToken } from '../../utils/user';
import { AlarmType } from '../../types/alarm';

function NotificationList() {
  const token = getToken() as string;
  const { data } = useNoticesQuery(token);
  const noticesData = data?.data.response.notices;

  return (
    <ListContainer>
      {noticesData?.map((alarm: AlarmType, idx: number) => (
        <Notification key={idx} alarmData={alarm} />
      ))}
    </ListContainer>
  );
}

export default NotificationList;

const ListContainer = styled.ul`
  margin-top: 10px;
`;
