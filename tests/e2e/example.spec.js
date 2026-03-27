// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('App E2E', () => {
  test('health endpoint is accessible', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.status).toBe('ok');
  });

  // Add click-through tests for your app's UI here
  // Example:
  // test('homepage loads', async ({ page }) => {
  //   await page.goto('/');
  //   await expect(page).toHaveTitle(/App Name/);
  // });
});
