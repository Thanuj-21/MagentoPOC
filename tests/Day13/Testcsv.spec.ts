import {test,expect} from '@playwright/test';
import fs from "fs";
import {parse} from "csv-parse/sync"
import exp from 'constants';

//To read data 

const data = parse(fs.readFileSync("C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/TestsData/test.csv"),{
    columns:true,
    skip_empty_lines:true,
    //delimiter:"+"
})
data.forEach((dt:any) => {
    test(`Test with Data ${dt.ID}`,async({page})=>{

        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForLoadState();
        await page.locator("#name").fill("dt.Firstname");
        await page.locator('#email').fill("dt.Lastname");
    
    
    }) 
});
