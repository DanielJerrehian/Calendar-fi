import React from 'react'
import { useNavigate } from 'react-router-dom';

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