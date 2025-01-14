const { expect } = require('@playwright/test');

exports.CartPage = class CartPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;      
        this.removeItemButton = page.locator('[data-test="inventory-item"] button');
        this.checkoutButton = page.locator('[data-test="checkout"]')
    }

    async clickNthRemoveItemButton(index){
        await this.removeItemButton.nth(index).click();
    }

    async getItemCount(){
        return await this.removeItemButton.count();
    }

    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }
}

exports.CART_PAGE_URL = "https://www.saucedemo.com/cart.html"