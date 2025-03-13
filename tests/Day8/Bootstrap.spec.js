import {chromium, test,expect} from '@playwright/test';
import { clearScreenDown } from 'readline';

test('Bootstrap Dropdown', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://www.google.com");
    await page.locator('#APjFqb').fill('playwright');
    await page.waitForSelector('//span[text()="playwright"]');
    const options = await page.$$('//span[text()="playwright"]');

    for(let opt of options){

        let textValue = await opt.textContent();
        if(textValue == "playwright automation"){
            await opt.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
    
    
});