import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForSelector('header')
});

test.describe('Home Page', () => {
    test('has title', async ({ page }) => {
        await expect(page).toHaveTitle(/Bringmeister Coding Challenge/);
      });

    test('each product tile should have title and price/unit', async ({ page }) => {
        const productTiles = await page.$$('li');
      
        const tileTexts = await Promise.all(
          productTiles.map(async (item) => {
            const h2Text = await item.$eval('h2', (el) => el.textContent);
            const h3Text = await item.$eval('h3', (el) => el.textContent);
            return { h2Text, h3Text };
          })
        );
      
        const allHaveH2AndH3 = tileTexts.every((item) => item.h2Text && item.h3Text);
      
        expect(allHaveH2AndH3).toBe(true);
      });

    test('should display the product count and cart count correctly', async ({ page }) => {
        await expect(page.getByTestId('cartCount')).toContainText('4');
        await expect(page.getByTestId('productCount')).toContainText('2335');
    });

    test('should search for products and display the filtered list', async ({ page }) => {
        await page.fill('input[type="search"]', 'milch');

        await page.waitForSelector('li');
        const productNames = await page.$$eval('li', (elements) =>
        elements.map((el) => el.textContent)
        );

        const containsQuery = productNames.every((name) => name?.includes('milch') || name?.includes('Milch'));
        expect(containsQuery).toBe(true);
    });

    test('should display the number of products with a specific SKU in the cart', async ({ page }) => {
        await page.fill('input[type="search"]', 'Alnatura Bio Eier');
        await page.waitForSelector('li');
        await expect(page.getByTestId('countInCart')).toHaveText("Added to cart: 1");
    });
});

