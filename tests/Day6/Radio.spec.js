import {chromium, test,expect} from '@playwright/test';

test('RadioandCheckboxes', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('input#male').click();
    await expect(page.locator('input#female')).not.toBeChecked();

    await page.locator('input#sunday').click();
    await page.locator('input#monday').click();
    await expect(page.locator('input#tuesday')).not.toBeChecked();
    await expect(page.locator('input#sunday')).toBeChecked();
    


})