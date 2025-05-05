const {HomePage,HOME_URL,} = require('#pages/home-page')
const { test, expect} =  require('@playwright/test');
const {CatalogSearch} = require("#pages/catalog-search-page")

test.describe("sort product by price", ()=>{
    test.beforeEach(async({page})=>{
        const homePage = new HomePage(page)
        await homePage.visitPage()
        expect(page.url()).toEqual(HOME_URL);
        await homePage.searchForItem("jacket");
        expect(page.url()).toContain("catalogsearch")
        
    })
    test("sort by price descending ",async({page})=>{
        const catalogSearch = new CatalogSearch(page);
        await catalogSearch.selectSortPrice();
        // console.log(await cataloSearch.firstItemPrice.innerText())
        var firstItemPriceLocator = await catalogSearch.firstItemPrice.innerText();
        firstItemPrice = Number(firstItemPriceLocator.replace(/[$.]/g,""));
        console.log(firstItemPrice);
        var secondItemPrice = await catalogSearch.secondItemPrice.innerText();
    })

    test("sort by price ascending ",async({page})=>{
        const catalogSearch = new CatalogSearch(page);
        await catalogSearch.selectSortPrice();
        await catalogSearch.clickSwitchSort();
        // console.log(await catalogSearch.firstItemPrice.innerText())
    })
})