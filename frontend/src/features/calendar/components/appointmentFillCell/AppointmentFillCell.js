import React from 'react'

function AppointmentFillCell() {
    return (
        <Paper
            elevation={2}
            sx={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                animation: `${fadeColor} .75s ease normal forwards`,
            }}
        />
    )
}

export default AppointmentFillCell