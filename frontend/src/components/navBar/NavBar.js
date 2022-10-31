import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import NavBarTitle from './NavBarTitle';
import NavBarController from './NavBarController';

function NavBar() {
    return (
        <Box 
            sx={{ flexGrow: 1 }}
        >
            <AppBar position='static' sx={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Box 
                        // sx={{ flexGrow: 1 }}
                        sx={{display: 'flex', justifyContent: 'space-around'}}
                    >
                        <NavBarTitle />
                        <NavBarController />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar