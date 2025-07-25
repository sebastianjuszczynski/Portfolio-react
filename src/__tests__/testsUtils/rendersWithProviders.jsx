import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LanguageProvider } from '../../i18n/LanguageContext';
import LanguageSwitcher from './withLanguageSwitcher';
import { lightTheme } from '../../styles/theme';

const renderWithProviders = (ui) => {
    return render(
        <ThemeProvider theme={lightTheme}>
            <LanguageProvider>
                <LanguageSwitcher>
                    {ui}
                </LanguageSwitcher>
            </LanguageProvider>
        </ThemeProvider>
    );
};

export default renderWithProviders;