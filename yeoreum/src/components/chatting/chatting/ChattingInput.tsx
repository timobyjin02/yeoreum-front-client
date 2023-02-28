import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import { ChatLogType } from '../../../types/chat';
import { socket } from '../../../pages/_app';

interface ChatsProps {
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
  chatSocketData: any;
}

function ChattingInput({ setChats, chatSocketData }: ChatsProps) {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const messageHandler = (chat: ChatLogType) =>
      setChats(prevChats => [...prevChats, chat]);
    socket.on('message', messageHandler);

    return () => {
      socket.off('message', messageHandler);
    };
  }, [setChats]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!message) return alert('메시지를 입력해 주세요.');

      socket.emit(
        'message',
        { userNo: 21, message, chatRoomNo: chatSocketData?.chatRoomNo },
        ({ response }: any) => {
          const chats = response.messagePayload;

          setChats(prevChats => [...prevChats, chats]);
          setMessage('');
        },
      );
    },
    [message, setChats],
  );

  return (
    <MessageForm onSubmit={sendMessageHandler}>
      <FileBox>
        <Img src="/icons/paperclip.svg" />
      </FileBox>
      <InputBox>
        <Input
          type="text"
          onChange={inputChangeHandler}
          value={message}
          placeholder="Message"
        />
      </InputBox>
      <SendButtonBox>
        <SendButton>
          <Img src="/icons/send.svg" />
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
  border-left: 1px solid ${({ theme }) => theme.palette.background.grey};
  background-color: ${({ theme }) => theme.palette.background.white};

  cursor: pointer;
`;

const SendButton = styled.button`
  background-color: inherit;
  outline: none;
  border: none;
`;
