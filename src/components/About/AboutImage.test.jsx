import { render, screen } from '@testing-library/react';
import AboutImage from './AboutImage';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

test('image has correct alt and lazy loading attribute', () => {
    render(
        <ThemeProvider theme={lightTheme}>
            <AboutImage />
        </ThemeProvider>
    );
    const image = screen.getByAltText(/developer thinking about code/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('loading', 'lazy');
});