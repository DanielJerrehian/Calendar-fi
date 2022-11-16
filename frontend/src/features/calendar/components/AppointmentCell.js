import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import { getWeekDaysMapper, getWeekNumber, getBorderWidth, getBorderColor, getNow, setSelectedAppointmentDateTime, setDrawerOpen, getSelectedAppointmentDateTime } from '../calendarSlice';


function AppointmentCell(props) {
    const { dayCell, timeRow } = props;
    const dispatch = useDispatch()
    const today = moment(useSelector(getNow));
    const weekDaysMapper = useSelector(getWeekDaysMapper);
    const weekNumber = useSelector(getWeekNumber);
    const selectedAppointmentDateTime = useSelector(getSelectedAppointmentDateTime);
    const borderWidth = useSelector(getBorderWidth);
    const borderColor = useSelector(getBorderColor);
    const appointmentDateTime = moment(`${weekDaysMapper[weekNumber][dayCell]}, ${timeRow}`, 'MM-DD-YYYY, h A')
    const appointmentInPast = appointmentDateTime.isBefore(today);
    const theme = useTheme();

    const handleDrawer = () => {
        dispatch(setSelectedAppointmentDateTime(appointmentDateTime.format('MM-DD-YYYY, HH')));
        dispatch(setDrawerOpen(true));
    }

    const fadeColor = keyframes`from {background-color: ${theme.palette.primary.light};} to {background-color: ${theme.palette.primary.main};}`;

    return (
        <Grid
            item
            xs={12 / 7}
            onClick={appointmentInPast ? null : handleDrawer}
            sx={{
                height: 70,
                display: 'flex',
                backgroundColor: (appointmentInPast ? '#DCDCDC' : ''),
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                cursor: appointmentInPast ? 'not-allowed' : 'pointer',
                '&:hover': { backgroundColor: appointmentInPast ? '#DCDCDC' : '#b0ffb7' }
            }}
        >
            {
                appointmentDateTime.format('MM-DD-YYYY, HH') === selectedAppointmentDateTime &&
                <Paper
                    elevation={2}
                    sx={{
                        width: '100%',
                        height: '100%',
                        margin: 'auto',
                        animation: `${fadeColor} .75s ease normal forwards`,
                    }}
                />
            }
        </Grid>
    )
}

export default AppointmentCell