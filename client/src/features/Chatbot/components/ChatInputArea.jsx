import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import useStore from '../../../helpers/store';

const StyledBox = styled(Box)`
    display: flex;
    padding: 16px;
    padding-right: 0;
`;

const ChatInputArea = () => {
  const [message, setMessage] = useState('');
  const chat = useStore((state) => state.chat);
  const addMessage = useStore((state) => state.addMessage);

  const isDisabled = !message.trim();

  const handleSend = () => {
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      chat(trimmedMessage);
      addMessage("USER", trimmedMessage);
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
          if (e.key === 'Enter' && !isDisabled) {
            handleSend();
          }
        }}
      />
      <IconButton
        color="primary"
        disabled={isDisabled}
        onClick={handleSend}
        sx={{
          margin: '2px',
          marginRight: '6px'
        }}>
        <SendIcon
          color="primary"
          fontSize="large"
        />
      </IconButton>
    </StyledBox>
  );
};

export default ChatInputArea;