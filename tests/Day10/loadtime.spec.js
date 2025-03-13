import {chromium, test,expect} from '@playwright/test';
import moment from 'moment';

test('Load Time', async({page})=>{

    const start = performance.now(); //start
    await page.goto("https://testautomationpractice.blogspot.com/");
    const end = performance.now(); //end
    console.log(`page load time : ${start - end}`);
    
});