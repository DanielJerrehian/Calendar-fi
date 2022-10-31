import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import buttonRoutes from '../../utils/buttonRoutes';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';


function NavBarController() {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(`/${route}`)
    };


    return (
        <>
            <NavBarDesktop handleNavigate={handleNavigate} />
            <NavBarMobile handleNavigate={handleNavigate} />
        </>
    )
}

export default NavBarController