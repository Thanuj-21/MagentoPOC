import {chromium, test} from '@playwright/test';

test('SanpDeal', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://www.snapdeal.com/");
    await page.waitForTimeout(3000);
    const home = await page.locator('//span[text()="Home & Kitchen"]');
    home.hover();
    await page.waitForTimeout(3000);
    const item = await page.locator('//span[text()="Water Purifiers"]');
    item.dblclick();
    await page.waitForTimeout(3000);
    await page.locator('//div[text()="Water Dispensers & Coolers"]').click({button:'right'});
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('load');
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
})
