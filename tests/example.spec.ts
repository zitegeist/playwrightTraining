import { test, expect } from '@playwright/test';

/**
 * Two example tests against our practice site:
 * https://the-internet.herokuapp.com
 *
 * Read each line as a plain English instruction to the browser.
 */

test('the practice site home page loads', async ({ page }) => {
  // Go to the home page (baseURL + '/')
  await page.goto('/');

  // Check the main heading is visible and says the right thing
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
});

test('a user can log in with valid credentials', async ({ page }) => {
  // Go to the login page
  await page.goto('/login');

  // Type the username and password into the form
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  // Click the Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Check we landed in the secure area with a success message
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
});
