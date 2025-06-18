const {fakerID_ID: faker} = require('@faker-js/faker');
const {HOMEPAGE_URL, DemoBlazePom} = require("./pom");
const { test, expect} =  require('@playwright/test');


test.describe("Demo Blaze Order", function(){

    test.beforeEach(async ({page})=>{
        const demoBlaze = new DemoBlazePom(page);
        await demoBlaze.visit();
        expect(page.url()).toEqual(HOMEPAGE_URL);
        // cy.url().should("eq",HOMEPAGE_URL)
    })
    
    test("should success order item from cart", async({page})=>{
        const demoBlaze = new DemoBlazePom(page)
        await demoBlaze.selectItemByName("Samsung galaxy s6");
        await demoBlaze.addToCart();
        await demoBlaze.clickHomeButton();
        await demoBlaze.selectItemByName("Nokia lumia 1520");
        await demoBlaze.addToCart();
        await demoBlaze.goToCart();
        await expect(await demoBlaze.getTotalPrice()).toHaveText("1180");
        await demoBlaze.placeOrder();
        await demoBlaze.fillName(faker.person.fullName())
        await demoBlaze.fillCountry("Indonesia");
        await demoBlaze.fillCity(faker.location.city());
        await demoBlaze.fillCard(faker.finance.accountNumber());
        await demoBlaze.fillMonth(faker.date.month());
        await demoBlaze.fillYear("2030");
        await demoBlaze.clickPurchase();
        await demoBlaze.closeOrderSummary();
        await page.reload()
        await expect(await demoBlaze.getTotalPrice()).toBeHidden()
    })

    test("should success delete item from cart", async ({page})=>{
        const demoBlaze = new DemoBlazePom(page)
        await demoBlaze.selectItemByName("Samsung galaxy s6");
        await demoBlaze.addToCart();
        await demoBlaze.clickHomeButton();
        await demoBlaze.selectItemByName("Sony xperia z5");
        await demoBlaze.addToCart();
        await demoBlaze.clickHomeButton();
        await demoBlaze.selectItemByName("HTC One M9");
        await demoBlaze.addToCart();
        await demoBlaze.clickHomeButton();
        await demoBlaze.selectItemByName("Nexus 6");
        await demoBlaze.addToCart();
        await demoBlaze.goToCart();
        await expect(await demoBlaze.getTotalPrice()).toHaveText("2030");
        await demoBlaze.removeItemFromCartByName("HTC One M9")
        await expect(await demoBlaze.getTotalPrice()).toHaveText("1330");
    })
})