import {chromium, devices, test} from '@playwright/test';

test('device emulation',async()=>{

    const mobile = devices['Galaxy S5'];

    const browser = await chromium.launch();
    const context = await browser.newContext({...mobile});
    const page = await context.newPage();
    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
})

test('device emulation using page',async({page})=>{
    

    const mobile = devices['Desktop Firefox HiDPI'];

    // const browser = await chromium.launch();
    // const context = await browser.newContext({...mobile});
    // const page = await context.newPage();
    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
})