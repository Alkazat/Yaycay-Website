import { test, expect } from '@playwright/test';

test.describe('homepage (index)', () => {
  test('shows the homepage promise, tagline and the free-day CTA', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', {
        name: /the holiday your kids will never stop talking about/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /build your free day/i }).first(),
    ).toBeVisible();
    // Tagline present, never reworded.
    await expect(page.getByText('For families making memories.')).toBeVisible();
  });

  test('the retired /homepage 301-redirects to /', async ({ page }) => {
    await page.goto('/homepage');
    await expect(page).toHaveURL(/\/$/);
  });
});
