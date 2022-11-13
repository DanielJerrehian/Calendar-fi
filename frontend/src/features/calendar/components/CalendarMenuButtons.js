import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { getWeekNumber, updateWeekNumber } from '../calendarSlice';

function CalendarMenuButtons() {
    const dispatch = useDispatch();
    const weekNumber = useSelector(getWeekNumber);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDireciton: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '2rem',
                marginBottom: '2rem'
            }}
        >
            <Button
                variant='contained'
                size='small'
                disableElevation
                startIcon={<ArrowBackIosIcon />}
                onClick={() => dispatch(updateWeekNumber(-1))}
                disabled={weekNumber === moment().isoWeek() ? true : false}
            >
                Previous Week
            </Button>
            <Button
                variant='contained'
                size='small'
                disableElevation
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => dispatch(updateWeekNumber(1))}
                disabled={weekNumber === moment().isoWeek() + 3 ? true : false}
            >
                Next Week
            </Button>
        </Box>
    )
}

export default CalendarMenuButtons