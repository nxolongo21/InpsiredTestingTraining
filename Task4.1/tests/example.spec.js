import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');

  await page.locator('id("user-name")').click();
  await page.locator('id("user-name")').fill('standard_user');

  await page.locator('id("password")').click();
  await page.locator('id("password")').fill('secret_sauce');

  await page.locator('id("login-button")').click();

  await page.locator('//div[contains(text(), "$49.99") and contains(text(), "ADD TO CART")]/following-sibling::button').click();

  await page.locator('//a[@class="shopping_cart_link"]').click();

  await page.locator('//a[@class="btn_action checkout_button"]').click();

  await page.locator('id("first-name")').click();
  await page.locator('id("first-name")').fill('Aphiwe');

  await page.locator('id("last-name")').click();
  await page.locator('id("last-name")').fill('Nxolongo');

  await page.locator('id("postal-code")').click();
  await page.locator('id("postal-code")').fill('7784');

  await page.locator('id("continue")').click();

  await page.locator('id("finish")').click();
});
