import React from 'react';
import { useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import AppointmentDrawerForm from './AppointmentDrawerForm';
import { getDrawerOpen } from '../../calendarSlice';


function AppointmentDrawer(props) {
    const { appointmentDateTime, handleDrawerClose } = props;
    const drawerOpen = useSelector(getDrawerOpen);

    return (
        <Drawer
            anchor='left'
            variant='persistent'
            open={drawerOpen}
            PaperProps={{ sx: { width: '30%', elevation: 0 } }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: 5
                }}
            >
                <AppointmentDrawerForm appointmentDateTime={appointmentDateTime} handleDrawerClose={handleDrawerClose} />
            </Box>

        </Drawer>
    )
}

export default AppointmentDrawer