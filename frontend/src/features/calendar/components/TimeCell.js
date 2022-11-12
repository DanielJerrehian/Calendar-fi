import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { getBorderWidth, getBorderColor } from '../calendarSlice';

function TimeCell(props) {
    const { timeRow } = props;
    const borderWidth = useSelector(getBorderWidth);
    const borderColor = useSelector(getBorderColor);

    return (
        <Grid
            item
            xs={12 / 7}
            sx={{
                height: 60,
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