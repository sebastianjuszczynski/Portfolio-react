import { test, expect } from '@playwright/test';

test.describe('Theme switcher', () => {
    test.beforeEach( async ({ page }) => {
          await page.goto('http://localhost:5173');
    await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });
    test('toggles dark/light mode on button click', async ({ page }) => {
        const themeToggle = page.locator('button[aria-label="Toggle dark mode"]');
        const body = page.locator('body');

        await expect(body).toHaveAttribute('data-theme', 'light');

        await themeToggle.click();
        await expect(body).toHaveAttribute('data-theme', 'dark');

        await themeToggle.click();
        await expect(body).toHaveAttribute('data-theme', 'light');
    });

});