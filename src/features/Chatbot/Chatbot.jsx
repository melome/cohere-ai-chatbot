import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
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
  const [messages, setMessages] = useState([]);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "This is a bot response.", isUser: false },
      ]);
    }, 1000);
  };

  const handleMinimize = () => {
    // Minimize chat logic
  };

  const handleClose = () => {
    // Close chat logic
  };

  return (
    <CustomPaper>
      <ChatbotHeader onMinimize={handleMinimize} onClose={handleClose} />
      <ChatConversation messages={messages} />
      <ChatInputArea onSend={handleSend} />
    </CustomPaper>
  );
};

export default Chatbot;