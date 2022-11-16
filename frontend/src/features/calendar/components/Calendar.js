import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import CloseDrawerOnClickOutsideCalendar from '../../../hooks/CloseDrawerOnClickOutsideCalendar';
import { getDaysOfWeek, getTimeArray } from '../calendarSlice';
import DateCell from './DateCell';
import TimeCell from './TimeCell';
import AppointmentCell from './AppointmentCell';
import AppointmentDrawer from './appointmentDrawer/AppointmentDrawer';


function Calendar() {
    const daysOfWeek = useSelector(getDaysOfWeek);
    const timeRows = useSelector(getTimeArray);

    return (
        <CloseDrawerOnClickOutsideCalendar>
            <Grid container maxWidth='xl'>
                <Grid item xs={12}>
                    <Grid container>
                        {daysOfWeek.map((dayOfWeek, id) => {
                            return (
                                <DateCell dayOfWeek={dayOfWeek} key={id} />
                            )
                        })}
                    </Grid>
                    {timeRows.map((timeRow, timeRowId) => {
                        return (
                            <Grid container key={timeRowId}>
                                {daysOfWeek.map((dayCell, dayCellId) => {
                                    return (
                                        dayCell === ''
                                            ? <TimeCell timeRow={timeRow} key={timeRowId + dayCellId} />
                                            : <AppointmentCell key={timeRow + timeRowId + dayCellId + dayCell} dayCell={dayCell} timeRow={timeRow} />
                                    )
                                })}
                            </Grid>
                        )
                    })}
                </Grid>
                <AppointmentDrawer />
            </Grid>
        </CloseDrawerOnClickOutsideCalendar>
    )
}

export default Calendar


