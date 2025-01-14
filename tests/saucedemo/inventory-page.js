exports.InventoryPage = class InventoryPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.inventoryList = page.locator('[data-test="inventory-list"]');
        this.itemAddToCartButton = page.locator('[data-test="inventory-item"] button');
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]')
    }

    async clickNthAddToCartButton(index){
        await this.itemAddToCartButton.nth(index).click();
    }

    async getItemCount(){
        return await this.itemAddToCartButton.count();
    }

}

exports.INVENTORY_PAGE_URL = "https://www.saucedemo.com/inventory.html"