import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';

import NavBarTitle from './NavBarTitle';
import NavBarController from './NavBarController';


function NavBar() {

    return (
        <Container
            sx={{ marginBottom: 3 }}
        >
            <AppBar
                position='static'
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDireciton: 'row',
                        justifyContent: 'space-between',
                        margin: '.5rem 0rem'
                    }}
                >
                    <NavBarTitle />
                    <NavBarController />
                </Box>
            </AppBar>
        </Container>
    )
}

export default NavBar