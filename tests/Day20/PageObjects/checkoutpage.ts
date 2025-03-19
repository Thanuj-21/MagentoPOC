import {Locator,Page,expect} from '@playwright/test';
import dt from '../Testdata/Checkoutdata.json'

export class CheckoutFunc{

    readonly page:Page
    private firstname:Locator
    private lastname: Locator
    private zipcode: Locator
    private Continue:Locator
    private Finish:Locator
    private Message: Locator
    constructor(page:Page){

        this.page=page;
        this.firstname = page.getByPlaceholder('First Name')
        this.lastname = page.getByPlaceholder('Last Name')
        this.zipcode = page.getByPlaceholder('Zip/Postal Code')
        this.Continue = page.locator('//input[@value="CONTINUE"]')
        this.Finish = page.locator('//a[text()="FINISH"]');
        this.Message = page.locator('.complete-header')
    }

    async Checkout(){
        try{
            await this.firstname.fill(dt.firstname);
            await this.lastname.fill(dt.lastname);
            await this.zipcode.fill(dt.Zipcode);
            await this.Continue.click()
            await this.Finish.click();
            const mess = await this.Message.textContent();
            expect(mess).toEqual('THANK YOU FOR YOUR ORDER')
          }
        catch(err){
            console.log(`Error : ${err}`)
        }
    }

}
