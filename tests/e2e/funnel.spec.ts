import { test, expect } from '@playwright/test';

test.describe('homepage and free day', () => {
  test('homepage loads with the hero promise and the CTA', async ({ page }) => {
    await page.goto('/homepage');
    await expect(
      page.getByRole('heading', {
        name: /the holiday your kids will never stop talking about/i,
      }),
    ).toBeVisible();
    // The closing free-day form's submit button.
    await expect(
      page.getByRole('button', { name: /build your free day/i }).first(),
    ).toBeVisible();
    // Tagline present, never reworded.
    await expect(page.getByText('For families making memories.')).toBeVisible();
  });

  test('the free day form captures and confirms', async ({ page }) => {
    // Stand in for the BE/Brevo capture.
    await page.route('**/api/signup', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto('/free-day');
    await page.getByLabel(/where should we send it/i).fill('sarah@example.com');
    await page.getByRole('button', { name: /build your free day/i }).click();

    // The order is placed; the visitor lands on the confirmation page.
    await expect(page).toHaveURL(/\/free-day-requested/);
    await expect(
      page.getByRole('heading', { name: /your day is being built/i }),
    ).toBeVisible();
  });

  test('shows a validation message for a bad email', async ({ page }) => {
    await page.goto('/free-day');
    await page.getByLabel(/where should we send it/i).fill('nope');
    await page.getByRole('button', { name: /build your free day/i }).click();
    await expect(page.getByRole('status').first()).toContainText(/valid email/i);
  });
});
