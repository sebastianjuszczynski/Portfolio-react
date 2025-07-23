import { render, screen, act } from '@testing-library/react';
import About from './About';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider, useLanguage } from '../../i18n/LanguageContext';
import { lightTheme } from '../../styles/theme';

const LanguageSwitcher = ({ children }) => {
    const { setLang } = useLanguage();

    if (typeof window !== 'undefined') {
        window.setTestLang = setLang;
    }

    return children;
};

describe('About component', () => {
    test('About renders correctly and reacts to language change', () => {
        const { container } = render(
            <ThemeProvider theme={lightTheme}>
                <LanguageProvider>
                    <LanguageSwitcher>
                        <About isDark={false} />
                    </LanguageSwitcher>
                </LanguageProvider>
            </ThemeProvider>
        );

        const section = container.querySelector('#about');
        expect(section).toBeInTheDocument();
        const image = screen.getByAltText(/developer thinking about code/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('loading', 'lazy');
        expect(screen.getByText(/about me/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();

        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(/^o mnie$/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /napisz do mnie/i })).toBeInTheDocument();


    });
});