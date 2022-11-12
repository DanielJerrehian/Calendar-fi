import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';

import { getDaysOfWeek, getTimeArray } from '../calendarSlice';
import DateCell from './DateCell';
import TimeCell from './TimeCell';
import AppointmentCell from './AppointmentCell';


function Calendar() {
    const dispatch = useDispatch();
    const daysOfWeek = useSelector(getDaysOfWeek);
    const timeRows = useSelector(getTimeArray);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    {daysOfWeek.map((dayOfWeek, id) => {
                        return (
                            <DateCell dayOfWeek={dayOfWeek} key={id} />
                        )
                    })}
                </Grid>
                {timeRows.map((timeRow, id) => {
                    return (
                        <Grid container key={id}>
                            {daysOfWeek.map((dayCell, id) => {
                                return (
                                    dayCell === ''
                                        ? <TimeCell timeRow={timeRow} key={id} />
                                        : <AppointmentCell dayCell={dayCell} timeRow={timeRow} key={id} />
                                )
                            })}
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default Calendar


