import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from './utils/theme';
import NavBar from './components/navBar/NavBar';
import ScrollToTop from './hooks/ScrollToTop';
import { Counter } from './features/counter/Counter';
import RouteNotFound from './components/RouteNotFound';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Counter />} />
                <Route path='*' element={<RouteNotFound />} />
            </Routes>

        </ThemeProvider>
        // <Routes>
        //     <Route path='/' element={<Counter />} />
        // </Routes>
    );  
}

export default App;
