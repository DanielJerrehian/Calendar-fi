import React from 'react';
import Container from '@mui/material/Container';
import Calendar from './Calendar';
import CalendarMenu from './CalendarMenu';

function Scheduler() {
    return (
        <Container>
            <CalendarMenu />
            <Calendar />
        </Container>
    )
}

export default Scheduler