'use client'
import React from 'react'
import useThemeStore from './usetThemeStore'
import { useLayoutEffect } from 'react'


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();

    useLayoutEffect(() => {
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