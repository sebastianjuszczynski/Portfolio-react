import { test, expect } from '@playwright/test';

test.describe('Intro', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
    });
    test('Intro is visible and then disapears when Header shows up', async ({ page }) => {
        // 1. Intro is visible

        const introLogo = page.locator('[data-testid="intro-logo"]');
        await expect(introLogo).toBeVisible();
        // 2. Body has the 'no-scroll' class while Intro is visible

        expect(await page.evaluate(() => document.body.classList.contains('no-scroll'))).toBe(true);
        // 3. Intro disapears

        await expect(introLogo).toBeHidden({ timeout: 5000 });
        // 4. Header and logo are visible
        const headerLogo = page.locator('[data-testid="header-logo"]');
        await expect(headerLogo).toBeVisible();
        await expect(page.getByRole('banner')).toBeVisible();

        // 5. Body no longer has the class 'no-scroll'
        expect(await page.evaluate(() => document.body.classList.contains('no-scroll'))).toBe(false);

    });
});
