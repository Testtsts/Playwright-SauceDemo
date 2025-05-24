const {HomePage} = require('./home-page');
const { test, expect} =  require('@playwright/test');
const {CatalogSearch} = require("./catalog-search-page");
const {ProductDetail}= require("./product-detail");
const {GlobalElements} = require("./global-elements");

test('should succeed adding item to cart with selected size and color', async ({ page }) => {
  const homePage = new HomePage(page);
  const catalogSearch = new CatalogSearch(page);
  const productDetail = new ProductDetail(page);
  const globalElements = new GlobalElements(page);

  await homePage.visitPage();
  await homePage.searchForItem('Pierce');
  await expect(await catalogSearch.getNthProduct(0)).toBeVisible();
  await (await catalogSearch.getNthProduct(0)).click();
  await(await (await (productDetail.getColorOption())).first()).click();
  await(await (await (productDetail.getSizeOption())).first()).click();
//   await productDetail.getSizeOption().first().click();
  await productDetail.fillQtyField(5);
  await productDetail.clickAddToCartButton();
  await expect(await globalElements.getCartCounter()).toHaveText('5');
});
