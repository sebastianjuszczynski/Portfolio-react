import { test, expect } from '@playwright/test';

const footerSocialLinks = [
  'https://www.linkedin.com/in/sebastian-juszczynski-52982a243/',
  'https://github.com/sebastianjuszczynski',
  'https://www.facebook.com/sebastian.juszczynski.3/',
  'https://www.instagram.com/sjuszczynski/'
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

test.describe('Footer Section', () => {
    test.beforeEach(async ({ page }) => {
         await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('renders footer with navigation, socials and copyright', async ({ page }) => {
        const footer = page.locator('#footer');
        await expect(footer).toBeVisible();

        await expect(footer.getByRole('link', { name: /seb\.dev/i })).toBeVisible();

    for (const link of navLinks) {
        await expect(footer.getByRole('link', { name: new RegExp(link.name, 'i') })).toHaveAttribute('href', link.href);
    }

    const socials = footer.locator('[data-testid="footer-socials"] a');
    await expect(socials).toHaveCount(footerSocialLinks.length);

    for (const [i, url] of footerSocialLinks.entries()) {
        await expect(socials.nth(i)).toHaveAttribute('href', url);
        await expect(socials.nth(i)).toHaveAttribute('target', '_blank');
    }

    await expect(footer.locator('p')).toContainText(/seb\.dev/i);
    });
    test('clicking navigation links scrolls to section', async ({ page }) => {
        await page.locator('#footer').getByRole('link', { name: /about/i }).click();
        await expect(page.locator('#about')).toBeVisible();
    })
})