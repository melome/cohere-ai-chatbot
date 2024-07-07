import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import useStore from '../../../helpers/store';
import { setLocalStorage } from '../../../helpers/localstorage';

const ChatConversation = () => {
  const { chat_history } = useStore();
  setLocalStorage('chat_history', chat_history);
  return (
    <StyledBox>
      {chat_history.map((chat, index) => (
        <Message
          key={index}
          elevation={1}
          className={chat.role === 'USER' ? 'userMessage' : 'chatbotMessage'}
        >
          <MessageContent>{chat.message}</MessageContent>
        </Message>
      ))}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 8px;
  background-color: #f5f5f5;
  height: 300px;
  max-height: 300px;
`;

const Message = styled(Paper)`
  margin: 4px 8px;
  padding: 8px 16px;
  border-radius: 8px;
  max-width: 60%;
  word-wrap: break-word;

  &.userMessage {
    text-align: right;
    align-self: flex-end;
    background-color: #32757c;
    color: #ffffff;
  }

  &.chatbotMessage {
    text-align: left;
    align-self: flex-start;
    background-color: #ffffff;
    color: #32757c;
  }
`;

const MessageContent = styled(Typography)`
  word-wrap: break-word;
`;

export default ChatConversation;