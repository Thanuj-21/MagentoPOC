import {Locator,Page,expect} from '@playwright/test';

export class ProductFunc{

    readonly page:Page
    private filter:Locator
    private product: Locator
    private addTocart: Locator
    private Cart:Locator
    private Yourcart:Locator
    private Checkout: Locator
    private price:Locator
    constructor(page:Page){

        this.page=page;
        this.filter = page.locator('.product_sort_container')
        this.price = page.locator('.inventory_item_price')
        this.addTocart = page.locator('(//div[@class="pricebar"]/button)[6]')
        this.Cart = page.locator('.shopping_cart_container')
        this.Yourcart = page.locator('.subheader');
        this.Checkout = page.locator('.checkout_button');
    }
    async Sort(){
    await this.filter.selectOption('Price (low to high)');
    await this.page.waitForSelector('.inventory_item_price')
    // const prices = await this.page.$$('.inventory_item_price');
    // await this.page.locator(`(//div[@class='pricebar']/button)[${prices.length}]`).click()
    // const prices = await this.page.$$eval()

    }

    async AddToCart(){
        try{
            
            await this.Cart.click();
            await this.Checkout.click()
            await this.Yourcart.waitFor({state:"visible",timeout:3000})
            expect(await this.Yourcart.isVisible()).toBeTruthy()

            
        }
        catch(err){
            console.log(`Error : ${err}`)
        }
    }

}
