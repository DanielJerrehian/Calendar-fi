import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import borderWidth from '../../../../../utils/style/borderWidth';
import borderColor from '../../../../../utils/style/borderColor';

function TimeCell(props) {
    const { timeRow } = props;

    return (
        <Grid
            item
            xs={12 / 7}
            sx={{
                height: 70,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' },
                borderBottom: `${borderWidth} solid ${borderColor}`, '&:last-child': { borderRight: 'none' }
            }}
        >
            <Typography>
                {timeRow}
            </Typography>
        </Grid>
    )
}

export default TimeCell