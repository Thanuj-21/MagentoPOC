import {chromium, test,expect} from '@playwright/test';
import moment from 'moment';
import { Z_ASCII } from 'zlib';

test('Single File upload', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setInputFiles("input[type='file']","C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/Day11/Images/1.jpg");
    await page.waitForTimeout(3000);
});
test('Multiple File upload', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.setInputFiles('#multipleFilesInput',["C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/Day11/Images/1.jpg","C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/Day11/Images/2.jpg"]);
    await page.waitForTimeout(3000);
    //remove
    await page.setInputFiles('#multipleFilesInput',[]);
    await page.waitForTimeout(3000);
});

test('Multiple File upload - Event Handler', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const uploadFile = page.waitForEvent('filechooser');
    await page.locator('#multipleFilesInput').click();

    const upload = await uploadFile;
    upload.setFiles(["C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/Day11/Images/1.jpg","C:/Users/2303723/OneDrive - Cognizant/Desktop/Playwright/tests/Day11/Images/2.jpg"]);
    await page.waitForTimeout(3000);
});

