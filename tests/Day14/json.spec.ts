import {test,expect} from '@playwright/test';
import data from '../TestsData/test2.json';

for(const dt of data){
    test(`json test ${dt.Id}`,async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("#name").fill(dt.Name);
        await page.locator("#email").fill(dt.Email);

    })
}