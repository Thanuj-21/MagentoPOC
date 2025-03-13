//Tuple - Typed array
var myTuple = [5, true, "Thanuj"];
// //myTuple = [false,'OHOOO',9]
myTuple.push('Hello');
myTuple.push(100);
myTuple.push(false);
console.log(myTuple);
//Missing numbers
function findMissingValues(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var completeArray = [];
    for (var i = min; i <= max; i++) {
        completeArray.push(i);
    }
    return completeArray;
}
var inputArray = [1, 2, 3, 5, 7];
var outputArray = findMissingValues(inputArray);
console.log(outputArray);
//Genrics
var printValues = function (x, y, z) {
    console.log("x:".concat(typeof x, ", y:").concat(typeof y, ", z:").concat(typeof z));
};
printValues(1, true, "Thanuj");
