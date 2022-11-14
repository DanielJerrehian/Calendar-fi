import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Grid from '@mui/material/Grid';

import { getWeekDaysMapper, getWeekNumber, getBorderWidth, getBorderColor, getNow, setSelectedAppointmentDateTime, setDrawerOpen } from '../calendarSlice';


function AppointmentCell(props) {
    const { dayCell, timeRow } = props;
    const dispatch = useDispatch()
    const today = moment(useSelector(getNow), 'MM-DD-YYYY, HH');
    const weekDaysMapper = useSelector(getWeekDaysMapper);
    const weekNumber = useSelector(getWeekNumber);
    const borderWidth = useSelector(getBorderWidth);
    const borderColor = useSelector(getBorderColor);
    const appointmentDateTime = moment(`${weekDaysMapper[weekNumber][dayCell]}, ${timeRow}`, 'MM-DD-YYYY, h A')
    const appointmentInPast = appointmentDateTime.isBefore(today);

    const handleDrawer = () => {
        // setAppointmentSelected(true);
        dispatch(setSelectedAppointmentDateTime(appointmentDateTime.format('MM-DD-YYYY, HH')));
        dispatch(setDrawerOpen(true));
    }

    return (
        <Grid
            item
            xs={12 / 7}
            onClick={appointmentInPast ? null : handleDrawer}
            sx={{
                height: 70,
                display: 'flex',
                // backgroundColor: (appointmentSelected ? '#7aff86' : appointmentInPast ? '#DCDCDC' : ''),
                backgroundColor: appointmentInPast ? '#DCDCDC' : '',
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                cursor: appointmentInPast ? 'not-allowed' : 'pointer'
            }}
        >
        </Grid>
    )
}

export default AppointmentCell