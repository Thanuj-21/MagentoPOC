import {chromium, test,expect} from '@playwright/test';
import { clearScreenDown } from 'readline';

test('Scroll Actions - 1 ', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //way 1
    await page.evaluate(()=>{
        window.scrollBy(0,80)
        
    })
    await page.waitForTimeout(5000);
});
test('Scroll Actions - 2', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
       //way 2
    const ele = page.locator('#country');
    ele.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);

});

test('Scroll Actions - 3', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
       let val = page.locator('#country');
       const box = await val.boundingBox();
       if(box){
           console.log(box.x);
           console.log(box.y);
           await page.mouse.wheel(0,box.y);
       }
       await page.waitForTimeout(10000);

});
