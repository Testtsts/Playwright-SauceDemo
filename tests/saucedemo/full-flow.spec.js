const { test, expect} =  require('@playwright/test');
const {LoginPage} = require('./login-page');
const {InventoryPage, INVENTORY_PAGE_URL}= require('./inventory-page');
const {CartPage, CART_PAGE_URL}= require('./cart-page');
const {CheckoutStepOne, CHECKOUT_ONE_URL}= require('./checkout-step-one');
const {CheckoutStepTwo, CHECKOUT_TWO_URL}= require('./checkout-step-two');
const {CheckoutComplete, CHECKOUT_COMPLETE_URL,ORDER_COMPLETED_STRING} = require('./checkout-complete')
const { fakerID_ID: faker } = require("@faker-js/faker");


const STANDARD_USERNAME = "standard_user";
const GENERIC_PASSWORD = "secret_sauce";

test("full flow",async ({page})=>{
    //Login
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.writeUserName(STANDARD_USERNAME);
    await loginPage.writePassword(GENERIC_PASSWORD);
    await loginPage.clickLoginButton();
    expect(page.url()).toEqual(INVENTORY_PAGE_URL);
    //Select 2 item at random
    const inventoryPage = new InventoryPage(page);
    let availableItemCount = await inventoryPage.getItemCount();
    let randomIndex1 = Math.floor(Math.random() * availableItemCount);
    let randomIndex2 = Math.floor(Math.random() * availableItemCount);
    while (randomIndex1 == randomIndex2){
        randomIndex2 = Math.floor(Math.random() * availableItemCount);
    }
    await inventoryPage.clickNthAddToCartButton(randomIndex1);
    await inventoryPage.clickNthAddToCartButton(randomIndex2);
    await expect(inventoryPage.shoppingCartBadge).toContainText("2");
    //Go to cart
    await inventoryPage.shoppingCartBadge.click();
    expect(page.url()).toEqual(CART_PAGE_URL);
    //Remove an item
    const cartPage = new CartPage(page);
    await cartPage.clickNthRemoveItemButton(0);
    expect(await cartPage.getItemCount()).toEqual(1);
    //Go to checkout
    await cartPage.clickCheckoutButton();
    expect(page.url()).toEqual(CHECKOUT_ONE_URL);
    //Filling form
    const checkoutStepOne = new CheckoutStepOne(page);
    await checkoutStepOne.fillFirstNameField(faker.person.firstName());
    await checkoutStepOne.filllastNameField(faker.person.lastName());
    await checkoutStepOne.fillPostalCodeField(faker.location.zipCode());
    //Continue checkout
    await checkoutStepOne.clickContinueButton();
    expect(page.url()).toEqual(CHECKOUT_TWO_URL);
    const checkoutStepTwo = new CheckoutStepTwo(page);
    expect(await checkoutStepTwo.inventoryItem.count()).toEqual(1);
    //Click finish button
    await checkoutStepTwo.clickFinishButton();
    expect(page.url()).toEqual(CHECKOUT_COMPLETE_URL);
    const checkoutComplete = new CheckoutComplete(page);
    await expect (checkoutComplete.completeHeader).toContainText(ORDER_COMPLETED_STRING);
})