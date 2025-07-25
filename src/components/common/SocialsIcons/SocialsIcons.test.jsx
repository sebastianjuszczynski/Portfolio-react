import { screen } from '@testing-library/react';
import SocialsIcons from './SocialsIcons';
import { lightTheme } from '../../../styles/theme';
import { socials } from './SocialsIconsData';
import rendersWithTheme from'../../../__tests__/testsUtils/rendersWithTheme';

describe('SocialsIcons', () => {
    beforeEach(() => {
        rendersWithTheme(<ul><SocialsIcons isFooter /></ul>)
    });
    test('renders all social icons as links with correct labels, hrefs, target and aria-label', () => {
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
        const icons = screen.getAllByRole('link').map(link => link.firstChild);

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
        const svgs = screen.getAllByRole('link').map(link => link.querySelector('svg'));
        svgs.forEach(svg => expect(svg).toBeInTheDocument());
    });
});