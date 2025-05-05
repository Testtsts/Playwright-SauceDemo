exports.CatalogSearch = class CatalogSearch{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.products = page.locator('.product-item-link');
        this.sorter = page.locator('#sorter').first()
        this.sortSwitcher = page.locator("[data-role='direction-switcher']").first()
        this.firstItemPrice = page.locator('.price').first();
        this.secondItemPrice = page.locator('.price').nth(1);
    }

    async getNthProduct(index){
        return await this.products.nth(index);
    }

    async clickSwitchSort(){
        await this.sortSwitcher.click();
    }

    async selectSortPrice(){
        
        await this.sorter.click();
        await this.sorter.selectOption('price');
    }
}

exports.HOME_URL = "https://magento.softwaretestingboard.com/"