import { screen, act, fireEvent } from '@testing-library/react';
import Contact from './Contact';
import rendersWithProviders from '../../__tests__/testsUtils/rendersWithProviders';
import { tEn, tPl } from '../../__tests__/testsUtils/getTranslations';

describe('Contact component', () => {
    beforeEach(() => {
        rendersWithProviders(<Contact />)
    });
    test('renders all contact form fields and submit button', () => {
        expect(screen.getByPlaceholderText(tEn('contactName'))).toBeInTheDocument();
        expect(screen.getByPlaceholderText(tEn('contactEmail'))).toBeInTheDocument();
        expect(screen.getByPlaceholderText(tEn('contactMessage'))).toBeInTheDocument();
        expect(screen.getByRole('button', { name: tEn('submitButton') })).toBeInTheDocument();
    });
    test('shows validation errors when submitting empty form for both languages', () => {
        const submitButton = screen.getByRole('button', { name: /send/i });
        fireEvent.click(submitButton);
        expect(screen.getByText(tEn('errorName'))).toBeInTheDocument();
        expect(screen.getByText(tEn('errorEmail'))).toBeInTheDocument();
        expect(screen.getByText(tEn('errorMessage'))).toBeInTheDocument();

        act(() => {
            window.setTestLang('pl');
        });
        expect(screen.getByText(tPl('errorName'))).toBeInTheDocument();
        expect(screen.getByText(tPl('errorEmail'))).toBeInTheDocument();
        expect(screen.getByText(tPl('errorMessage'))).toBeInTheDocument();
    });
    test('submits form with valid data and shows succes messege', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({}),
            })
        );

        fireEvent.change(screen.getByPlaceholderText(tPl('contactName')), {
            target: { value: 'Sebastian' },
        });
        fireEvent.change(screen.getByPlaceholderText(tPl('contactEmail')), {
            target: { value: 'email@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(tPl('contactMessage')), {
            target: { value: 'This is a valid test message' },
        });

        fireEvent.click(screen.getByRole('button', { name: tPl('submitButton') }));

        const successMsg = await screen.findByText(tPl('formSuccess'))
        expect(successMsg).toBeInTheDocument();

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('shows error message when fetch fails', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
                json: () => Promise.resolve({}),
            })
        );


        fireEvent.change(screen.getByPlaceholderText(tPl('contactName')), {
            target: { value: 'Sebastian' },
        });
        fireEvent.change(screen.getByPlaceholderText(tPl('contactEmail')), {
            target: { value: 'email@example.com' },
        });
        fireEvent.change(screen.getByPlaceholderText(tPl('contactMessage')), {
            target: { value: 'This is a valid test message' },
        });

        fireEvent.click(screen.getByRole('button', { name: tPl("submitButton") }));

        const errorMsg = await screen.findByText(tPl('formError'))
        expect(errorMsg).toBeInTheDocument();

        expect(fetch).toHaveBeenCalledTimes(1);
    });
});