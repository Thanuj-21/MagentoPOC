import {test} from '@playwright/test';

test('Sorting',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('.product_sort_container').selectOption('Price (low to high)');
    await page.waitForSelector('.inventory_item_price');
    const prices = await page.$$('.inventory_item_price');
    for(const price of prices){
        console.log(await price.innerText())

    }

    await page.locator(`(//div[@class='pricebar']/button)[${prices.length}]`).click()
    await page.pause();

})