import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

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

const ChatConversation = ({ messages }) => {
  return (
    <StyledBox>
      {messages.map((msg, index) => (
        <Paper
          key={index}
          elevation={1}
          sx={{
            margin: 1,
            padding: 1,
            maxWidth: '70%',
            alignSelf: msg.isUser ? 'flex-end' : 'flex-start',
            backgroundColor: msg.isUser ? '#32757c' : '#ffffff',
            color: msg.isUser ? '#ffffff' : '#000000',
          }}
        >
          <Message>{msg.text}</Message>
        </Paper>
      ))}
    </StyledBox>
  );
};

export default ChatConversation;