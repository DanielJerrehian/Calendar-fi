import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fade from '@mui/material/Fade';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { getAlert, setAlert } from '../../features/calendar/calendarSlice';


function AlertBanner() {
    const dispatch = useDispatch();
    const alert = useSelector(getAlert);

    return (
        alert?.display &&
        <Fade in={alert?.display}>
            <Alert
                severity={alert?.severity}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3
                }}
                iconMapping={{
                    success: <CheckCircleOutlineIcon fontSize='inherit' />,
                }}
                action={
                    <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={() => dispatch(setAlert({ display: false, severity: '', message: '' }))}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }
            >
                {alert?.message}
            </Alert>
        </Fade>
    )
}

export default AlertBanner