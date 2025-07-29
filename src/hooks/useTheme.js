import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from '../styles/theme'

const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newValue = !prev;
            localStorage.setItem('theme', newValue ? 'dark' : 'light');
            return newValue;
        });
    };

    const theme = isDark ? darkTheme : lightTheme;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return {
        isDark,
        setIsDark,
        toggleTheme,
        theme,
    }
};

export default useTheme;