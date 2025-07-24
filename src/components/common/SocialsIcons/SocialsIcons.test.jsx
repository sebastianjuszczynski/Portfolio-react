import { render, screen } from '@testing-library/react';
import SocialsIcons from './SocialsIcons';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import { socials } from './SocialsIconsData';

describe('SocialsIcons', () => {
    test('renders all social icons as links with correct labels, hrefs, target and aria-label', () => {
        render(
            <ThemeProvider theme={lightTheme}>
                <ul>
                    <SocialsIcons />
                </ul>
            </ThemeProvider>
        );

        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(socials.length);

        socials.forEach(({ href, label }) => {
            const link = screen.getByRole('link', { name: label });
            expect(link).toHaveAttribute('href', href);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('aria-label', label);
        });
    });

    test('applies correct styles and hover effects when isFooter is true', () => {
        const { getAllByRole } = render(
            <ThemeProvider theme={lightTheme}>
                <ul>
                    <SocialsIcons isFooter />
                </ul>
            </ThemeProvider>
        );

        const icons = getAllByRole('link').map(link => link.firstChild);

        icons.forEach(icon => {
            expect(icon).toHaveStyleRule('color', lightTheme.colors.textWhite);
            expect(icon).toHaveStyleRule('border', `1px solid ${lightTheme.colors.textWhite}`);
            expect(icon).toHaveStyleRule('transform', 'scale(1)', {
                modifier: ':hover::before',
            });
            expect(icon).toHaveStyleRule('opacity', '1', {
                modifier: ':hover::before',
            });
            expect(icon).toHaveStyleRule('color', lightTheme.backgrounds.menuMobile, {
                modifier: ':hover svg',
            });
        });
    });
    test('renders all svgs in every link', () => {
        const { getAllByRole } = render(
            <ThemeProvider theme={lightTheme}>
                <ul>
                    <SocialsIcons />
                </ul>
            </ThemeProvider>
        );

        const svgs = getAllByRole('link').map(link => link.querySelector('svg'));
        svgs.forEach(svg => expect(svg).toBeInTheDocument());
    });
});