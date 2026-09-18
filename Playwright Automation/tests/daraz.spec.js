import { test, expect } from '@playwright/test';
import { DarazHomePage } from '../pages/DarazHomePage.js';
import { DarazSearchResultsPage } from '../pages/DarazSearchResultsPage.js';
import { DarazProductPage } from '../pages/DarazProductPage.js';


test('Navigate to Daraz homepage', async ({ page }) => {
  const homePage = new DarazHomePage(page);

  await homePage.navigate();

  await expect(page).toHaveURL(/daraz\.pk/);
  await expect(homePage.searchBox).toBeVisible();
});


test('Search for Electronics', async ({ page }) => {
  const homePage = new DarazHomePage(page);

  await homePage.navigate();
  await homePage.searchProduct('electronics');

  await expect(page).toHaveURL(/electronics/i);
});


test('Apply Brand Filter', async ({ page }) => {
  const homePage = new DarazHomePage(page);
  const searchResultsPage = new DarazSearchResultsPage(page);

  await homePage.navigate();
  await homePage.searchProduct('electronics');

  await searchResultsPage.applyBrandFilter();

  await expect(searchResultsPage.brand).toBeVisible();
});


test('Apply Price Filter 500-5000', async ({ page }) => {
  const homePage = new DarazHomePage(page);
  const searchResultsPage = new DarazSearchResultsPage(page);

  await homePage.navigate();
  await homePage.searchProduct('electronics');

  await searchResultsPage.applyPriceFilter(500, 5000);

  await expect(searchResultsPage.priceFilterText).toBeVisible();
});


test('Validate Product Count', async ({ page }) => {
  const homePage = new DarazHomePage(page);
  const searchResultsPage = new DarazSearchResultsPage(page);

  await homePage.navigate();
  await homePage.searchProduct('electronics');

  await searchResultsPage.applyPriceFilter(500, 5000);

  const productCount = await searchResultsPage.getProductCount();

  console.log(`Number of products displayed: ${productCount}`);

  expect(productCount).toBeGreaterThan(0);
});


test('Open Product Details Page', async ({ page }) => {
  const homePage = new DarazHomePage(page);
  const searchResultsPage = new DarazSearchResultsPage(page);

  await homePage.navigate();
  await homePage.searchProduct('electronics');

  await searchResultsPage.applyPriceFilter(500, 5000);

  await expect(searchResultsPage.products.first()).toBeVisible();

  await searchResultsPage.openFirstProduct();

  await expect(page).toHaveURL(/\/products\//);
});


test('Verify Free Shipping', async ({ page }) => {
  const homePage = new DarazHomePage(page);
  const searchResultsPage = new DarazSearchResultsPage(page);
  const productPage = new DarazProductPage(page);

  await homePage.navigate();
  await homePage.searchProduct('electronics');

  await searchResultsPage.applyPriceFilter(500, 5000);

  await expect(searchResultsPage.products.first()).toBeVisible();

  await searchResultsPage.openFirstProduct();

  if (await productPage.isFreeShippingAvailable()) {
    await expect(productPage.freeShipping.first()).toBeVisible();
    console.log('Free Shipping is available.');
  } else {
    console.log('Free Shipping is not available for this product.');
  }
});
