import {test} from '@playwright/test';
import path from 'path';

test('storage state',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState();
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button',{name:/Login/}).click();
    await page.context().storageState({path:'login.json'});

})