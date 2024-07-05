import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styled from 'styled-components';
import useStore from '../../../helpers/store';
import { setLocalStorage } from '../../../helpers/localstorage';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 2;
  background-color: #f5f5f5;
  height: 300;
  max-height: 300;
`;

const Message = styled(Typography)`
  word-wrap: break-word;
`;

const ChatConversation = () => {
  const { chat_history } = useStore();
  setLocalStorage('chat_history', chat_history);
  return (
    <StyledBox>
      {chat_history.map((chat, index) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            margin: 1,
            padding: 1.5,
            paddingLeft: 2,
            paddingRight: 2,
            borderRadius: 3,
            maxWidth: '60%',
            textAlign: chat.role === 'USER' ? 'right' : 'left',
            alignSelf: chat.role === 'USER' ? 'flex-end' : 'flex-start',
            backgroundColor: chat.role === 'USER' ? '#32757c' : '#ffffff',
            color: chat.role === 'USER' ? '#ffffff' : '#32757c',
          }}
        >
          <Message>{chat.message}</Message>
        </Paper>
      ))}
    </StyledBox>
  );
};

export default ChatConversation;