exports.MenuPage = class MenuPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;
        this.tableNumInput = page.locator('#table-name-input');
        this.tableNumSubmit = page.locator('#submit-table-button > .mat-mdc-button-touch-target');
        this.continueAsGuestButton = page.locator('.mat-ripple:contains(Guest)');
    }

    async goto(){
        await this.page.goto("https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein");
    }

    async typeTableNumField(tableNumber){
        await this.tableNumInput.fill(tableNumber)
    }

    async inputTableNumField(){
        await this.tableNumSubmit.click();
    }

    async continueAsGuest(){
        await this.continueAsGuestButton.click()
    }

    async selectMenuCategory(index){
        await this.page.locator(`.menu-category-container > :nth-child(${index})`).click();
    }

    async searchMenuItem(){
        await this.page.locator('[aria-label="search-button"]').click();
        await this.page.locator('.search-input').fill(searchKeyword);
    }

    async addNthItemToCart(itemIndex){
        await this.page.locator('.mdc-button__label:has-text("Add")').nth(itemIndex).click();
    }

    async goToCart(){
        await this.page.locator('#itemsCart').click();
    }

    async continuePayment(){
        await this.page.locator('.mt-2 > .mat-mdc-button-touch-target').click();
    }

    getTableNum(){
        return this.page.locator('#table-name-input');
    }

    getPayButton(){
        return this.page.locator('#p-payment');
    }
}

exports.ONLINE_ORDER_URL = "https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein"