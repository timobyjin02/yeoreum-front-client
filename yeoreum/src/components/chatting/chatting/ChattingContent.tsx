import styled from '@emotion/styled';
import { ChatInfo } from '../../../types/chat';

const ChattingContent = ({
  chats,
  scrollRef,
}: {
  chats: ChatInfo[];
  scrollRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <Containers>
      {chats.map((chat, index) => (
        <MessageBox
          key={index}
          ref={chats.length - 1 === index ? scrollRef : null}
        >
          <span>
            {/* {chat.username
        ? socket.id === chat.username
          ? ''
          : chat.username
        : ''} */}
          </span>
          <Message className="message">{chat.message}</Message>
        </MessageBox>
      ))}
    </Containers>
  );
};

export default ChattingContent;

const Containers = styled.div`
  width: 100%;
  padding: 10px 20px;
  height: calc(100vh - 182px);
  background-color: ${({ theme }) => theme.palette.background.light};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;

  /* .my_message { */
  /* align-self: flex-end; */

  .message {
    align-self: flex-end;
    color: ${({ theme }) => theme.palette.font.headline};
    background: ${({ theme }) => theme.palette.disable};
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  }
  /* } */
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
