const { test, expect } = require('@playwright/test');

test('homepage visual test comparision', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveScreenshot();
});