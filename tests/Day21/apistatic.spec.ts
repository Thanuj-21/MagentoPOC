import {test,expect} from '@playwright/test';

import * as staticjson from '../TestsData/apijson.json'
test("POST",async({request})=>{

    const res = await request.post("https://restful-booker.herokuapp.com/booking",{
        data:staticjson,
        headers:{
            "Accept":"application/json"
        }
    })

    console.log(await res.json())
    const respBody = await res.json();
    expect(res.status()).toBe(200);
    expect(res.ok()).toBeTruthy();

    //validate json response
    expect(respBody.booking).toHaveProperty("firstname","static")
})