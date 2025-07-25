import { screen, act } from '@testing-library/react';
import AboutText from './AboutText';
import rendersWithProviders from'../../__tests__/testsUtils/rendersWithProviders';

test('AboutText switch text after language change', () => {
    rendersWithProviders(<AboutText />)

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact me/i})).toBeInTheDocument();

    act(() => {
        window.setTestLang('pl');
    });
    expect(screen.getByText(/^o mnie$/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /napisz do mnie/i})).toBeInTheDocument();

});