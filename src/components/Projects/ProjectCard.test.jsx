import { screen, act, fireEvent } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import rendersWithProviders from '../../__tests__/testsUtils/rendersWithProviders';
import { tEn, tPl } from '../../__tests__/testsUtils/getTranslations';

const mockProject = {
    title: 'Movies Browser',
    description: {
        en: 'Movie browser app using external API.',
        pl: 'Aplikacja do przeglądania filmów z użyciem API.',
    },
    image: 'https://example.com/image.png',
    video: 'https://example.com/video.mp4',
    tech: ['html5', 'css3', 'react'],
    link: 'https://project-link.com',
};

describe('ProjectCard component', () => {
    beforeEach(() => {
        rendersWithProviders(<ProjectCard {...mockProject} />);
    })
    test('renders title, English description, image and video', () => {

        expect(screen.getByText(mockProject.title)).toBeInTheDocument();

        expect(screen.getByText(mockProject.description.en)).toBeInTheDocument();

        const image = screen.getByAltText(mockProject.title);
        expect(image).toHaveAttribute('src', mockProject.image);
        expect(image).toHaveAttribute('loading', 'lazy');

        const video = screen.getByText(/your browser does not support the video tag/i).closest('video');
        expect(video).toBeInTheDocument();

        const source = video.querySelector('source');
        expect(source).toHaveAttribute('src', mockProject.video);
        expect(source).toHaveAttribute('type', 'video/mp4');
    });

    test('renders translated description in PL', () => {
        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(mockProject.description.pl)).toBeInTheDocument();
    });

    test('renders all tech icons with proper attributes', () => {
        mockProject.tech.forEach((tech) => {
            const icon = screen.getByTitle(tech);
            expect(icon).toHaveAttribute('src', expect.stringContaining(`${tech}-original.svg`));
            expect(icon).toHaveAttribute('alt', `${tech} logo`);
            expect(icon).toHaveAttribute('loading', 'lazy');
        });
    });

    test('renders external project link with correct label and text', () => {
        const link = screen.getByRole('link', {
            name: `Check ${mockProject.title} website`,
        });

        expect(link).toHaveAttribute('href', mockProject.link);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveTextContent(tPl('projectsLink'));
        act(() => {
            window.setTestLang('en');
        });
        expect(link).toHaveTextContent(tEn('projectsLink'));
    });
    test('plays video on hover and pauses on mouse leave', () => {
        const video = screen.getByText(/your browser does not support the video tag/i).closest('video');

        Object.defineProperty(HTMLMediaElement.prototype, 'play', {
            configurable: true,
            value: vi.fn(),
        });

        Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
            configurable: true,
            value: vi.fn(),
        });

        const card = screen.getByText(mockProject.title).closest('div');

        fireEvent.mouseEnter(card);
        expect(video.play).toHaveBeenCalled();

        fireEvent.mouseLeave(card);
        expect(video.pause).toHaveBeenCalled();
    });
});

