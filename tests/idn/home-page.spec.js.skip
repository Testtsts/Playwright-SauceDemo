const { test,expect } = require('playwright/test');
const {HomePage,MEDIA_SUBDOMAIN,CONNECT_SUBDOMAIN,PROFILE_SUBDOMAIN} = require('./home-page')

test.skip('Home Page Navigation', ()=>{
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

    test('should redirect to selected news page when clicking headline news', async ({page})=>{
        const homePage = new HomePage(page)
        await homePage.clickTechMenu();
        await expect(page).toHaveURL(/tech/);
        await homePage.clickBusinessMenu();
        await expect(page).toHaveURL(/business/);
        await homePage.clickHealthMenu();
        await expect(page).toHaveURL(/health/);
    })

    test('should redirect to career page when clicking career sidebar', async ({page})=>{
        const homePage = new HomePage(page);
        await homePage.clickCareerSideBar();
        await expect(page).toHaveURL(/idn.media\/career/)
    })


})