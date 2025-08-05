import { test, expect } from '@playwright/test';

test.describe('Contact section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('renders contact form with all fields', async ({ page }) => {
        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeVisible();
        await expect(contactSection.locator('h2')).toContainText(/contact/i);

        await expect(contactSection.locator('input[name="name"]')).toBeVisible();
        await expect(contactSection.locator('input[name="email"]')).toBeVisible();
        await expect(contactSection.locator('textarea[name="message"]')).toBeVisible();

        await expect(contactSection.locator('button[type="submit"]')).toBeVisible();
    });

    test('shows validation errors on submit with empty fields', async ({ page }) => {
        const contactSection = page.locator('#contact');
        await contactSection.locator('button[type="submit"]').click();

        await expect(contactSection.locator('small', { hasText: /name/i })).toBeVisible();
        await expect(contactSection.locator('small', { hasText: /email/i })).toBeVisible();
        await expect(contactSection.locator('small', { hasText: /message/i })).toBeVisible();
    });

    test('shows error for invalid email and short message', async ({ page }) => {
        const contactSection = page.locator('#contact');
        await contactSection.locator('input[name="name"]').fill('Ja');
        await contactSection.locator('input[name="email"]').fill('wrongmail');
        await contactSection.locator('textarea[name="message"]').fill('ok');
        await contactSection.locator('button[type="submit"]').click();

        await expect(contactSection.locator('small', { hasText: /name/i })).toBeVisible();
        await expect(contactSection.locator('small', { hasText: /email/i })).toBeVisible();
        await expect(contactSection.locator('small', { hasText: /message/i })).toBeVisible();
    });

    test('sends form with correct data and shows success message', async ({ page }) => {
        const contactSection = page.locator('#contact');
        await contactSection.locator('input[name="name"]').fill('Jan Kowalski');
        await contactSection.locator('input[name="email"]').fill('jan.kowalski@email.com');
        await contactSection.locator('textarea[name="message"]').fill('This is a test message longer than 10 chars');

        await contactSection.locator('button[type="submit"]').click();

        await expect(contactSection.locator('div[aria-live="polite"]')).toContainText(/message sent/i);
    });
});
