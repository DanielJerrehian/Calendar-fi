import React from 'react';
import Container from '@mui/material/Container';
import Calendar from './Calendar';
import CalendarMenu from './menu/CalendarMenu';
import AlertBanner from '../../../components/alert/AlertBanner';

function Scheduler() {
    return (
        <Container>
            <AlertBanner />
            <CalendarMenu />
            <Calendar />
        </Container>
    )
}

export default Scheduler