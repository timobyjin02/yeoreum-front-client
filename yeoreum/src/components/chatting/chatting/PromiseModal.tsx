import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useMeetingMutation } from '../../../hooks/queries/promise';
import { socket } from '../../../pages/_app';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

interface PromiseeProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  chatSocketData: any;
}

function PromiseModal({ setIsOpen, chatSocketData }: PromiseeProps) {
  const [location, setPlace] = useState('');
  const [time, setTime] = useState<Date>(new Date());

  const { mutate } = useMeetingMutation(
    location,
    time,
    chatSocketData.chatRoomNo,
  );

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'location') {
      setPlace(e.target.value);
    } else if (e.target.name === 'time') {
      const newTime = moment(e.target.value, 'YYYY-MM-DD HH:mm:ss').toDate();
      setTime(newTime);
    }
  };

  const datePickerChangeHandler = (date: Date) => {
    setTime(date);
  };

  const promiseSubmitHandler = () => {
    console.log('location:', location);
    console.log('Time:', time);

    // socket.emit('promise', { location, time });
    setIsOpen(false);
    mutate();
  };

  return (
    <Container>
      <Title>약속을 입력해주세요</Title>
      <InputBox>
        <PromiseTitle>장소</PromiseTitle>
        <PromiseInput name="location" onChange={inputChangeHandler} />
      </InputBox>
      <InputBox>
        <PromiseTitle>시간</PromiseTitle>
        <DatePicker selected={time} onChange={datePickerChangeHandler} />
      </InputBox>
      <SubmitButton onClick={promiseSubmitHandler}>제출</SubmitButton>
    </Container>
  );
}

export default PromiseModal;

const Container = styled.div`
  width: 450px;
  padding: 14px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const InputBox = styled.div``;

const PromiseInput = styled.input`
  width: 100%;
  height: 38px;
  margin-bottom: 16px;
  padding: 0 10px;
  font-size: 1rem;
  background-color: #f3f4f5;
  border: none;
  border-radius: 10px;
  outline: none;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.palette.main};
  }
  &::placeholder {
    color: #8e8e8e;
  }
`;

const PromiseTitle = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: default;
`;

const SubmitButton = styled.button`
  float: right;
  width: 70px;
  height: 40px;
  margin-bottom: 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.font.white};
  background: ${({ theme }) => theme.palette.main};

  cursor: pointer;
`;
