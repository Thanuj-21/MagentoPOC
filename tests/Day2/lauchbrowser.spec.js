import {chromium, test} from '@playwright/test';

test('lauch browser', async()=>{

    const br =  await chromium.launch();
    const con  = await br.newContext();
    const page = await con.newPage();

    await page.goto("https://www.google.com");
})