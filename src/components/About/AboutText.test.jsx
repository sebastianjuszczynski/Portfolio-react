import { render, screen, act } from '@testing-library/react';
import AboutText from './AboutText';
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

test('AboutText switch text after language change', () => {
    render(
        <ThemeProvider theme={lightTheme}>
            <LanguageProvider>
                <LanguageSwitcher>
                    <AboutText />
                </LanguageSwitcher>
            </LanguageProvider>
        </ThemeProvider>
    );

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i})).toBeInTheDocument();

    act(() => {
        window.setTestLang('pl');
    });
    expect(screen.getByText(/^o mnie$/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /napisz do mnie/i})).toBeInTheDocument();

});