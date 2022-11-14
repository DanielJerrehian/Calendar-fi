import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import DetectClickOutsideComponent from '../../../hooks/DetectClickOutsideComponent';
import { getDaysOfWeek, getTimeArray } from '../calendarSlice';
import DateCell from './DateCell';
import TimeCell from './TimeCell';
import AppointmentCell from './AppointmentCell';
import AppointmentDrawer from './appointmentDrawer/AppointmentDrawer';


function Calendar() {
    const daysOfWeek = useSelector(getDaysOfWeek);
    const timeRows = useSelector(getTimeArray);

    return (
        <DetectClickOutsideComponent>
            <Grid container maxWidth='xl'>
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
                                            : <AppointmentCell key={id} dayCell={dayCell} timeRow={timeRow} />
                                    )
                                })}
                            </Grid>
                        )
                    })}
                </Grid>
                <AppointmentDrawer />
            </Grid>
        </DetectClickOutsideComponent>
    )
}

export default Calendar


