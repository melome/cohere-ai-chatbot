import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Delete from '@mui/icons-material/DeleteOutline';
import styled from 'styled-components';
import useStore from '../../../helpers/store';

const StyledToolbar = styled(Toolbar)`
  background-color: #0c3e43;
`
const StyledIconButton = styled(IconButton)`
  '& .MuiIconButton-root': {
      '&:hover': {
          backgroundColor: rgba(0, 0, 0, 0.38),
      }
  },
`

const ChatbotHeader = () => {
  const { reset } = useStore();
  const onClose = () => {
    reset();
  }
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Cohere
        </Typography>
        <StyledIconButton edge="end" color="inherit" onClick={onClose}>
          <Delete />
        </StyledIconButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default ChatbotHeader;