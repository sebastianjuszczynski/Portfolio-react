import { screen, act } from '@testing-library/react';
import AboutText from './AboutText';
import rendersWithProviders from'../../__tests__/testsUtils/rendersWithProviders';
import { tEn, tPl } from '../../__tests__/testsUtils/getTranslations';

test('AboutText switch text after language change', () => {
    rendersWithProviders(<AboutText />)

    expect(screen.getByText(tEn('aboutTitle'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: tEn('aboutLink')})).toBeInTheDocument();

    act(() => {
        window.setTestLang('pl');
    });
    expect(screen.getByText(tPl('aboutTitle'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: tPl('aboutLink')})).toBeInTheDocument();

});