import {chromium, test,expect} from '@playwright/test';
import moment from 'moment';

test('Multitab context - event handler', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const pagepromise = context.waitForEvent('page'); //page- name of the event
    await page.getByText('OrangeHRM, Inc').click();
    const newpage = await pagepromise

    expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM')
    await newpage.getByPlaceholder('Enter your email address here').fill('Thanuj');
    await page.waitForTimeout(3000);
    await browser.close();

    
});

test('Multitab context - Promise', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const[multipage] = await Promise.all(
        [
            context.waitForEvent('page'),
            await page.getByText('OrangeHRM, Inc').click()
        ]
    )
   await multipage.waitForLoadState();
    // to find the number of pages opened and to get the url of the open pages
    const totalpage = multipage.context().pages();
    console.log(totalpage.length)
    totalpage.forEach((localurl)=>{
        console.log(localurl.url())
    })

    let webpage;
    for(let i=0;i< await totalpage.length;i++){
        const title = await totalpage[i].title();
        if(title == 'Human Resources Management Software | OrangeHRM'){
            webpage=totalpage[i];
        }
    }

    await webpage.getByPlaceholder('Enter your email address here').fill('Thanuj')
    await page.waitForTimeout(3000);
    await browser.close();

    
});