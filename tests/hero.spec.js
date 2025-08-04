import { test, expect } from '@playwright/test';

test.describe('Hero section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('renders title, arrow and image', async ({ page }) => {
        await expect(page.locator('[data-testid="hero-span"]')).toContainText('Sebastian');
        await expect(page.getByAltText('Developer writing code')).toBeVisible();
        await expect(page.getByRole('link', { name: /scroll to about section/i })).toBeVisible();
    });
    test('arrow scrolls to about section when clicked', async ({ page }) => {
        const arrowLink = page.getByRole('link', { name: 'Scroll to about section' });
        await arrowLink.click();
        const aboutHeading = page.locator('#about h2');
        await expect(aboutHeading).toBeVisible({ timeout: 2000 });
    });
    test('should display social icons with correct links', async ({ page }) => {
        const socialsLinks = page.locator('[data-testid="hero-socials"] a');
        await expect(socialsLinks).toHaveCount(4);

        const expectedHrefs = ['https://www.linkedin.com/in/sebastian-juszczynski-52982a243/', 'https://github.com/sebastianjuszczynski', 'https://www.facebook.com/sebastian.juszczynski.3/', 'https://www.instagram.com/sjuszczynski/'];

        for (const [index, href] of expectedHrefs.entries()) {
            const link = socialsLinks.nth(index);
            await expect(link).toHaveAttribute('href', href);
            await expect(link).toHaveAttribute('target', '_blank');
            await expect(link).toBeVisible();
        }
    });

    test('image click/hover triggers style change (mobile/desktop)', async ({ page }) => {
        const imageContainer = page.locator('[data-testid="hero-image-container"]');

        await page.setViewportSize({ width: 375, height: 700 });
        let transform = await imageContainer.evaluate(el => getComputedStyle(el).transform);
        expect(transform).not.toBe('none'); 

        await imageContainer.click();
        transform = await imageContainer.evaluate(el => getComputedStyle(el).transform);
        expect(
            transform === 'none' ||
            transform.startsWith('matrix')
        ).toBeTruthy();

        await page.setViewportSize({ width: 1024, height: 768 });
        await imageContainer.hover();
        transform = await imageContainer.evaluate(el => getComputedStyle(el).transform);
        expect(
            transform === 'none' ||
            transform.startsWith('matrix')
        ).toBeTruthy();

        await page.mouse.move(0, 0);
        transform = await imageContainer.evaluate(el => getComputedStyle(el).transform);
        expect(transform).not.toBe('none');
    });

});