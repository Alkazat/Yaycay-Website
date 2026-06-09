import { test, expect } from '@playwright/test';

test.describe('marketing funnel', () => {
  test('loads with the hero promise and the single CTA', async ({ page }) => {
    await page.goto('/homepage');
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

  test('captures a lead and hands the visitor to the demo', async ({ page }) => {
    // Stand in for BE/Brevo: return success with a same-origin redirect so the
    // handoff navigation can be asserted in-test.
    await page.route('**/api/signup', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, redirectUrl: '/legal/privacy' }),
      });
    });

    await page.goto('/homepage');

    const email = page.getByLabel(/email address/i).first();
    await email.fill('parent@example.com');
    await page.getByRole('button', { name: /build your free day/i }).first().click();

    await expect(page.getByRole('status').first()).toContainText(/free day/i);
    // The handoff fires.
    await expect(page).toHaveURL(/\/legal\/privacy/);
  });

  test('shows a validation message for a bad email', async ({ page }) => {
    await page.goto('/homepage');
    const email = page.getByLabel(/email address/i).first();
    await email.fill('nope');
    await page.getByRole('button', { name: /build your free day/i }).first().click();
    await expect(page.getByRole('status').first()).toContainText(/valid email/i);
  });
});
