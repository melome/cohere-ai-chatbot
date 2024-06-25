import React, { useState } from 'react';
import { Button, Popover, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import Chatbot from '../features/Chatbot/Chatbot';
import styled from 'styled-components';

const CustomChatIcon = styled(ChatIcon)`
    color: #ffffff !important;
    background-color: #0c3e43;
    border-radius: 50px;
    padding: 20px;
`;

const ChatPopUpButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="chat-popup-button">
            <CustomChatIcon variant="contained" color="primary" onClick={handleClick}/>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClick}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Chatbot />
            </Popover>
        </div>
    );
};

export default ChatPopUpButton;