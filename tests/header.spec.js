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
  
});
