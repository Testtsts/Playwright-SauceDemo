exports.HOME_URL = "https://magento.softwaretestingboard.com/"

exports.HomePage = class HomePage{
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page = page;
        this.searchBar = page.locator('#search');
        this.searchButton = page.getByTitle('Search')
    }

    async searchForItem(keyword){
        await this.searchBar.fill(keyword);
        await this.searchButton.click()
    }

    async visitPage(){
        await this.page.goto("https://magento.softwaretestingboard.com/")
    }

}

