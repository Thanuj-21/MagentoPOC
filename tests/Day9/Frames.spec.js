import {chromium, test,expect} from '@playwright/test';
import moment from 'moment';

test('Nested Frames', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    const outerframe = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    outerframe.fill('[name="mytext3"]','Thanuj');
    const innerframe  = await outerframe.frameLocator("//iframe");
    await page.waitForTimeout(5000);
    const inner_element = await innerframe.locator("//span[text()='Web Testing']");
    await inner_element.click();
    await page.waitForTimeout(5000);


});