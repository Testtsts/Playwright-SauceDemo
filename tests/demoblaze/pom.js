const { expect } = require("playwright/test");

exports.DemoBlazePom = class DemoBlazePom{

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page
    }

    async visit(){
        return this.page.goto('https://www.demoblaze.com/')
    }

    async selectItemByName(itemName){
        return this.page.locator(".hrefch").filter({hasText:itemName}).click();
    }

    async addToCart(){
        return this.page.locator(".btn.btn-success.btn-lg").click();
    }

    async goToCart(){
        return this.page.locator("#cartur").click()
    }

    async removeItemFromCartByName(itemName){
        return this.page.locator(".success")
        .filter({hasText: itemName})
        .getByText("Delete").click();
    }

    async getTotalPrice(){
        return this.page.locator("#totalp")
    }

    async placeOrder(){
        return this.page.locator(".btn.btn-success").click();
    }

    async fillName(name){
        return this.page.locator("#name").fill(name);
    }
    
    async fillCountry(country){
        return this.page.locator("#country").fill(country);
    }

    async fillCity(city){
        return this.page.locator('#city').fill(city);
    }

    async fillCard(card){
        return this.page.locator('#card').fill(card)
    }

    async fillMonth(month){
        return this.page.locator('#month').fill(month)
    }

    async fillYear(year){
        return this.page.locator('#year').fill(year)
    }

    async clickPurchase(){
        return this.page.locator(".btn.btn-primary").filter({hasText:"Purchase"}).click();
    }

    async closeOrderSummary(){
        return this.page.locator(".confirm.btn.btn-lg.btn-primary").click();
    }
    
}

exports.HOMEPAGE_URL = "https://www.demoblaze.com/"