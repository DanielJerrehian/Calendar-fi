import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#7aff86',
            light: '#b0ffb7',
            dark: '#40cb57'
        },
        secondary: {
            main: '#80e7ff',
            light: '#b6ffff',
            dark: '#48b5cc'
        }
    },
    typography: {
        fontFamily: 'Quicksand'
    },
})