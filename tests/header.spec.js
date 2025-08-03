import { test, expect } from '@playwright/test';

test.describe('Header', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
  });

  test('Logo scrolls to top on click', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 1000));
    const logo = page.locator('[data-testid="header-logo"]');
    await logo.click();
    await page.waitForTimeout(500);
    const scrollTop = await page.evaluate(() => window.scrollY);
    expect(scrollTop).toBeLessThan(100);
  });

  test('Navigation links are visible and have correct hrefs', async ({ page }) => {
    const links = page.locator('#main-menu a');
    await expect(links).toHaveCount(5);

    const expectedHrefs = ['#home', '#about', '#skills', '#projects', '#contact'];

    for (const [index, href] of expectedHrefs.entries()) {
      const link = links.nth(index);
      await expect(link).toHaveAttribute('href', href);
      await expect(link).toBeVisible();
    }
  });

  test('Navigation links scrolls to correct section on click', async ({ page }) => {
    const aboutLink = page.locator('#main-menu a[href="#about"]');
    await aboutLink.click();
    const aboutHeading = page.locator('#about h2');
    await expect(aboutHeading).toBeVisible({ timeout: 2000 });
  });

});
