const { test,expect } = require('playwright/test');
const {MenuPage,ONLINE_ORDER_URL} = require('./menu-page.js')

test.describe('serlok online order menu', ()=>{
    test("should be able to see order summary", async ({page})=>{
        const menuPage = new MenuPage(page);
        await menuPage.goto();
        await menuPage.typeTableNumField("180");
        await menuPage.inputTableNumField();
        await menuPage.selectMenuCategory(3);
        await menuPage.searchMenuItem("ayam");
        await menuPage.addNthItemToCart(0);
        await menuPage.addNthItemToCart(1);
        await menuPage.goToCart();
        await expect(page).toHaveURL(/view-order/);
        await menuPage.continuePayment();
        await expect(page).toHaveURL(/payment/);
        await menuPage.continueAsGuest();
        await expect(menuPage.getTableNum()).toHaveValue('180');
        await expect(menuPage.getPayButton()).toBeVisible();
    })
})