'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightColors, darkColors } from '../themes/base/themeColors';
import createPalette from '../themes/base/palette';
import { typography } from '../themes/base/typography';
import { breakpoints } from '../themes/base/breakpoints';
import { createComponents } from '../themes/components';
import { shadows } from '../themes/base/shadows';
import { shape } from '../themes/base/shape';
import createColors from '../themes/base/colors';
import { ThemeContextType, CustomThemeOptions } from '../themes/types';

const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
}

declare module '@mui/material/styles' {
    interface Theme {
        custom: CustomThemeOptions;
    }
    interface ThemeOptions {
        custom?: Partial<CustomThemeOptions>;
    }
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
        if (savedMode) {
            setMode(savedMode);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) setMode('dark');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const colors = createColors(mode);
    const components = createComponents(colors);
    const palette = createPalette(mode);

    const theme = createTheme({
        palette,
        typography,
        breakpoints,
        components,
        shadows,
        shape,
        spacing: 9,
        custom: {
            colors,
            general: {
                reactFrameworkColor: "#00D8FF",
                borderRadiusSm: "6px",
                borderRadius: "10px",
                borderRadiusLg: "12px",
                borderRadiusXl: "16px",
            },
            sidebar: {
                background: mode === 'light' ? lightColors.primaryAlt : darkColors.primaryAlt,
                boxShadow: mode === 'light' ? "1px 0 0 #E5E7EB" : "1px 0 0 #272C48",
                width: "290px",
                textColor: mode === 'light' ? lightColors.secondary : darkColors.secondary,
                dividerBg: mode === 'light' ? "#E5E7EB" : "#272C48",
                menuItemColor: mode === 'light' ? "#6A7199" : "#9EA4C1",
                menuItemColorActive: "#ffffff",
                menuItemBg: mode === 'light' ? lightColors.primaryAlt : darkColors.primaryAlt,
                menuItemBgActive: mode === 'light' ? "rgba(234, 125, 41, 0.1)" : "rgba(43, 48, 77, .6)",
                menuItemIconColor: mode === 'light' ? "#9CA3AF" : "#444A6B",
                menuItemIconColorActive: "#ffffff",
                menuItemHeadingColor: mode === 'light' ? lightColors.secondary : darkColors.secondary,
            },
            header: {
                height: "80px",
                background: mode === 'light' ? lightColors.defaultBg : darkColors.defaultBg,
                boxShadow: mode === 'light' ? "0px 1px 0px #E5E7EB" : "0px 1px 0px #272C48",
                textColor: mode === 'light' ? lightColors.textPrimary : darkColors.textPrimary,
            },
        },
    });

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};