'use client'
import React from 'react'
import useThemeStore from './usetThemeStore'
import { useEffect } from 'react'


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme])


    return (
        <>
            {children}
        </>
    )
}

export default ThemeProvider