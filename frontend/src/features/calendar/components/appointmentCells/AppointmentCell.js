import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Grid from '@mui/material/Grid';


import { getWeekDaysMapper, getScheduledAppointments, getWeekNumber, getNow, setSelectedAppointmentDateTime, setDrawerOpen, getSelectedAppointmentDateTime } from '../../calendarSlice';
import AppointmentBookedCell from './AppointmentBookedCell';
import AppointmentSelectedCell from './AppointmentSelectedCell';
import borderWidth from '../../../../utils/style/borderWidth';
import borderColor from '../../../../utils/style/borderColor';


function AppointmentCell(props) {
    const { dayCell, timeRow } = props;
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
                    ? <AppointmentBookedCell />
                    : appointmentDateTime.format('MM-DD-YYYY, HH') === selectedAppointmentDateTime && <AppointmentSelectedCell />

            }
        </Grid>
    )
}

export default AppointmentCell