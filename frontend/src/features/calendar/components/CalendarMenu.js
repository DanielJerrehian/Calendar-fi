import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CalendarMenuButtons from './CalendarMenuButtons';
import { getWeekNumber } from '../calendarSlice';

function CalendarMenu() {
    const weekNumber = useSelector(getWeekNumber);
    const monday = moment().day('Monday').isoWeek(weekNumber);
    const saturday = moment().day('Saturday').isoWeek(weekNumber);
    const monthMonday = monday.format('MMMM');
    const monthSaturday = saturday.format('MMMM');
    const year = monday.format('YYYY')

    return (
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
                    fontSize: 20
                }}
            >
                {
                    monthMonday === monthSaturday
                        ? `${monthMonday} ${year}`
                        : `${monthMonday} - ${monthSaturday} ${year}`
                }

            </Typography>
            <CalendarMenuButtons />
        </Box>
    )
}

export default CalendarMenu