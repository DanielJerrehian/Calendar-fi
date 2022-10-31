import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import buttonRoutes from '../../utils/buttonRoutes';


function NavBarDesktop(props) {
    const { handleNavigate } = props;

    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                gap: '.5rem',
            }}
        >
            {
                buttonRoutes.map((buttonRoute) => (
                    <Button
                        color='primary'
                        variant='contained'
                        disableElevation
                        onClick={() => handleNavigate(buttonRoute?.route)}
                        sx={{
                            fontWeight: 500,
                            textTransform: 'capitalize'
                        }}
                    >
                        {buttonRoute?.name}
                    </Button>
                ))
            }
        </Box>
    )
}

export default NavBarDesktop