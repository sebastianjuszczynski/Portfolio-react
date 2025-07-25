import { screen, act } from '@testing-library/react';
import Hero from './Hero';
import rendersWithProviders from '../../__tests__/testsUtils/rendersWithProviders';
import { socials } from '../common/SocialsIcons/SocialsIconsData';

describe('Hero component', () => {
    beforeEach(() => {
        rendersWithProviders(<Hero />);
    });
    test('renders hero section with heading and image', () => {
        const img = screen.getByRole('img', { name: /developer writing code/i });
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('loading', 'lazy');
        expect(screen.getByRole('link', { name: /Scroll to about section/i })).toBeInTheDocument();
        expect(screen.getByText(/sebastian/i)).toBeInTheDocument();
    });

    test('renders english title and description', () => {
        expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
        expect(screen.getByText(/Frontend Developer focused on simplicity and speed/i)).toBeInTheDocument();
    });

    test('updates texts when language is changed', () => {
        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(/Cześć, jestem/i)).toBeInTheDocument();
        expect(screen.getByText(/Frontend Developer skupiony na prostocie i szybkości/i)).toBeInTheDocument();
    });

    test('renders social media links inside hero section', () => {
        const socialLinks = screen.getAllByRole('link').filter(link =>
            socials.some(({ label }) => link.getAttribute('aria-label') === label)
        );
        expect(socialLinks).toHaveLength(socials.length);
    });
    test('renders scroll arrow with correct href', () => {
        expect(screen.getByRole('link', { name: /scroll to about section/i })).toHaveAttribute('href', '#about');
    });

});