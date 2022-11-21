import React from 'react';
import Grid from '@mui/material/Grid';

import AppointmentBookedInnerCell from './AppointmentBookedInnerCell';
import cellHeight from '../../../../../../utils/style/cellHeight';
import borderWidth from '../../../../../../utils/style/borderWidth';
import borderColor from '../../../../../../utils/style/borderColor';


function AppointmentBookedCell() {

    return (
        <Grid
            item
            xs={12 / 7}
            onClick={null}
            sx={{
                height: cellHeight,
                display: 'flex',
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                cursor: 'not-allowed'
            }}
        >
            <AppointmentBookedInnerCell />
        </Grid >
    )
}

export default AppointmentBookedCell