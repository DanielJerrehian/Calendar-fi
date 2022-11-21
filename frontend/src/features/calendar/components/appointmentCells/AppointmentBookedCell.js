import React from 'react';
import { useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function AppointmentBookedCell() {
    const theme = useTheme();
    return (
        <Paper
            elevation={0}
            square
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: theme?.palette?.secondary?.light
            }}
        >
            <Typography>
                Booked
            </Typography>
        </Paper>
    )
}

export default AppointmentBookedCell