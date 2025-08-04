import { test, expect } from '@playwright/test';

test.describe('About section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('renders all text and image correctly', async ({ page }) => {
        const aboutSection = page.locator('#about');
        await expect(aboutSection).toBeVisible();

        const aboutTitle = aboutSection.locator('h2')
        await expect(aboutTitle).toBeVisible();
        await expect(aboutTitle).toContainText('About');

        const aboutDescription = aboutSection.locator('p');
        await expect(aboutDescription).toBeVisible();
        await expect(aboutDescription).toContainText('I’m a self-taught frontend developer focused on writing clean, accessible code and building responsive websites. I love turning ideas into real interfaces and constantly learning new tools and technologies.');

        const aboutLink = aboutSection.locator('a');
        await expect(aboutLink).toBeVisible();
        await expect(aboutLink).toHaveAttribute('href', '#contact');
        await aboutLink.click();
        await expect(page.locator('#contact')).toBeVisible();

        const aboutImage = aboutSection.locator('img');
        await expect(aboutImage).toBeVisible();
        await expect(aboutImage).toHaveAttribute('alt', 'Developer thinking about code');
    });
});