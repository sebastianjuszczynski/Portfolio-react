import { render, screen, act } from '@testing-library/react';
import AboutText from './AboutText';
import { ThemeProvider } from 'styled-components';
import LanguageSwitcher from '../../__tests__/testsUtils/withLanguageSwitcher';
import { LanguageProvider } from '../../i18n/LanguageContext';
import { lightTheme } from '../../styles/theme';

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