import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import AboutImage from './AboutImage';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

describe('AboutImage component', () => {
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

    test('ImageContainer has correct border from theme', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={lightTheme}>
                <AboutImage />
            </ThemeProvider>
        );

        const wrapper = getByTestId('image-wrapper');
        expect(wrapper).toHaveStyleRule('border', `2px solid ${lightTheme.colors.accentHover}`);
    });

    test('ImageContainer has correct padding from shared theme', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={lightTheme}>
                <AboutImage />
            </ThemeProvider>
        );

        const wrapper = getByTestId('image-wrapper');
        expect(wrapper).toHaveStyleRule('padding', lightTheme.spacing.padding.image);
    });
});