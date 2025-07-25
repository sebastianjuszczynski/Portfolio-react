import { render, screen, act, within } from '@testing-library/react';
import FooterComponent from './FooterComponent';
import { ThemeProvider } from 'styled-components';
import LanguageSwitcher from '../../__tests__/testsUtils/withLanguageSwitcher';
import { LanguageProvider } from '../../i18n/LanguageContext';
import { lightTheme } from '../../styles/theme';
import { socials } from '../common/SocialsIcons/SocialsIconsData';

const expectFooterLinks = (labels) => {
  labels.forEach(label => {
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
  });
};

describe('Footer component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider theme={lightTheme}>
                <LanguageProvider>
                    <LanguageSwitcher>
                        <FooterComponent />
                    </LanguageSwitcher>
                </LanguageProvider>
            </ThemeProvider>
        );
    });

    test('FooterComponent renders correctly', () => {
        const section = document.querySelector('#footer');
        expect(section).toBeInTheDocument();
    });

    test('renders logo as a link', () => {
        const logoLink = screen.getByRole('link', { name: /seb\.dev/i });
        expect(logoLink).toBeInTheDocument();
    });

    test('renders all FooterNavLinks', () => {
        expectFooterLinks(['Home', 'About', 'Skills', 'Projects', 'Contact']);
    });

    test('renders text in paragraph', () => {
        expect(screen.getByText(/All rights reserved by/i)).toBeInTheDocument();
    });
    test('updates text on language change', () => {
        act(() => {
            window.setTestLang('pl');
        });
         expectFooterLinks(['Strona główna', 'O mnie', 'Umiejętności', 'Projekty', 'Kontakt']);
        expect(screen.getByText(/Prawa zastrzeżone by/i)).toBeInTheDocument();
    });
    test('renders social media links and svgs in footer with correct attributes and styles', () => {
        const socialsContainer = screen.getByTestId('footer-socials');
        const { getByRole, getAllByRole } = within(socialsContainer);
        
        const svgIcons = socialsContainer.querySelectorAll('svg');
        expect(svgIcons).toHaveLength(socials.length);
        svgIcons.forEach(icon => {
            expect(icon).toBeInTheDocument();
        });

        socials.forEach(({ label, href }) => {
            const link = getByRole('link', { name: label });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', href);
            expect(link).toHaveAttribute('aria-label', label);
        });

        const spans = within(socialsContainer).getAllByRole('link').map(link => link.querySelector('span'));

        spans.forEach(span => {
            expect(span).toHaveStyleRule('color', lightTheme.colors.textWhite);
            expect(span).toHaveStyleRule('border', `1px solid ${lightTheme.colors.textWhite}`);
        });
    });
});