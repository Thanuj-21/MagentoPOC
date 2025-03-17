import {test,chromium} from '@playwright/test';

test('geolocation',async()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext({
        geolocation:{
            latitude:31.264231,
            longitude:-98.671841
        },
        permissions:['geolocation']
    })
    const page = await context.newPage();

    await page.goto('https://www.google.com')
    await page.waitForTimeout(2000);
    await browser.close()
})

// test('Without Geolocation',async({page})=>{

//     await page.goto("https://www.google.com");
//     await page.goto('https://www.amazon.in')
// })