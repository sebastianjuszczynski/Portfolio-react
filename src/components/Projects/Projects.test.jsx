import { screen, act } from '@testing-library/react';
import Projects from './Projects';
import renderWithProviders from '../../__tests__/testsUtils/rendersWithProviders';
import { dataProjects } from './dataProjects';
import { tEn, tPl } from '../../__tests__/testsUtils/getTranslations';

describe('Projects component', () => {
    beforeEach(() => {
        renderWithProviders(<Projects />);
    });
    test('renders section correctly', () => {
        expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    });

    test('renders section header texts correctly', () => {
        expect(screen.getByText(tEn('projectsSubheader'))).toBeInTheDocument();
        expect(screen.getByTestId('subheader-span')).toHaveTextContent(tEn('projectsSpan').trim());
        expect(screen.getByText(tEn('projectsTitle'))).toBeInTheDocument();
    });

    test('renders correct number of ProjectCard components', () => {
        const projectTitles = dataProjects.map(project => project.title);

        projectTitles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    test('renders ProjectCard components with translated descriptions', () => {
        const projectDescriptions = dataProjects.map(project => project.description);

        projectDescriptions.forEach((description) => {
            expect(screen.getByText(description.en)).toBeInTheDocument();
        });
        act(() => {
            window.setTestLang('pl');
        });
        projectDescriptions.forEach((description) => {
            expect(screen.getByText(description.pl)).toBeInTheDocument();
        });
    })
});