import React from 'react'
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import moment from 'moment';

import { getWeekDaysMapper, getWeekNumber } from '../../../calendarSlice';
import borderWidth from '../../../../../utils/style/borderWidth';
import borderColor from '../../../../../utils/style/borderColor';


function DateCell(props) {
    const { dayOfWeek } = props;
    const weekDaysMapper = useSelector(getWeekDaysMapper);
    const weekNumber = useSelector(getWeekNumber);
    const dateDayNumber = moment(weekDaysMapper[weekNumber][dayOfWeek], 'MM-DD-YYYY').format('D');

    return (
        <Grid
            item
            xs={12 / 7}
            sx={{
                height: 70,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' }
            }}
        >
            {
                dayOfWeek !== ''
                    ? <Typography>{dayOfWeek.slice(0, 2)}</Typography>
                    : <Typography></Typography>
            }
            {
                dayOfWeek !== ''
                    ? <Typography>{dateDayNumber}</Typography>
                    : <Typography></Typography>
            }
        </Grid>
    )
}

export default DateCell