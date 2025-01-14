const { test, expect} =  require('@playwright/test');
const {LoginPage} = require('./login-page');
const {InventoryPage,INVENTORY_PAGE_URL}= require('./inventory-page')

const STANDARD_USERNAME = "standard_user";
const GENERIC_PASSWORD = "secret_sauce";


test.describe('add items to cart', ()=>{
    test.beforeEach(async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.writeUserName(STANDARD_USERNAME);
        await loginPage.writePassword(GENERIC_PASSWORD);
        await loginPage.clickLoginButton();
        expect(page.url()).toEqual(INVENTORY_PAGE_URL);
    })

    test("add 1st and 2nd item to cart", async ({page})=>{
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.clickNthAddToCartButton(0);
        await inventoryPage.clickNthAddToCartButton(1);
        await expect(inventoryPage.shoppingCartBadge).toContainText("2");
    })

    test("add 1st to 3nd item to cart", async ({page})=>{
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.clickNthAddToCartButton(0);
        await inventoryPage.clickNthAddToCartButton(1);
        await inventoryPage.clickNthAddToCartButton(2);
        await expect(inventoryPage.shoppingCartBadge).toContainText("3");
    })

    test("add 1st to 4th item to cart", async ({page})=>{
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.clickNthAddToCartButton(0);
        await inventoryPage.clickNthAddToCartButton(1);
        await inventoryPage.clickNthAddToCartButton(2);
        await inventoryPage.clickNthAddToCartButton(3);
        await expect(inventoryPage.shoppingCartBadge).toContainText("4");
    })
});

