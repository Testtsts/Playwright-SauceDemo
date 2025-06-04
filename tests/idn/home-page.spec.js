const { test,expect } = require('playwright/test');
const {HomePage,MEDIA_SUBDOMAIN,CONNECT_SUBDOMAIN,PROFILE_SUBDOMAIN} = require('./home-page')

test.describe('Home Page Navigation', ()=>{
    test.beforeEach(async({page})=>{
        const homePage = new HomePage(page)
        await homePage.goto()
    })

    test('should redirect to doctor profile when clicking Profil Dokter', async ({page})=>{
        const homePage = new HomePage(page)
        await homePage.clickProfileDokter();
        const newPagePromise = page.waitForEvent('popup');
        const dokterPage = await newPagePromise;
        await dokterPage.waitForLoadState();
        await expect(dokterPage).toHaveURL(PROFILE_SUBDOMAIN)
    })

    test('should redirect to login page when clicking Community Menu', async ({page})=>{
        const homePage = new HomePage(page)
        await homePage.clickCommunityMenu();
        const connectSubDomainPattern = new RegExp(CONNECT_SUBDOMAIN)
        await expect(page).toHaveURL(connectSubDomainPattern)
    })


})