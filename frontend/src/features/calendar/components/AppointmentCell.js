import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { getWeekDaysMapper, getScheduledAppointments, getWeekNumber, getNow, setSelectedAppointmentDateTime, setDrawerOpen, getSelectedAppointmentDateTime } from '../calendarSlice';
import borderWidth from '../../../utils/style/borderWidth';
import borderColor from '../../../utils/style/borderColor';


function AppointmentCell(props) {
    const { dayCell, timeRow } = props;
    const theme = useTheme();
    const dispatch = useDispatch();
    const today = moment(useSelector(getNow));
    const weekDaysMapper = useSelector(getWeekDaysMapper);
    const weekNumber = useSelector(getWeekNumber);
    const selectedAppointmentDateTime = useSelector(getSelectedAppointmentDateTime);
    const appointmentDateTime = moment(`${weekDaysMapper[weekNumber][dayCell]}, ${timeRow}`, 'MM-DD-YYYY, h A')
    const appointmentInPast = appointmentDateTime.isBefore(today);
    const scheduledAppointments = useSelector(getScheduledAppointments);
    const [appointmentBooked, setAppointmentBooked] = useState(false);
    const notClickable = (appointmentInPast || appointmentBooked);
    const fadeColor = keyframes`from {background-color: ${theme.palette.primary.light};} to {background-color: ${theme.palette.primary.main};}`;

    const checkIfAppointmentBooked = () => {
        appointmentInPast
            ? setAppointmentBooked(false)
            : scheduledAppointments.map(el => el.appointmentTime).includes(appointmentDateTime.format('MM-DD-YYYY, HH'))
                ? setAppointmentBooked(true)
                : setAppointmentBooked(false)
    }

    const handleDrawer = () => {
        dispatch(setSelectedAppointmentDateTime(appointmentDateTime.format('MM-DD-YYYY, HH')));
        dispatch(setDrawerOpen(true));
    }

    useEffect(() => {
        checkIfAppointmentBooked();
    }, [appointmentInPast, scheduledAppointments, weekNumber]);

    return (
        <Grid
            item
            xs={12 / 7}
            onClick={notClickable ? null : handleDrawer}
            sx={{
                height: 70,
                display: 'flex',
                backgroundColor: (appointmentInPast ? '#DCDCDC' : ''),
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                cursor: notClickable ? 'not-allowed' : 'pointer',
                '&:hover': { backgroundColor: appointmentInPast ? '#DCDCDC' : '#b0ffb7' }
            }}
        >
            {
                appointmentBooked
                    ? <Paper
                        elevation={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            backgroundColor: theme?.palette?.secondary?.dark
                        }}
                    >
                        <Typography>
                            Booked
                        </Typography>
                    </Paper>
                    : appointmentDateTime.format('MM-DD-YYYY, HH') === selectedAppointmentDateTime
                        ? <Paper
                            elevation={2}
                            sx={{
                                width: '100%',
                                height: '100%',
                                margin: 'auto',
                                animation: `${fadeColor} .75s ease normal forwards`,
                            }}
                        />
                        : ''
            }
        </Grid>
    )
}

export default AppointmentCell