import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    display: flex;
    padding: 16px;
    padding-right: 0;
`;

const ChatInputArea = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <StyledBox >
      <TextField
        variant="outlined"
        placeholder="Type your message..."
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSend();
          }
        }}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon 
          sx={{ color: '#0c3e43' }} 
          fontSize="large" 
          style={{ backgroundColor: '#ffffff' }}
        />
      </IconButton>
    </StyledBox>
  );
};

export default ChatInputArea;