import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0C3E43',
        },
        secondary: {
            main: '#32757C',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: '#32757C', // Border color when hovering
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#32757C', // Border color when focused
                        },
                    },
                },
            },
        },
    },
});

export default theme;