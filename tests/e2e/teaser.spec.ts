import { test, expect } from '@playwright/test';

test.describe('waitlist teaser (index)', () => {
  test('shows the teaser promise and the waitlist CTA', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: /skip the stress/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /join the waitlist/i }).first(),
    ).toBeVisible();
    // Tagline present, never reworded.
    await expect(page.getByText('For families making memories.')).toBeVisible();
  });

  test('captures a waitlist lead without leaving the page', async ({ page }) => {
    await page.route('**/api/signup', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto('/');
    await page.getByLabel(/email address/i).first().fill('parent@example.com');
    await page.getByRole('button', { name: /join the waitlist/i }).first().click();

    await expect(page.getByRole('status').first()).toContainText(/on the list/i);
    // Pre-launch: no handoff, the visitor stays on the teaser.
    await expect(page).toHaveURL(/\/$/);
  });

  test('shows a validation message for a bad email', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel(/email address/i).first().fill('nope');
    await page.getByRole('button', { name: /join the waitlist/i }).first().click();
    await expect(page.getByRole('status').first()).toContainText(/valid email/i);
  });
});
