"use client";

import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import DesktopView from './DesktopViewProgress/DesktopViewProgress';
import MobileView from './MobileViewProgress/MobileViewProgress';

const ResponsiveGreeting = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {isMobile ? <MobileView /> : <DesktopView />}
        </>
    );
};

export default ResponsiveGreeting;