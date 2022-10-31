import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NavBarTitle from './NavBarTitle';
import buttonRoutes from '../../utils/buttonRoutes';


function NavBarController() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleNavigate = (route) => {
        navigate(`/${route}`)
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
   
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigateMenuItem = (route) => {
        handleNavigate(route);
        handleCloseNavMenu();
    };

    return (
        <>
            <Box 
                sx={{ 
                    display: { xs: 'none', md: 'flex' }, 
                    flexDirection: 'row', 
                    gap: '.5rem',
                }}
                >
                {
                    buttonRoutes.map((buttonRoute) => (
                        <Button 
                        color="primary"
                        variant="contained"
                        disableElevation
                        onClick={() => handleNavigate(buttonRoute?.route)} 
                        >
                            {buttonRoute?.name}
                        </Button>
                    ))
                }
            </Box>
            <Box 
                sx={{ 
                    display: { xs: 'flex', md: 'none' } 
                }}
            >
                <IconButton
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {buttonRoutes.map((buttonRoute) => (
                        <MenuItem 
                            key={buttonRoute?.route}
                            onClick={() => handleNavigateMenuItem(buttonRoute?.route)} 
                        >
                            <Typography 
                                textAlign="center"
                            >
                                {buttonRoute?.name}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
          </Box>

        </>
    )
}

export default NavBarController