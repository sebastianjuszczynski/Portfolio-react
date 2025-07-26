import { screen, act } from '@testing-library/react';
import About from './About';
import rendersWithProviders from'../../__tests__/testsUtils/rendersWithProviders';
import { tEn, tPl } from '../../__tests__/testsUtils/getTranslations';

describe('About component', () => {
    test('About renders correctly and reacts to language change', () => {
        const { container } = rendersWithProviders(<About isDark={false}/>)

        const section = container.querySelector('#about');
        expect(section).toBeInTheDocument();
        const image = screen.getByAltText(/developer thinking about code/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('loading', 'lazy');
        expect(screen.getByText(tEn('aboutTitle'))).toBeInTheDocument();
        expect(screen.getByRole('link', { name: tEn('aboutLink') } )).toBeInTheDocument();

        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(tPl('about'))).toBeInTheDocument();
        expect(screen.getByRole('link', { name: tPl('aboutLink') })).toBeInTheDocument();


    });
});