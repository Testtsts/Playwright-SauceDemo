exports.CheckoutComplete = class CheckoutComplete{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;      
        this.completeHeader = page.locator('[data-test="complete-header"]');
    }
}

exports.CHECKOUT_COMPLETE_URL = "https://www.saucedemo.com/checkout-complete.html"

exports.ORDER_COMPLETED_STRING = "Thank you for your order!";