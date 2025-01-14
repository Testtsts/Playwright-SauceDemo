exports.CheckoutStepOne = class CheckoutStepOne{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;
        this.firstNameField = page.locator('[data-test="firstName"]');
        this.lastNameField = page.locator('[data-test="lastName"]');
        this.postalCodeField = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    async fillFirstNameField(firstName){
        await this.firstNameField.fill(firstName);
    }

    async filllastNameField(lastName){
        await this.lastNameField.fill(lastName);
    }

    async fillPostalCodeField(postalCode){
        await this.postalCodeField.fill(postalCode);
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }
}


exports.CHECKOUT_ONE_URL = "https://www.saucedemo.com/checkout-step-one.html"