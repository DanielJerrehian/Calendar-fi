import React from 'react';
import { useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import Paper from '@mui/material/Paper';

function AppointmentSelectedCell() {
    const theme = useTheme();
    const fadeColor = keyframes`from {background-color: ${theme.palette.primary.light};} to {background-color: ${theme.palette.primary.main};}`;
    
    return (
        <Paper
            elevation={2}
            sx={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                animation: `${fadeColor} .75s ease normal forwards`,
            }}
        />
    )
}

export default AppointmentSelectedCell