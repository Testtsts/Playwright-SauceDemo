const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page;
        this.userNameField = page.locator('[data-test="username"]');
        this.passWordField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.loginLogo = page.locator('.login_logo')
        
        
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.loginLogo).toContainText("Swag Labs");
    }

    async writeUserName(userName){
        await this.userNameField.fill(userName);
    }

    async writePassword(password){
        await this.passWordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
      
}