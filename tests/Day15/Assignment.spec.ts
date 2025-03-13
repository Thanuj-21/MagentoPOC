import {test,expect,chromium} from '@playwright/test';
import data from '../TestsData/TestAssignment.json'

test('Sign up and create new account',async({page})=>{


    await page.goto("https://automationexercise.com/");
    await page.locator('i.fa-lock').click();
    await page.getByPlaceholder("Name").fill("Thanuj");
    await page.locator("//input[@data-qa='signup-email']").fill('Thanujgooglii@gmail.com');
    await page.locator('//button[text()="Signup"]').click();
    await page.locator('#id_gender1').click();
    await page.locator('#password').fill("Test@1234");
    await page.locator('#newsletter').click();
    await page.locator('#days').selectOption('21');
    await page.locator('#months').selectOption('September');
    await page.locator('#years').selectOption('2001');
    await page.locator('#first_name').fill("Thanuj");
    await page.locator('#last_name').fill("Googli");
    await page.locator('#company').fill("CTS");
    await page.locator('#address1').fill("Coimbatore");
    await page.locator('#address2').fill("Trichy");
    await page.locator('#country').selectOption('India');
    await page.locator('#state').fill('Tamil Nadu');
    await page.locator('#city').fill('Kovai');
    await page.locator('#zipcode').fill('620009');
    await page.locator('#mobile_number').fill('6200090908');
    await page.locator('//button[text()="Create Account"]').click();

})

test('Product Checkout',async({page})=>{

    await page.goto("https://automationexercise.com/");
    await page.locator('i.fa-lock').click();
    await page.locator("//input[@data-qa='login-email']").fill(data.Email);
    await page.getByPlaceholder('Password').fill(data.Password);
    await page.locator('//button[text()="Login"]').click();
    await page.locator('(//div[@class="productinfo text-center"])[1]').hover();
    await page.locator('(//a[@class="btn btn-default add-to-cart"])[1]').click();
    await page.locator('//u[text()="View Cart"]').click();
    await page.locator('//a[text()="Proceed To Checkout"]').click();
    await page.locator('//a[text()="Place Order"]').click();
    await page.locator('//input[@name="name_on_card"]').fill(data.Card_name);
    await page.locator('//input[@name="card_number"]').fill(data.Card_number);
    await page.locator('//input[@name="cvc"]').fill('777');
    await page.locator('//input[@name="expiry_year"]').fill('2026');
    await page.locator('//input[@name="expiry_month"]').fill('03');
    await page.locator('#submit').click();
    await expect(page.locator('//b[text()="Order Placed!"]')).toBeVisible();

})

test('Alert  Box, Switch Tab  and Iframe',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    //Alert
    await page.locator('#alertbtn').click();
    await page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.on('dialog', dialog => dialog.dismiss());

    //Switch Tab
    const Pagepromise = context.waitForEvent('page');
    await page.locator('#opentab').click();
    const newPage = await Pagepromise;
    await newPage.locator('(//a[text()="Courses"])[1]').click();
    console.log(await newPage.title());
    await newPage.close();
    //Iframe
    const innerframe = await page.frameLocator('#courses-iframe')
    await innerframe.locator('(//a[text()="Courses"])[1]').click();
    await page.waitForTimeout(5000);






})