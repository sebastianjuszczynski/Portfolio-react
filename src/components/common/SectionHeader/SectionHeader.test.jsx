import { render, screen } from '@testing-library/react';
import SectionHeader from './SectionHeader';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/theme';

describe('SectionHeader', () => {
    test('renders all texts correctly from props', () => {
        render(
            <ThemeProvider theme={lightTheme}>
                <SectionHeader sub="My" span="subtitle" title="Title" />
            </ThemeProvider>
        );
        expect(screen.getByText('My')).toBeInTheDocument();
        expect(screen.getByText('subtitle')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    test('renders span with correct color from theme', () => {
        const { getByText } = render(
            <ThemeProvider theme={lightTheme}>
                <SectionHeader sub="My" span="subtitle" title="Title" />
            </ThemeProvider>
            );
            const span = getByText(/subtitle/i)
            expect(span).toHaveStyle(`color: ${lightTheme.colors.accent}`);
    });
});