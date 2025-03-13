import {chromium, test,expect} from '@playwright/test';
import { clearScreenDown } from 'readline';

test('keyboard Actions', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php");
    await page.locator('#fullname').fill("Thanuj");
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000);
    
});