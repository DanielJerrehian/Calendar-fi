import React from 'react';
import Grid from '@mui/material/Grid';

import daysOfWeek from '../../../utils/date/daysOfWeek';
import createTimeArray from '../../../utils/date/timeArray';
import DateCell from './DateCell';
import TimeCell from './TimeCell';
import AppointmentCell from './AppointmentCell';
import AppointmentDrawer from './appointmentDrawer/AppointmentDrawer';

import borderWidth from '../../../utils/style/borderWidth';
import borderColor from '../../../utils/style/borderColor';

function Calendar() {
    const timeRows = createTimeArray(9, 17);

    return (
        <Grid 
            container 
            maxWidth='xl'
            sx={{
                borderTop:  `${borderWidth} solid ${borderColor}`,
                borderLeft:  `${borderWidth} solid ${borderColor}`,
                borderRight: `${borderWidth} solid ${borderColor}`
            }}
        >
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
    )
}

export default Calendar


