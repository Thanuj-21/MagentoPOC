import {test,expect,request} from '@playwright/test';
import { runInNewContext } from 'vm';
let myid:number;

test('GET',async()=>{

    const apicontext = await request.newContext({ignoreHTTPSErrors:true});
    const res = await apicontext.get("https://reqres.in/api/users?page=2");
    console.log(await res.json()) //output json format
    expect(res.status()).toBe(200); //post verification
})

test('POST',async()=>{
    
    const apicontext = await request.newContext({ignoreHTTPSErrors:true});
    const res = await apicontext.post("https://reqres.in/api/users",
        {
            data://body
            {
                "name":"playwrightThanuj",
                "job":"learning123"
            },
            headers:
            {
                "Accept":"application/json"
            }
        }
    )

    console.log(await res.json())
    expect(res.status()).toBe(201)

    let resid = await res.json()
    myid = resid.id
    console.log(`***********created id is ${myid} *********`)

})

test('PUT',async()=>{

    const apicontext = await request.newContext({ignoreHTTPSErrors:true});
    const res = await apicontext.post(`https://reqres.in/api/users/${myid}`,
    {
        data://body
        {
            "name":"playwrightThanuj",
            "job":"learning123"
        },
        headers:
        {
            "Accept":"application/json"
        }
    }
)
console.log(await res.json())
expect(res.status()).toBe(201)
})

test('PATCH',async()=>{

    const apicontext = await request.newContext({ignoreHTTPSErrors:true});
    const res = await apicontext.post(`https://reqres.in/api/users/${myid}`,
    {
        data://body
        {
            "name":"playwrighanuj",
            "job":"learni3"
        }
    }
)
console.log(await res.json())
expect(res.status()).toBe(201)
})

test("DELETE",async()=>{
    const apicontext = await request.newContext({ignoreHTTPSErrors:true})
    const res =await apicontext.delete(`https://reqres.in/api/users/${myid}`)
    expect(res.status()).toBe(204)
 
})