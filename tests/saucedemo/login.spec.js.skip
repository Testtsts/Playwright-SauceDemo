const { test, expect} =  require('@playwright/test');
const {LoginPage} = require('./login-page');
const {INVENTORY_PAGE_URL}= require('./inventory-page')

const STANDARD_USERNAME = "standard_user";
const GENERIC_PASSWORD = "secret_sauce";

test.skip('Should succeed login and redirect to inventory page', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.writeUserName(STANDARD_USERNAME);
    await loginPage.writePassword(GENERIC_PASSWORD);
    await loginPage.clickLoginButton();
    expect(page.url()).toEqual(INVENTORY_PAGE_URL);
    
})