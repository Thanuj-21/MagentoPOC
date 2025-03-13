import {chromium, test,expect} from '@playwright/test';
import { clearScreenDown } from 'readline';

test('DialogBoxes', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('.oxd-button').click();
    await page.getByRole('listitem').filter({hasText:'PIM'}).click();

    await page.locator("(//div[@class='oxd-select-text--after'])[3]").click();
    const values = await page.$$('[role="listbox"] > div > span');

    for(let val of values){
        const option = await val.textContent();
        if(option == 'Chief Financial Officer' )
        {
            await val.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
    
});