import {chromium, test,expect} from '@playwright/test';
import { clearScreenDown } from 'readline';

test('DialogBoxes', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('input#sunday').check();
    await page.locator('input#monday').check();
    await page.locator('input#sunday').uncheck();
    await expect(page.locator('input#sunday')).not.toBeChecked();
    await expect(page.locator('input#monday')).toBeChecked();
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message());
        console.log(dialog.defaultValue());
        await dialog.accept("Thanuj");
    })
    await page.locator("#promptBtn").click();
    await page.waitForTimeout(2000);
    
});