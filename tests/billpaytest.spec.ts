import {test, expect} from '@playwright/test';

test('Successfull Bill payment', async ({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('suesmith');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('Suesmith90#');
    await page.getByRole('button', {name: 'Log In'}).click();
    await expect(page.locator('h1.title', { hasText: 'Accounts Overview' })).toBeVisible();
    await page.locator('text=Bill Pay').click();
    await expect(page.locator('h1.title', { hasText: 'Bill Pay Service' })).toBeVisible();

});