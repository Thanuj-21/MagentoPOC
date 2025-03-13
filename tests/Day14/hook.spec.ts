import {test,chromium,Page,Browser,BrowserContext} from '@playwright/test';

let browser:Browser;
let context:BrowserContext;
let page:Page;

test.beforeAll("Before All tests",async()=>{

    browser = await chromium.launch({headless:false});
    context = await browser.newContext();
    page= await context.newPage();
    console.log("****** Before All Tests *******");
})

test.beforeEach("Before Each Test",async()=>{
    console.log("****** Before Each Tests *******");
})

test("test 1 outside descibe",async()=>{
    console.log("Test 1 outside describe")
})

test.describe("describe",async()=>{
    test.beforeAll("before All inside describe",async()=>{
        console.log("****** Before All Tests ******* inside Describe")
    })

    test.beforeEach("before each inside descibe",async()=>{
        console.log("****** Before Each Tests ******* inside describe")
    })

    test("test 2 inside describe ",async()=>{
        console.log("executing test inside describe")
    })

    test("test3 inside describe block",async()=>{
        console.log("executing test inside describe");
    })
    test.afterEach("After each inside describe ",async()=>{
        console.log("After each inside describe");
    })
    test.afterAll("After all inside describe",async()=>{
        console.log("After all inside descibe");
    })

})

test.afterEach("After each All tests",async()=>{
    console.log("After each Tests");
})

test.afterAll("After all Tests",async()=>{
    console.log("After all Tests");
})