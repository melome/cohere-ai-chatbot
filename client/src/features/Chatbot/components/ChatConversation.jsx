import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styled from 'styled-components';
import useStore from '../../../helpers/store';
import { setLocalStorage } from '../../../helpers/localstorage';

const ChatConversation = () => {
  const { chat_history } = useStore();
  const chatContainerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // set showScrollButton to true when the user scrolls up
  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      setShowScrollButton(scrollHeight - scrollTop > clientHeight + 20);
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Update local storage whenever chat_history changes
  useEffect(() => {
    setLocalStorage('chat_history', chat_history);
    scrollToBottom();
  }, [chat_history]);

  return (
    <ConversationBox ref={chatContainerRef} onScroll={handleScroll}>
      {chat_history.map((chat, index) => (
        <Message
          key={index}
          elevation={1}
          className={chat.role === 'USER' ? 'userMessage' : 'chatbotMessage'}
        >
          <MessageContent>{chat.message}</MessageContent>
        </Message>
      ))}
      {/* {showScrollButton && (
          <ScrollButton
            onClick={scrollToBottom}
          >
            <ArrowDownwardIcon />
          </ScrollButton>
      )} */}
    </ConversationBox>
  );
};

const ConversationBox = styled(Box)`
  display: flex;
  position: relative;
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

const ScrollButton = styled(IconButton)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  width: 40px;
`;

export default ChatConversation;