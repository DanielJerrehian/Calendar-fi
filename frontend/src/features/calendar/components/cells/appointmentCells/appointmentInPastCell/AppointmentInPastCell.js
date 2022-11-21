import React from 'react';
import Grid from '@mui/material/Grid';

import cellHeight from '../../../../../../utils/style/cellHeight';
import borderWidth from '../../../../../../utils/style/borderWidth';
import borderColor from '../../../../../../utils/style/borderColor';

function AppointmentInPastCell() {
    return (
        <Grid
            item
            xs={12 / 7}
            onClick={null}
            sx={{
                display: 'flex',
                backgroundColor: '#DCDCDC',
                height: cellHeight,
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                cursor: 'not-allowed'
            }}
        >
        </Grid>
    )
}

export default AppointmentInPastCell