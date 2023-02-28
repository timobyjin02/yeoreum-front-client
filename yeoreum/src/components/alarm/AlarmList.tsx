import styled from '@emotion/styled';
import React from 'react';
import AlarmListItem from './AlarmListItem';
import { AlarmType } from '../../types/alarm';
import { useNoticesQuery } from '../../hooks/queries/notices';

function AlarmList() {
  const { data } = useNoticesQuery();
  const noticesData = data?.data.response.notices;

  return (
    <AlarmContainer>
      <AlarmModalBox>
        <AlarmLists>
          {noticesData?.length ? (
            noticesData?.map((alarm: AlarmType, idx: number) => (
              <AlarmListItem key={idx} alarmData={alarm} />
            ))
          ) : (
            <>알림이 하나도 없누</>
          )}
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
  top: 6px;
  width: 100%;
  min-height: 68px;
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
