'use client';

import { ThemeProvider as CustomThemeProvider } from '../context/ThemeContext';
import { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <CustomThemeProvider>
            {children}
        </CustomThemeProvider>
    );
}