import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function NavBarTitle() {
    return (
        <Link
            to={'/'}
            style={{ textDecoration: 'none' }}
        >
            <Typography
                variant='h1'
                component='div'
                fontSize={36}
                color='black'
                sx={{ fontWeight: 400 }}
            >
                Calendar-fi
            </Typography>
        </Link>
    )
}

export default NavBarTitle