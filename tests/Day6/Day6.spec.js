import {chromium, test} from '@playwright/test';

test('SanpDeal', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://www.snapdeal.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    await page.getByRole('heading',{name:'We would like to send you'}).isVisible();
    await page.getByRole('heading',{name:'We would like to send you'}).isHidden();
    


})