import {chromium, test} from '@playwright/test';

test('Set Viewport',async()=>{

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.google.com");

    const width = await page.evaluate(()=>{
        return window.screen.width
    })
    console.log(width)

    const height = await page.evaluate(()=>{
        return window.screen.height
    })
    console.log(height)

    await page.setViewportSize({width,height})
    await page.goto('https://www.google.com');
    await page.waitForTimeout(5000);
})

test('Viewport',async()=>{

    const browser = await chromium.launch(
        // {
        //     headless:false,
        //     args:['--start-maximized']}
        
    );

    const context = await browser.newContext(
        {
            viewport:{
                height:1080,
                width:720
            }
        }
    )

    const page = await context.newPage();
    const width = await page.evaluate(()=>{
        return window.screen.width
    })
    console.log(width);

    const height = await page.evaluate(()=>{
        return window.screen.height
    })
    console.log(height);

    await page.goto("https://www.google.com");
})