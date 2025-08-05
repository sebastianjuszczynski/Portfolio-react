import { test, expect } from '@playwright/test';

test.describe('Language dropdown', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('shows dropdown on click and toggles language', async ({ page }) => {
        const langButton = page.getByRole('button', { name: /change language/i });

        await expect(langButton).toHaveAttribute('aria-haspopup', 'listbox');
        await expect(langButton).toHaveAttribute('aria-expanded', 'false');

        await langButton.click();
        await expect(langButton).toHaveAttribute('aria-expanded', 'true');

        const options = page.locator('ul[role="listbox"] li');
        await expect(options).toHaveCount(2);
        await expect(options.nth(0)).toContainText('EN');
        await expect(options.nth(1)).toContainText('PL');

        await options.nth(1).click();
        const nav = page.getByRole('navigation', { name: 'Main navigation' });
        await expect(nav.getByRole('link', { name: 'Strona główna' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'O mnie' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'Umiejętności' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'Projekty' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'Kontakt' })).toBeVisible();

        await expect(page.locator('#about h2')).toContainText('O mnie');
        await expect(page.locator('#skills h2')).toContainText('Umiejętności');
        await expect(page.locator('#projects h2')).toContainText('Projekty');
        await expect(page.locator('#contact h2')).toContainText('Kontakt');

        await langButton.click();
        await options.nth(0).click();

        await expect(nav.getByRole('link', { name: 'Projects' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'Skills' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
        await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();

        await expect(page.locator('#about h2')).toContainText('About');
        await expect(page.locator('#skills h2')).toContainText('Skills');
        await expect(page.locator('#projects h2')).toContainText('Projects');
        await expect(page.locator('#contact h2')).toContainText('Contact');

        await expect(langButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('remembers selected language after reload', async ({ page }) => {
        const langButton = page.getByRole('button', { name: /change language/i });
        await langButton.click();
        const options = page.locator('ul[role="listbox"] li');
        await options.nth(1).click(); 

        await page.reload();
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });

        const nav = page.getByRole('navigation', { name: 'Main navigation' });
        await expect(nav.getByRole('link', { name: 'Projekty' })).toBeVisible();
    });
});