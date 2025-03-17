//use test.extend() to create custom fixture

import {test as basetest} from '@playwright/test';

//custom type annotation in TS
type fixture1={
    fixture1:string
}

type worker={
    workerfixture:any
}

export const test = basetest.extend<fixture1,worker>({
    fixture1:async({},use)=>{
        //before use
        const fixture1 = "Playwright planning"
        console.log(" Before executing use stmt -fixture1")
        await use(fixture1)
        //after use
        console.log("After executing use stmt -fixture1")
    },
    workerfixture:[async({},use)=>{
        //before
        const workerfixture = "Worker fixture"
        console.log('Before executing use stmt workerfixture')
        //use - will run the test from the fixture is called
        await use(workerfixture)
        //after
        console.log("After executing use stmt worker")},
        {scope:"worker"}
]
})

//1. test fixture - whenever requested by test method, it gets rerun for every test
//2. worker fixture - it will run only once per worker