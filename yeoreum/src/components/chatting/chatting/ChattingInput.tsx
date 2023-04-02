import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import { ChatLogType } from '../../../types/chat';
import { socket } from '../../../pages/_app';
import ModalPortal from '../../modalPortal/ModalPortal';
import Modal from '../../common/Modal';
import PromiseModal from './PromiseModal';

interface ChatsProps {
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
  chatSocketData: any;
}

function ChattingInput({ setChats, chatSocketData }: ChatsProps) {
  const [message, setMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

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

  const openPromiseHandler = () => {
    setIsOpen(true);
  };

  return (
    <MessageForm onSubmit={sendMessageHandler}>
      <InputBox>
        <Input type="text" onChange={inputChangeHandler} value={message} />
      </InputBox>
      <AttachWrapper>
        <FileBox>
          <Img className="file" src="/icons/paperclip.svg" />
          <Img
            className="promise"
            src="/icons/clockBlack.svg"
            onClick={openPromiseHandler}
          />
          {isOpen && (
            <Modal onClose={() => setIsOpen(false)}>
              <PromiseModal
                setIsOpen={setIsOpen}
                chatSocketData={chatSocketData}
              />
            </Modal>
          )}
        </FileBox>
        <SendButton>
          <Img className="send" src="/icons/send.svg" />
        </SendButton>
      </AttachWrapper>
    </MessageForm>
  );
}

export default ChattingInput;

const MessageForm = styled.form`
  border-top: 1px solid ${({ theme }) => theme.palette.line.grey};
`;

const InputBox = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px 10px 0 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;

const AttachWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileBox = styled.div``;

const Img = styled.img`
  width: 23px;
  margin-bottom: 7px;

  cursor: pointer;
  .file& {
    margin-left: 10px;
  }

  .promise& {
    margin-left: 10px;
  }

  .send& {
    margin-right: 10px;
  }
`;

const SendButton = styled.button`
  background-color: inherit;
  outline: none;
  border: none;
`;
