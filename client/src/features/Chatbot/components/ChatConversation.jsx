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
  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
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
          elevation={1}
          sx={{
            margin: 1,
            padding: 1,
            maxWidth: '70%',
            alignSelf: chat.role === 'USER' ? 'flex-end' : 'flex-start',
            backgroundColor: chat.role === 'USER' ? '#32757c' : '#ffffff',
            color: chat.role === 'USER' ? '#ffffff' : '#000000',
          }}
        >
          <Message>{chat.message}</Message>
        </Paper>
      ))}
    </StyledBox>
  );
};

export default ChatConversation;