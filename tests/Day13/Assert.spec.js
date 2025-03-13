import {test,expect} from '@playwright/test';
import exp from 'constants';

test('Basic Assertions - Hard and Soft',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");

    await expect(page.locator('//h2[text()="Mouse Hover"]')).toBeVisible();
    const enabled = await page.locator('[value="sunday"]');
    await expect(enabled).toBeEnabled();

    await page.check('[value="sunday"]');
    await expect (enabled).toBeChecked({timeout:5000});


})