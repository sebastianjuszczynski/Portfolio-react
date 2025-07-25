import { render, screen, act } from '@testing-library/react';
import Skills from './Skills';
import { ThemeProvider } from 'styled-components';
import LanguageSwitcher from '../../__tests__/testsUtils/withLanguageSwitcher';
import { LanguageProvider } from '../../i18n/LanguageContext';
import { lightTheme } from '../../styles/theme';
import { skillsData } from './skillsData';

describe('Skills component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={lightTheme}>
                <LanguageProvider>
                    <LanguageSwitcher>
                        <Skills />
                    </LanguageSwitcher>
                </LanguageProvider>
            </ThemeProvider>
        );
    });

    test('Skills renders correctly', () => {
        const section = document.querySelector('#skills');
        expect(section).toBeInTheDocument();
    });

    test('renders all skills images with correct attributes and titles', () => {
        const images = screen.getAllByRole('img',);
        expect(images).toHaveLength(skillsData.length);

        skillsData.forEach(({ name, image }) => {
            const item = screen.getByTitle(name);
            expect(item).toBeInTheDocument();

            const img = screen.getByRole('img', { name: `${name} logo` });
            expect(img).toHaveAttribute('src', image);
            expect(img).toHaveAttribute('alt', `${name} logo`);
            expect(img).toHaveAttribute('loading', 'lazy');
        });
    });

    test('renders translated header elements', () => {
        expect(screen.getByText(/skills/i)).toBeInTheDocument();
        expect(screen.getByText(/My/i)).toBeInTheDocument();
        expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
        expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    });
    test('updates text on language change', () => {
        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(/^umiejętności/i)).toBeInTheDocument();
        expect(screen.getByText(/Mój/i)).toBeInTheDocument();
        expect(screen.getByText(/tech stack/i)).toBeInTheDocument();
        expect(screen.getByText(/Umiejętności/i)).toBeInTheDocument();
    });
});
