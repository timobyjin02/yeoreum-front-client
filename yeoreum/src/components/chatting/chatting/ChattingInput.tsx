import React, { useState, useCallback, FormEvent } from 'react';
import styled from '@emotion/styled';
import { ChatInfo } from '../../../types/chat';

interface Props {
  setChats: React.Dispatch<React.SetStateAction<ChatInfo[]>>;
  scrollRef: React.RefObject<HTMLDivElement>;
}

function ChattingInput({ setChats, scrollRef }: Props) {
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const chat = {
    username: 'a',
    chatRoomNo: 1,
    message: '안녕',
  };

  const onSendMessage = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!message) return alert('메시지를 입력해 주세요.');
      setMessage('');

      setChats(prevChats => [...prevChats, chat]);
      setMessage('');
      setTimeout(
        () => scrollRef?.current?.scrollIntoView({ block: 'end' }),
        50,
      );
    },
    [message],
  );

  return (
    <MessageForm onSubmit={onSendMessage}>
      <FileBox>
        <Img src="/chatting/folder.png" />
      </FileBox>
      <InputBox>
        <Input
          type="text"
          onChange={handleChange}
          value={message}
          placeholder="Message"
        />
      </InputBox>
      <SendButtonBox>
        <SendButton>
          <Img src="/chatting/send.png" />
        </SendButton>
      </SendButtonBox>
    </MessageForm>
  );
}

export default ChattingInput;

const MessageForm = styled.form`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.palette.line.grey};
`;

const FileBox = styled.div`
  margin-right: 10px;
  padding: 0 20px;
  border-right: 1px solid ${({ theme }) => theme.palette.line.grey};
`;

const Img = styled.img`
  width: 20px;
`;

const InputBox = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SendButtonBox = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.light};
`;

const SendButton = styled.button`
  background-color: inherit;
  outline: none;
  border: none;
`;
