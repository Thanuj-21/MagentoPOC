import {chromium, test,expect} from '@playwright/test';
import moment from 'moment';

test('Web Table - Select Product', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator('#productTable');
    const column = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    await SelectProduct(rows,page,'Smartphone')
    await SelectProduct(rows,page,'Laptop')

    async function SelectProduct(rows,page,product){
        const variable = rows.filter({has:page.locator('td'),hasText:product})
        await variable.getByRole('checkbox').check();

    }
});

test('Web Table - Read multiple Products', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('#productTable');
    const column = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const pages = await page.locator('.pagination li a');
    for(let p=0;p< await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();
        }
        for(let i=0; i< await rows.count();i++){
            const row = rows.nth(i);
            const tds = row.locator('td');
            for(let j=0;j< await tds.count();j++){
                console.log(await tds.nth(j).textContent());
            }
        }
    }
    await page.waitForTimeout(3000);
});