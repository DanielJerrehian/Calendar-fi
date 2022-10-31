import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import buttonRoutes from '../../utils/buttonRoutes';


function NavBarMobile(props) {
    const { handleNavigate } = props;
    const [anchorElNav, setAnchorElNav] = useState(null);

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
                            textAlign='center'
                            sx={{ fontWeight: 400 }}
                        >
                            {buttonRoute?.name}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default NavBarMobile