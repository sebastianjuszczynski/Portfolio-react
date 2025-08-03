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
        await expect(nav.getByRole('link', { name: 'Projekty' })).toBeVisible();

        await expect(langButton).toHaveAttribute('aria-expanded', 'false');
    });

});