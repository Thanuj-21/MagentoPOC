import { LoginFunc } from "../PageObject/loginpage";
import {test} from '@playwright/test';


test('Login',async({page})=>{

    //Login
    const loginpage = new LoginFunc(page);
    await loginpage.launchApp()
    await loginpage.login()
})