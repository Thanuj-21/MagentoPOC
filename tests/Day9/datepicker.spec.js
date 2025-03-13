import {chromium, test,expect} from '@playwright/test';
import moment from 'moment';

test('Datepicker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill('#datepicker',"21/09/2025");
    await page.waitForTimeout(5000);

    // await page.fill('#txtDate',"21/09/2025");
    // await page.waitForTimeout(5000);
});
test('Datepicker Range',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.getByPlaceholder('Start date').click();

    await SelectDate(10,"April 2025");
    //await SelectDate(21,"September 2025");
    async function SelectDate(date,datetoSelect){

        const current = page.locator('(//th[@class="datepicker-switch"])[1]');
        const prev = page.locator('(//th[@class="prev"])[1]');
        const next = page.locator('(//th[@class="next"])[1]');

        const thismonth = moment(datetoSelect,"MMMM YYYY").isBefore();

        while(await current.textContent() !=  datetoSelect){

            if(thismonth){
                await prev.click();
            }
            else{
                await next.click();
            }
        }
        await page.click(`//td[@class='day' and text()=${date}]`);
        await page.waitForTimeout(5000);
    }
})