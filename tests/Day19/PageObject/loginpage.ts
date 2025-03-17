import {Locator,Page,expect} from '@playwright/test';
import dt from '../TestData/testdata.json'
import {URL} from "../PageObject/Constants/url";

export class LoginFunc{

    readonly page:Page
    static pageurl=URL.baseURL
    private loginclick:Locator
    private username:Locator
    private password: Locator
    private submitbutton: Locator
    private loggedin: Locator
    constructor(page:Page){

        this.page=page;
        this.loginclick=page.getByRole('link',{name:'Signup / Login'})
        this.username = page.locator('//input[@data-qa="login-email"]')
        this.password = page.locator('//input[@data-qa="login-password"]')
        this.submitbutton = page.getByRole('button',{name:'Login'})
        this.loggedin = page.getByRole('link',{name:"Logout"})
    }

    async launchApp(){
        await this.page.goto(LoginFunc.pageurl)
        await this.page.waitForLoadState('load')
    }

    async login(){
        try{
            await this.loginclick.click();
            await this.username.fill(dt.username);
            await this.password.fill(dt.password);
            await this.submitbutton.click();
            //To validate successful login
            await this.loggedin.waitFor({state:"visible",timeout:30000})
            expect(await this.loggedin.isVisible()).toBeTruthy()
        }
        catch(err){
            console.log(`Error : ${err}`)
        }
    }

}
