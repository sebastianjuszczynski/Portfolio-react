import { test, expect } from '@playwright/test';

test.describe('Theme switcher', () => {
    test.beforeEach(async ({ page }) => {
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

    test('remembers selected theme after reload', async ({ page }) => {
        const themeToggle = page.locator('button[aria-label="Toggle dark mode"]');
        const body = page.locator('body');

        await themeToggle.click();
        await expect(body).toHaveAttribute('data-theme', 'dark');

        await page.reload();
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
        await expect(body).toHaveAttribute('data-theme', 'dark');
    });
    test('shows correct icon for theme', async ({ page }) => {
        const sunIcon = page.locator('text=☀️');
        const moonIcon = page.locator('text=🌙');

        await expect(sunIcon).toBeVisible();
        await expect(moonIcon).toBeHidden();

        const themeToggle = page.locator('button[aria-label="Toggle dark mode"]');
        await themeToggle.click();

        await expect(moonIcon).toBeVisible();
        await expect(sunIcon).toBeHidden();
    })
});