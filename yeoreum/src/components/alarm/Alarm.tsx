import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useUnreadNoticesQuery } from '../../hooks/queries/notices';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import { getToken } from '../../utils/user';
import AlarmList from './AlarmList';

function Alarm() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => setIsOpen(false));
  useResize('below', 640, () => setIsOpen(false));

  const token = getToken() as string;

  const { data, isError } = useUnreadNoticesQuery(token);

  const hasUnreadNotices =
    !isError && data && data.data.response.isUserHasUnreadNotices
      ? true
      : false;

  return (
    <Wrapper ref={ref}>
      <ImageAlarm
        alt="alarm"
        src="/icons/notification.svg"
        width={24}
        height={24}
        priority
        onClick={() => setIsOpen(prev => !prev)}
      />
      {hasUnreadNotices && <AlarmDot />}
      {isOpen && <AlarmList />}
    </Wrapper>
  );
}

export default Alarm;

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  &:hover {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 5%);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const ImageAlarm = styled(Image)`
  cursor: pointer;
`;

const AlarmDot = styled.div`
  width: 4px;
  height: 4px;
  top: 8px;
  right: 8px;
  border-radius: 50%;
  position: absolute;
  background-color: red;
`;
