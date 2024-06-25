import React from 'react';
import { Box, Paper } from '@mui/material';

function ChatHistory() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper />
        </Box>
    )
}

export default ChatHistory