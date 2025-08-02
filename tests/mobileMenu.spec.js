import { test, expect } from '@playwright/test';

test.describe('Mobile menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 700 });
    await page.goto('http://localhost:5173');
    await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
  });
  test('opens on hamburger click and closes on link click', async ({ page }) => {

    const hamburger = page.getByTestId('hamburger');
    await expect(hamburger).toBeVisible();

    const menu = page.locator('#main-menu');
    await expect(menu).toHaveCSS('opacity', '0');

    await hamburger.click();
    await expect(menu).toHaveCSS('opacity', '1');

    const firstLink = menu.locator('a').first();
    await firstLink.click();
    await expect(menu).toHaveCSS('opacity', '0');
  });

  test('closes on second hamburger click', async ({ page }) => {
    const hamburger = page.getByTestId('hamburger');
    const menu = page.locator('#main-menu');

    await hamburger.click();
    await expect(menu).toHaveCSS('opacity', '1');

    await hamburger.click();
    await expect(menu).toHaveCSS('opacity', '0');
  });

  test('has 5 links in the menu', async ({ page }) => {
    const hamburger = page.getByTestId('hamburger');
    await hamburger.click();

    const menuLinks = page.locator('#main-menu a');
    await expect(menuLinks).toHaveCount(5);
  });

  test('closes when clicking outside the menu', async ({ page }) => {
    const hamburger = page.getByTestId('hamburger');
    const menu = page.locator('#main-menu');

    await hamburger.click();
    await expect(menu).toHaveCSS('opacity', '1');

    await page.mouse.click(10, 10);
    await expect(menu).toHaveCSS('opacity', '0');
  });
});
