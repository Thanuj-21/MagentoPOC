//types of fixture


import {test} from '../../Fixtures/customfixture';

//1. test fixture-requested by test and gets rerun per test
// test("test1",async({fixture1})=>{

//     console.log(`use statement execution : ${fixture1}`)
// })

// test("test2",async({fixture1})=>{

//     console.log(`use statement execution : ${fixture1}`)
// })

//2. Worker fixture- runs only once per worker

test("test1",async({fixture1,workerfixture})=>{

    console.log(`use statement execution : ${fixture1}`)
    console.log(`use statement execution : ${workerfixture}`)
})

test("test2",async({fixture1})=>{

    console.log(`use statement execution : ${fixture1}`)
})