import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Grid from '@mui/material/Grid';

import { getWeekDaysMapper, getWeekNumber, getBorderWidth, getBorderColor, getToday } from '../calendarSlice';

function AppointmentCell(props) {
    const { dayCell, timeRow } = props;
    const today = moment(useSelector(getToday), 'MM-DD-YYYY, HH');
    const weekDaysMapper = useSelector(getWeekDaysMapper);
    const weekNumber = useSelector(getWeekNumber);
    const borderWidth = useSelector(getBorderWidth);
    const borderColor = useSelector(getBorderColor);
    const appointmentDateTime = moment(`${weekDaysMapper[weekNumber][dayCell]}, ${timeRow}`, 'MM-DD-YYYY, h A')
    const appointmentInPast = appointmentDateTime.isBefore(today);

    return (
        <Grid
            item
            xs={12 / 7}
            onClick={() => appointmentInPast ? null : console.log(appointmentDateTime.format('MM-DD-YYYY, HH'))}
            sx={{
                height: 60,
                display: 'flex',
                backgroundColor: appointmentInPast ? '#DCDCDC' : '',
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' }
            }}
        >
        </Grid>
    )
}

export default AppointmentCell