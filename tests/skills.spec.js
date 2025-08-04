import { test, expect } from '@playwright/test';

const skillsList = [
    "HTML", "CSS", "JavaScript", "Sass", "React", "Next.js", "Typescript",
    "Git", "Github", "NPM", "Firebase", "Redux", "Axios", "Markdown", "Figma"
];

test.describe('Skills section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('renders section, header, description and all skill icons', async ({ page }) => {
        const skillsSection = page.locator('#skills');
        await expect(skillsSection).toBeVisible();

        await expect(skillsSection.locator('h2')).toContainText(/skills/i);

        await expect(skillsSection.locator('p')).toBeVisible();

        const images = skillsSection.locator('img');
        await expect(images).toHaveCount(skillsList.length);

        for (const skill of skillsList) {
            await expect(skillsSection.getByAltText(`${skill} logo`)).toBeVisible();
        }
        await expect(skillsSection.getByAltText('React logo')).toHaveAttribute(
            'src',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        );
    });
});