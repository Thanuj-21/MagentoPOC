import {chromium, test} from '@playwright/test';

test('lauch browser', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://www.saucedemo.com/v1/");

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page
    .locator('div .inventory_item')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    .getByRole('button', { name: 'Add to cart' })
    .click();
    await page.locator('div.shopping_cart_container a').click();
    


})