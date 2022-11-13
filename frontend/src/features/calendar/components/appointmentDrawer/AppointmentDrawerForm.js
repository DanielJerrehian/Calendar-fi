import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { getSelectedAppointmentDateTime, setDrawerOpen } from '../../calendarSlice';


function AppointmentDrawerForm() {
    const dispatch = useDispatch();
    const appointmentDateTime = useSelector(getSelectedAppointmentDateTime);
    const appointmentStartDateTime = moment(appointmentDateTime, 'MM-DD-YYYY, HH');
    const appointmentEndDateTime = appointmentStartDateTime.clone().add(1, 'h');

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    sx={{
                        fontSize: 24
                    }}
                >
                    Appointment Details:
                </Typography>
                <IconButton
                    onClick={() => dispatch(setDrawerOpen(false))}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <TextField
                name='title'
                label='Title'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                name='email'
                label='E-Mail'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField
                name='confirmEmail'
                label='Confirm E-Mail'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 0, lg: 3 },
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} margin='normal' fullWidth />}
                        label='Start'
                        name='appointmentStartDateTime'
                        value={appointmentStartDateTime}
                        disabled={true}
                        onChange={() => null}
                    />
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} margin='normal' fullWidth />}
                        label='End'
                        name='appointmentEndDateTime'
                        value={appointmentEndDateTime}
                        disabled={true}
                        onChange={() => null}
                    />
                </LocalizationProvider>
            </Box>
            <TextField
                label='Notes'
                name='notes'
                multiline
                fullWidth
                maxRows={4}
                margin='normal'
                variant='outlined'
            />





        </Box>
    )
}

export default AppointmentDrawerForm