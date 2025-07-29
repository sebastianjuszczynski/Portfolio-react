import { screen, fireEvent } from '@testing-library/react';
import ScrollToTopButton from './ScrollToTopButton';
import rendersWithTheme from '../../__tests__/testsUtils/rendersWithTheme'

describe('ScrollToTopButton component', () => {
    beforeEach(() => {
        rendersWithTheme(<ScrollToTopButton />);
    });
    test('button is initially hidden', () => {
        const button = screen.getByLabelText(/scroll to top/i);
        expect(button).toHaveStyleRule('opacity', '0');
        expect(button).toHaveStyleRule('visibility', 'hidden');
    });
    test('button becomes visible after scrolling', () => {
        fireEvent.scroll(window, { target: { scrollY: 300 } });

        const button = screen.getByLabelText(/scroll to top/i);
        expect(button).toHaveStyleRule('opacity', '1');
        expect(button).toHaveStyleRule('visibility', 'visible');
    });
    test('clicking the button scrolls to the top', () => {
        window.scrollTo = vi.fn();

        fireEvent.scroll(window, { target: { scrollY: 300 } });
        fireEvent.click(screen.getByLabelText(/scroll to top/i));

        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth'});
    });
});