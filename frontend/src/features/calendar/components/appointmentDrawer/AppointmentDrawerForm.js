import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import isEmail from 'validator/lib/isEmail';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';


import { getSelectedAppointmentDateTime, getAppointmentFormValidationError, getEmailValidationError, scheduleNewAppointment, setDrawerOpen, setAppointmentFormValidationError, setEmailValidationError, setSelectedAppointmentDateTime, setAlert } from '../../calendarSlice';
import ConfirmAppointmentDialog from './ConfirmAppointmentDialog';


function AppointmentDrawerForm() {
    const dispatch = useDispatch();
    const appointmentDateTime = useSelector(getSelectedAppointmentDateTime);
    const appointmentFormValidationError = useSelector(getAppointmentFormValidationError);
    const emailMatchValidationError = useSelector(getEmailValidationError);
    const [newAppointment, setNewAppointment] = useState({ title: '', startDateTime: '', endDateTime: '', email: '', confirmEmail: '', notes: '' })
    const [dialogOpen, setDialogOpen] = useState(false);

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

    const prepareSubmit = () => {
        for (let [name, value] of Object.entries(newAppointment)) {
            if (name !== 'notes') {
                let object = {}
                object[name] = true
                !value && dispatch(setAppointmentFormValidationError(object))
            }
        }
        if (!isEmail(newAppointment?.email) || !isEmail(newAppointment?.confirmEmail)) {
            dispatch(setEmailValidationError({ valid: false, message: 'Please enter a valid E-Mail' }));
            dispatch(setAppointmentFormValidationError({ email: true }));
            dispatch(setAppointmentFormValidationError({ confirmEmail: true }));
            return null;
        }
        if (newAppointment?.email !== newAppointment?.confirmEmail) {
            dispatch(setEmailValidationError({ valid: false, message: 'E-Mails do not match' }));
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
            setDialogOpen(true);
        }
    }

    const handleDrawerAndDialog = () => {
        setDialogOpen(false);
        handleCloseForm();
        setNewAppointment({ title: '', startDateTime: '', endDateTime: '', email: '', confirmEmail: '', notes: '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(scheduleNewAppointment(newAppointment));
        handleDrawerAndDialog();
        dispatch(setAlert({ display: true, severity: 'success', message: `Appointment scheduled! We just sent an E-Mail to ${newAppointment?.email} confirming the details` }));
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
            value && dispatch(setEmailValidationError({ valid: true }));
        }
    }, [dispatch, newAppointment])

    return (
        <>
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
                        required
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
                        required
                        fullWidth
                        value={newAppointment?.email}
                        error={appointmentFormValidationError?.email}
                        helperText={!emailMatchValidationError?.valid && emailMatchValidationError?.message}
                        onChange={handleChange}
                    />
                    <TextField
                        name='confirmEmail'
                        label='Confirm E-Mail'
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        value={newAppointment?.confirmEmail}
                        error={appointmentFormValidationError?.confirmEmail}
                        helperText={!emailMatchValidationError?.valid && emailMatchValidationError?.message}
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
                        variant='contained'
                        disableElevation
                        fullWidth
                        sx={{ marginTop: 2 }}
                        onClick={prepareSubmit}
                    >
                        Schedule
                    </Button>
                    <ConfirmAppointmentDialog dialogOpen={dialogOpen} handleDrawerAndDialog={handleDrawerAndDialog} newAppointment={newAppointment} handleSubmit={handleSubmit} />
                </form>
            </Box>
        </>
    )
}

export default AppointmentDrawerForm