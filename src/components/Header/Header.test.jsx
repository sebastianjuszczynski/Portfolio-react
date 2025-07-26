import { screen, act, fireEvent, within } from '@testing-library/react';
import Header from './Header';
import rendersWithProviders from '../../__tests__/testsUtils/rendersWithProviders';
import { expectLinks, linksEN, linksPL} from '../../__tests__/testsUtils/expectLinks';

describe('Header components', () => {
    let toggleMock;

    beforeEach(() => {
        toggleMock = vi.fn();
        rendersWithProviders(<Header toggleTheme={toggleMock} isDark={false} />)
    });
    test('renders logo, menu items, theme toggle, language button and hamburger', () => {
        expect(screen.getByRole('link', { name: /seb\.dev/i })).toBeInTheDocument();
        expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /change language/i })).toBeInTheDocument();
    });

    test('renders menu items in both languages', () => {
        expectLinks(linksEN);
        act(() => {
            window.setTestLang('pl');
        });
        expectLinks(linksPL);
    });

    test('shows language options when LangDropdown is clicked', () => {
        const langButton = screen.getByRole('button', { name: /change language/i });
        fireEvent.click(langButton);

        expect(screen.getByText(/EN/i)).toBeInTheDocument();
        const dropdown = screen.getByRole('listbox');
        const plOption = within(dropdown).getByText(/^PL$/i);
        expect(plOption).toBeInTheDocument();
    });

    test('calls toggleTheme when theme button is clicked', () => {
        const themeButton = screen.getByRole('button', { name: /^Toggle dark mode$/i });
        fireEvent.click(themeButton);

        expect(toggleMock).toHaveBeenCalledTimes(1);
    });
    
});