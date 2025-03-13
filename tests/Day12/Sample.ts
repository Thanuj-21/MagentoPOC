//Tuple - Typed array

 let myTuple: [number,boolean,string]= [5,true,"Thanuj"];
// //myTuple = [false,'OHOOO',9]
myTuple.push('Hello')
myTuple.push(100)
myTuple.push(false)
console.log(myTuple);

//Missing numbers

function findMissingValues(arr:number[]):number[]{
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    const completeArray : number[] = [];

    for(let i=min;i<=max;i++){
        completeArray.push(i);
    }
    return completeArray;
}
const inputArray = [1,2,3,5,7];
const outputArray = findMissingValues(inputArray);
console.log(outputArray);

//Genrics

let printValues=<X,Y,Z>(x:X,y:Y,z:Z)=>{
    console.log(`x:${typeof x}, y:${typeof y}, z:${typeof z}`)
}

printValues(1,true,"Thanuj")