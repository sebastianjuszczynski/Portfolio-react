import { test, expect } from '@playwright/test';

const projectsFixture = [
    {
        title: "Movies Browser",
        description: "Movie browser app using external API.",
        tech: ["html5", "css3", "javascript", "react", "redux"],
        link: "https://sebastianjuszczynski.github.io/movies-browser"
    },
    {
        title: "Weather App",
        description: "Simple weather forecast app with location search.",
        tech: ["html5", "css3", "javascript"],
        link: "https://sebastianjuszczynski.github.io/Weather-App/"
    }
];

test.describe('Projects section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173');
        await page.locator('[data-testid="intro-logo"]').waitFor({ state: 'hidden', timeout: 10000 });
    });

    test('renders all projects with correct data', async ({ page }) => {
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();
        await expect(projectsSection.locator('h2')).toContainText(/projects/i);

        const titles = await projectsSection.locator('h3').allTextContents();

        for (const project of projectsFixture) {
            expect(titles).toContain(project.title);

            const title = projectsSection.getByRole('heading', { level: 3, name: project.title });
            const card = title.locator('..');

            await expect(card.locator('p')).toContainText(project.description);

            await expect(card.locator('a')).toHaveAttribute('href', project.link);

            await expect(card.locator('a')).toHaveAttribute('target', '_blank');

            for (const tech of project.tech) {
                await expect(card.locator(`img[alt="${tech} logo"]`)).toBeVisible();
            }
        }
    });
});