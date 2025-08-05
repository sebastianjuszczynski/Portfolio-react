import { test, expect } from '@playwright/test';

test.describe('ScrollToTopButton', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('is hidden by default and appears after scrolling', async ({ page }) => {
        const scrollBtn = page.getByRole('button', { name: /scroll to top/i, includeHidden: true });

        await expect(scrollBtn).toHaveCSS('visibility', 'hidden');
        await expect(scrollBtn).toHaveCSS('opacity', '0');

        await page.evaluate(() => window.scrollTo(0, 400));

        await expect(scrollBtn).toHaveCSS('visibility', 'visible');
        await expect(scrollBtn).toHaveCSS('opacity', '1');
    });

    test('click scrolls page to top and hides button', async ({ page }) => {
        const scrollBtn = page.getByRole('button', { name: /scroll to top/i, includeHidden: true });

        await page.evaluate(() => window.scrollTo(0, 400));
        await expect(scrollBtn).toHaveCSS('visibility', 'visible');
        await expect(scrollBtn).toHaveCSS('opacity', '1');

        await scrollBtn.click();

        await page.waitForTimeout(500);

        const y = await page.evaluate(() => window.scrollY);
        expect(y).toBeLessThan(10);

        await expect(scrollBtn).toHaveCSS('visibility', 'hidden');
        await expect(scrollBtn).toHaveCSS('opacity', '0');
    });

    test('reduces opacity when focusing input/textarea', async ({ page }) => {
        const scrollBtn = page.getByRole('button', { name: /scroll to top/i, includeHidden: true });

        await page.evaluate(() => window.scrollTo(0, 400));
        await expect(scrollBtn).toHaveCSS('visibility', 'visible');
        await expect(scrollBtn).toHaveCSS('opacity', '1');

        await page.locator('input[name="name"]').focus();
        await expect(scrollBtn).toHaveCSS('opacity', '0.3');

        await page.locator('input[name="name"]').blur();
        await expect(scrollBtn).toHaveCSS('opacity', '1');

        await page.locator('textarea[name="message"]').focus();
        await expect(scrollBtn).toHaveCSS('opacity', '0.3');

        await page.locator('textarea[name="message"]').blur();
        await expect(scrollBtn).toHaveCSS('opacity', '1');
    });
});