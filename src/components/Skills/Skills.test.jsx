import { screen, act } from '@testing-library/react';
import Skills from './Skills';
import { skillsData } from './skillsData';
import rendersWithProviders from '../../__tests__/testsUtils/rendersWithProviders';
import { tEn, tPl } from '../../__tests__/testsUtils/getTranslations';

describe('Skills component', () => {
    beforeEach(() => {
        rendersWithProviders(<Skills />)
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
        expect(screen.getByText(tEn('skills'))).toBeInTheDocument();
        expect(screen.getByText(tEn('skillsSubheader'))).toBeInTheDocument();
        expect(screen.getByTestId('subheader-span')).toHaveTextContent(tEn('skillsSpan').trim());
        expect(screen.getByText(tEn('skillsTitle'))).toBeInTheDocument();
    });
    test('updates text on language change', () => {
        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(tPl('skills'))).toBeInTheDocument();
        expect(screen.getByText(tPl('skillsSubheader'))).toBeInTheDocument();
        expect(screen.getByTestId('subheader-span')).toHaveTextContent(tPl('skillsSpan').trim());
        expect(screen.getByText(tPl('skillsTitle'))).toBeInTheDocument();
    });
});
