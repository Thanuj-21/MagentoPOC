import {test} from '@playwright/test';

test.use({storageState:'login.json'})

test('storage state',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(5000);
})