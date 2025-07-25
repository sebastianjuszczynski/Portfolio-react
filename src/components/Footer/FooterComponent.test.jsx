import { screen, act, within } from '@testing-library/react';
import FooterComponent from './FooterComponent';
import { lightTheme } from '../../styles/theme';
import { socials } from '../common/SocialsIcons/SocialsIconsData';
import rendersWithProviders from'../../__tests__/testsUtils/rendersWithProviders';
import { expectLinks, linksEN, linksPL } from '../../__tests__/testsUtils/expectLinks';


describe('Footer component', () => {
    beforeEach(() => {
        rendersWithProviders(<FooterComponent />)
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
        expectLinks(linksEN);
    });

    test('renders text in paragraph', () => {
        expect(screen.getByText(/All rights reserved by/i)).toBeInTheDocument();
    });
    test('updates text on language change', () => {
        act(() => {
            window.setTestLang('pl');
        });
         expectLinks(linksPL);
        expect(screen.getByText(/Prawa zastrzeżone by/i)).toBeInTheDocument();
    });
    test('renders social media links and svgs in footer with correct attributes and styles', () => {
        const socialsContainer = screen.getByTestId('footer-socials');
        const { getByRole } = within(socialsContainer);
        
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