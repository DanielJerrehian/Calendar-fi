import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { getWeekNumber, updateWeekNumber } from '../calendarSlice';

function CalendarMenuButtons() {
    const theme = useTheme();
    const mediaQuery = useMediaQuery(theme.breakpoints.up('sm'));
    const dispatch = useDispatch();
    const weekNumber = useSelector(getWeekNumber);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDireciton: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: { xs: '1rem', lg: '2rem' },
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
                {mediaQuery ? 'Previous Week' : 'Previous'}
            </Button>
            <Button
                variant='contained'
                size='small'
                disableElevation
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => dispatch(updateWeekNumber(1))}
                disabled={weekNumber === moment().isoWeek() + 3 ? true : false}
            >
                {mediaQuery ? 'Next Week' : 'Previous'}
            </Button>
        </Box>
    )
}

export default CalendarMenuButtons