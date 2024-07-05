import React from 'react';
import { Paper } from '@mui/material';
import ChatbotHeader from './components/ChatbotHeader';
import ChatConversation from './components/ChatConversation';
import ChatInputArea from './components/ChatInputArea';
import styled from 'styled-components';

const CustomPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    bottom: 20;
    right: 20;
    width: 300px;
    height: 400px;
`;

const Chatbot = () => {
  return (
    <CustomPaper>
      <ChatbotHeader/>
      <ChatConversation/>
      <ChatInputArea/>
    </CustomPaper>
  );
};

export default Chatbot;