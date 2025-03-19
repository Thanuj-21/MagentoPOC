import {test,expect} from '@playwright/test';
import {faker} from '@faker-js/faker';

let myid:number
let tokenno:number

const fname:string = faker.person.firstName();
const lname:string = faker.person.lastName();
const price:number= faker.number.int(5000);

const todaydate = new Date();
const future = new Date(todaydate);
future.setDate(todaydate.getDate()+7)

test('POST',async({request})=>{

    console.log(fname,lname,price,todaydate,future)

    const res = await request.post("https://restful-booker.herokuapp.com/booking",{
        data:{
        "firstname" : fname,
        "lastname" : lname,
        "totalprice" : price,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : todaydate,
            "checkout" : future
        },
        "additionalneeds" : "Breakfast"
        },
        headers:{
            "Accept":"application/json"
        }
    })

    console.log(await res.json())
    const respBody = await res.json();
    expect(res.status()).toBe(200);
    expect(res.ok()).toBeTruthy();
})