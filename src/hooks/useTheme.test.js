import { renderHook, act } from '@testing-library/react';
import useTheme from './useTheme';

test('loads theme from localStorage by default', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useTheme());
    expect(result.current.isDark).toBe(true);
});

test('toggleTheme switches theme and saves to localStorage', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
        result.current.toggleTheme();
    });
    expect(localStorage.getItem('theme')).toBe(result.current.isDark ? 'dark' : 'light');
});
