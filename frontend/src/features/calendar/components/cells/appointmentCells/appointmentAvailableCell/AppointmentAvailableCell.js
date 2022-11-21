import React from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedAppointmentDateTime, setDrawerOpen, getSelectedAppointmentDateTime } from '../../../../calendarSlice';
import AppointmentSelectedCell from './AppointmentSelectedCell';
import cellHeight from '../../../../../../utils/style/cellHeight';
import borderWidth from '../../../../../../utils/style/borderWidth';
import borderColor from '../../../../../../utils/style/borderColor';

function AppointmentAvailableCell(props) {
    const { appointmentDateTime } = props;
    const dispatch = useDispatch();
    const selectedAppointmentDateTime = useSelector(getSelectedAppointmentDateTime);

    const handleDrawer = () => {
        dispatch(setSelectedAppointmentDateTime(appointmentDateTime.format('MM-DD-YYYY, HH')));
        dispatch(setDrawerOpen(true));
    }

    return (
        <Grid
            item
            xs={12 / 7}
            onClick={handleDrawer}
            sx={{
                height: cellHeight,
                display: 'flex',
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#b0ffb7' }
            }}
        >
            {appointmentDateTime.format('MM-DD-YYYY, HH') === selectedAppointmentDateTime && <AppointmentSelectedCell />}
        </Grid >
    )
}

export default AppointmentAvailableCell