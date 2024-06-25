import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  background-color: #0c3e43;
`

const ChatbotHeader = ({ onMinimize, onClose }) => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Cohere
        </Typography>
        <IconButton edge="end" color="inherit" onClick={onMinimize}>
          <MinimizeIcon />
        </IconButton>
        <IconButton edge="end" color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default ChatbotHeader;