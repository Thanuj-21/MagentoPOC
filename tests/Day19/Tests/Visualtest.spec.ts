import {test,expect} from '@playwright/test';
import exp from 'constants';

test.only('visual',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(10000);
    await page.getByPlaceholder('Username').fill('Admin');
    //expect(page).toHaveScreenshot()
    expect(await page.screenshot({fullPage:true})).toMatchSnapshot('orangehrm.png')
})