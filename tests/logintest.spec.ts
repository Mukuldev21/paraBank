import { test, expect } from '@playwright/test';

test('Should Have title', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ParaBank/);
});

test(' Succesful Login Test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('johnwick');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('Johnwick90#');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.locator('h1.title', { hasText: 'Accounts Overview' })).toBeVisible();
});