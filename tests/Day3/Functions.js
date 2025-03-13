let number = (x)=>{
    if(x%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
number(17);

let arr = [2,3,0,5,0,6]

let nonZeros = arr.filter(num => num !== 0);
let Zeros = arr.filter(num=> num ===0);
console.log([...nonZeros,...Zeros]);

