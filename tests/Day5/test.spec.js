import {chromium, test} from '@playwright/test';

test('OrangeHRM', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Leave' }).click();

    


})