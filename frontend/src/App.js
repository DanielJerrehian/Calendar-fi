import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from './utils/style/theme';
import NavBar from './components/navBar/NavBar';
import ScrollToTop from './hooks/ScrollToTop';
import RouteNotFound from './components/RouteNotFound';
import About from './components/about/About';
import Scheduler from './features/calendar/components/Scheduler';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Scheduler />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<RouteNotFound />} />
            </Routes>

        </ThemeProvider>
    );
}

export default App;
