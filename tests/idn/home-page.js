const { expect } = require("playwright/test");

exports.HomePage = class HomePage{

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.page= page
    }
    async goto(){
        await this.page.goto('https://www.idntimes.com/');
        await expect(this.page.locator('[data-testid="header-logo-img"]')).toBeVisible()
    }

    async clickJoinButton(){
        await this.page.locator('[data-testid="join-btn"]').click()
    }

    async clickProfileDokter(){
        await this.page.getByText("Profil Dokter").click()
    }  

    async clickCommunityMenu(){
        await this.page.locator('[data-testid="menu-community-link"]').click()
    }

    async clickBusinessMenu(){
        await this.page.locator('[data-testid="menu-business-link"]').click();
    }

    async clickTechMenu(){
        await this.page.locator('[data-testid="menu-tech-link"]').click();
    }

    async clickHealthMenu() {
        await this.page.locator('[data-testid="menu-health"]').click();
    }
    
    async clickCareerSideBar(){
        await this.page.locator('[data-testid="sidebar-career"] > a').click();
    }


}

exports.PROFILE_SUBDOMAIN = 'https://profil.idntimes.com'
exports.CONNECT_SUBDOMAIN = 'https://connect.idn.media'
exports.MEDIA_SUBDOMAIN = 'https://www.idn.media'