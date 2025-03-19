import { LoginFunc } from "../PageObjects/loginpage";
import {test} from '@playwright/test';
import { ProductFunc } from "../PageObjects/product";
import { CheckoutFunc } from "../PageObjects/checkoutpage";


test('Login',async({page})=>{

    //Login
    const loginpage = new LoginFunc(page);
    await loginpage.launchApp()
    await loginpage.login()

    //Add product to Cart
    const productpage = new ProductFunc(page);
    await productpage.Sort();
    await productpage.AddToCart();

    //Checkout
    const checkoutpage = new CheckoutFunc(page);
    await checkoutpage.Checkout();
})