import {Locator,Page,expect} from '@playwright/test';
import {URL} from "../Constants/url";
import dt from '../Testdata/logindata.json'

export class LoginFunc{

    readonly page:Page
    static pageurl=URL.baseURL
    private username:Locator
    private password: Locator
    private submitbutton: Locator
    private loggedin:Locator
    constructor(page:Page){

        this.page=page;
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.submitbutton = page.locator('#login-button')
        this.loggedin = page.locator('.app_logo')
    }

    async launchApp(){
        await this.page.goto(LoginFunc.pageurl)
        await this.page.waitForLoadState('load')
    }

    async login(){
        try{
            await this.username.fill(dt.username);
            await this.password.fill(dt.password);
            await this.submitbutton.click();
            //To validate successful login
            await this.loggedin.waitFor({state:"visible",timeout:3000})
            expect(await this.loggedin.isVisible()).toBeTruthy()
        }
        catch(err){
            console.log(`Error : ${err}`)
        }
    }

}
