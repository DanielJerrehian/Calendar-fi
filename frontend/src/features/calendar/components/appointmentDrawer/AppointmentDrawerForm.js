import React, { useState, useEffect } from 'react';
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
import Button from '@mui/material/Button';

import { getSelectedAppointmentDateTime, setDrawerOpen, getAppointmentFormValidationError, setAppointmentFormValidationError, setEmailMatchValidationError, getEmailMatchValidationError, setSelectedAppointmentDateTime } from '../../calendarSlice';


function AppointmentDrawerForm() {
    const dispatch = useDispatch();
    const appointmentDateTime = useSelector(getSelectedAppointmentDateTime);
    const appointmentFormValidationError = useSelector(getAppointmentFormValidationError);
    const emailMatchValidationError = useSelector(getEmailMatchValidationError);
    const [newAppointment, setNewAppointment] = useState({ title: '', startDateTime: '', endDateTime: '', email: '', confirmEmail: '', notes: '' })

    const handleCloseForm = () => {
        dispatch(setDrawerOpen(false));
        dispatch(setSelectedAppointmentDateTime(null));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let [name, value] of Object.entries(newAppointment)) {
            if (name !== 'notes') {
                let object = {}
                object[name] = true
                !value && dispatch(setAppointmentFormValidationError(object))
            }
        }
        if (newAppointment.email !== newAppointment.confirmEmail) {
            dispatch(setEmailMatchValidationError(true));
            dispatch(setAppointmentFormValidationError({ email: true }));
            dispatch(setAppointmentFormValidationError({ confirmEmail: true }));
            return null;
        }
        let submit = true;
        for (let [name, value] of Object.entries(newAppointment)) {
            if (name !== 'notes') {
                if (!value) submit = false;
            }
        }
        if (submit) {
            console.log(newAppointment);
            dispatch(setDrawerOpen(false));
            setNewAppointment({ title: '', startDateTime: '', endDateTime: '', email: '', confirmEmail: '', notes: '' })
        }
    }

    useEffect(() => {
        const appointmentStartDateTime = moment(appointmentDateTime, 'MM-DD-YYYY, HH').format('MM-DD-YYYY, HH');
        const appointmentEndDateTime = moment(appointmentDateTime, 'MM-DD-YYYY, HH').clone().add(1, 'h').format('MM-DD-YYYY, HH');
        if (appointmentStartDateTime && appointmentEndDateTime !== 'Invalid date') {
            setNewAppointment(prevState => {
                return {
                    ...prevState,
                    startDateTime: appointmentStartDateTime,
                    endDateTime: appointmentEndDateTime
                }
            })
        }
    }, [appointmentDateTime]);

    useEffect(() => {
        for (let [name, value] of Object.entries(newAppointment)) {
            let object = {}
            object[name] = false
            value && dispatch(setAppointmentFormValidationError(object));
            value && dispatch(setEmailMatchValidationError(false));
        }
    }, [dispatch, newAppointment])

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
                    onClick={handleCloseForm}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <form>
                <TextField
                    name='title'
                    label='Title'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    value={newAppointment?.title}
                    error={appointmentFormValidationError?.title}
                    onChange={handleChange}
                />
                <TextField
                    name='email'
                    label='E-Mail'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    value={newAppointment?.email}
                    error={appointmentFormValidationError?.email}
                    helperText={emailMatchValidationError ? "E-Mails don't match" : null}
                    onChange={handleChange}
                />
                <TextField
                    name='confirmEmail'
                    label='Confirm E-Mail'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    value={newAppointment?.confirmEmail}
                    error={appointmentFormValidationError?.confirmEmail}
                    helperText={emailMatchValidationError ? "E-Mails don't match" : null}
                    onChange={handleChange}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', xl: 'row' },
                        gap: { xs: 0, xl: 3 },
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} margin='normal' fullWidth />}
                            label='Start'
                            name='startDateTime'
                            value={moment(appointmentDateTime, 'MM-DD-YYYY, HH')}
                            disabled={true}
                            onChange={() => null}
                        />
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} margin='normal' fullWidth />}
                            label='End'
                            name='endDateTime'
                            value={moment(appointmentDateTime, 'MM-DD-YYYY, HH').add(1, 'h')}
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
                    minRows={4}
                    maxRows={6}
                    margin='normal'
                    variant='outlined'
                    value={newAppointment?.notes}
                    error={appointmentFormValidationError?.notes}
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                    variant='contained'
                    disableElevation
                    fullWidth
                    sx={{ marginTop: 2 }}
                    onClick={handleSubmit}
                >
                    Schedule
                </Button>
            </form>
        </Box>
    )
}

export default AppointmentDrawerForm