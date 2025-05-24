const {HomePage,HOME_URL,} = require('./home-page')
const { test, expect} =  require('@playwright/test');
const {CatalogSearch} = require("./catalog-search-page")

test.describe("search function", ()=>{
    test("using jacket as keyword should return relevant products",async({page})=>{
        const homePage = new HomePage(page)
        await homePage.visitPage()
        expect(page.url()).toEqual(HOME_URL);
        await homePage.searchForItem("jacket");
        expect(page.url()).toContain("catalogsearch")
        const catalogSearch = new CatalogSearch(page);
        await expect(await catalogSearch.getNthProduct(0)).toContainText("Jacket")

        // for(let indexProduct=0;indexProduct<5;indexProduct++){
        //     expect(await catalogSearch.getNthProduct(indexProduct)).toContainText("Jacket",{useInnerText:true});
        // }
    })

})