const { expect } = require('@playwright/test');

exports.CheckoutStepTwo = class CheckoutStepTwo{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;      
        this.inventoryItem = page.locator('[data-test="inventory-item"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }
}

exports.CHECKOUT_TWO_URL = "https://www.saucedemo.com/checkout-step-two.html"