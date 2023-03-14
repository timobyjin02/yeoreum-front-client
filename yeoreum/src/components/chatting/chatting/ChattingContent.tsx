import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useLoginState } from '../../../store/hooks';
import { ChatLogType } from '../../../types/chat';
interface ChatProps {
  chats: ChatLogType[];
  setChats: React.Dispatch<React.SetStateAction<ChatLogType[]>>;
  scrollRef: React.RefObject<HTMLDivElement>;
  currentChatLog: any;
  chatSocketData: any;
}

function ChattingContent({
  chats,
  setChats,
  scrollRef,
  currentChatLog,
  chatSocketData,
}: ChatProps) {
  useEffect(() => {
    if (!currentChatLog) return;
    setChats(currentChatLog.reverse());
  }, [currentChatLog]);

  const getNickname = (userNo: number) => {
    return chatSocketData?.users.find((user: any) => user.userNo === userNo);
  };

  const { userData } = useLoginState();

  return (
    <Containers ref={scrollRef}>
      {chats?.map((chat, index) => (
        <MessageBox key={index}>
          <span>
            {chat.userNo
              ? userData?.userNo === chat.userNo
                ? ''
                : getNickname(chat.userNo)?.nickname
              : ''}
          </span>
          <Message
            className={
              userData?.userNo === chat.userNo ? 'my_message' : 'message'
            }
          >
            {chat.message}
          </Message>
        </MessageBox>
      ))}
    </Containers>
  );
}

export default ChattingContent;

const Containers = styled.div`
  width: 100%;
  padding: 10px 20px;
  height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.palette.background.light};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 640px) {
    height: calc(100vh - 122px);
  }
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;

  .my_message {
    align-self: flex-end;
    background: ${({ theme }) => theme.palette.disable};

    .message {
      align-self: flex-end;
      color: ${({ theme }) => theme.palette.font.headline};
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    }
  }
`;

const Message = styled.span`
  width: fit-content;
  margin-bottom: 0.7rem;
  padding: 10px 12px;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.palette.background.white};
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;
